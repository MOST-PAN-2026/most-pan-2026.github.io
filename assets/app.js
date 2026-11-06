(function () {
  const S = window.SITE;
  const EVENTS = window.EVENTS;
  const NEW_TAB = '<span class="vh"> (opens in new tab)</span>';

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Escape, turn bare URLs into links, and split blank lines into paragraphs.
  const richText = (s) =>
    s
      .split(/\n\s*\n/)
      .map((p) => "<p>" + esc(p).replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1' + NEW_TAB + '</a>') + "</p>")
      .join("");

  const initials = (name) =>
    name
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("");

  const slug = (name) =>
    name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

  const nameLink = (t) =>
    t.website
      ? `<a class="site" href="${esc(t.website)}" target="_blank" rel="noopener">${esc(t.speaker)}${NEW_TAB}</a>`
      : esc(t.speaker);

  const photoLink = (t) =>
    t.website
      ? `<a class="site" href="${esc(t.website)}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${avatar(t)}</a>`
      : avatar(t);

  const avatar = (t) =>
    `<div class="avatar" data-initials="${esc(initials(t.speaker))}">
       ${t.photo ? `<img src="${esc(t.photo)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
     </div>`;

  // --- Site-wide fields -----------------------------------------------------
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key === "deadline") {
      el.textContent = S.registrationDeadline ? `Registration closes ${S.registrationDeadline}.` : "";
    } else {
      el.textContent = S[key] || "";
    }
  });
  document.querySelectorAll("[data-href]").forEach((el) => (el.href = S[el.dataset.href]));

  document.getElementById("register-line").innerHTML = S.registrationUrl
    ? `→ <a href="${esc(S.registrationUrl)}" target="_blank" rel="noopener">Registration form${NEW_TAB}</a>`
    : "→ The registration form will be linked here soon.";

  document.getElementById("contact-line").innerHTML = S.contactEmail
    ? `Contact: <a href="mailto:${esc(S.contactEmail)}">${esc(S.contactEmail)}</a>`
    : "";

  // --- Programme ------------------------------------------------------------
  const COLORS = ["c1", "c2"];
  const shortDate = (ev) => ev.dateLabel.replace(/^\w+, /, "").replace(/ (\w{3})\w* \d{4}$/, " $1");

  const talkHtml = (t) => `
    <article class="talk" id="talk-${slug(t.speaker)}">
      ${photoLink(t)}
      <div>
        ${t.time ? `<p class="talk-time">${esc(t.time)}</p>` : ""}
        <h4 class="talk-title">${t.title ? esc(t.title) : '<span class="tba">Title to be announced</span>'}</h4>
        <p class="talk-who"><strong>${nameLink(t)}</strong>${t.affiliation ? `, ${esc(t.affiliation)}` : ""}</p>
        ${t.bio ? `<p class="talk-bio">${esc(t.bio)}</p>` : ""}
        ${t.abstract ? `<details><summary>abstract</summary><div class="note">${richText(t.abstract)}</div></details>` : ""}
      </div>
    </article>`;

  // Small line icons for breaks, drawn in the current text colour.
  const ICONS = {
    coffee: '<path d="M4 10h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11.5h1.5a2.5 2.5 0 0 1 0 5H15.5"/><path d="M8 3.5c-.6 1 .6 2 0 3.5M12 3.5c-.6 1 .6 2 0 3.5"/>',
    lunch: '<path d="M7 3v7M5 3v5a2 2 0 0 0 4 0V3M7 10v11"/><path d="M17 21V3c-2 1.2-3 4-3 7.5h3"/>',
  };
  const icon = (name) =>
    ICONS[name] ? `<svg class="slot-icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>` : "";

  const itemHtml = (x) => {
    if (x.heading) return `<h3 class="session">${esc(x.heading)}</h3>`;
    if (x.speaker) return talkHtml(x);
    return `<p class="slot${x.kind === "break" ? " break" : ""}"><span class="slot-time">${esc(x.time)}</span> ${icon(x.icon)}${esc(x.text)}</p>`;
  };

  document.getElementById("day-tabs").innerHTML = EVENTS.map(
    (ev, i) => `
    <button type="button" role="tab" id="tab-${ev.id}" aria-controls="panel-${ev.id}" class="${COLORS[i % COLORS.length]}">
      <span class="tag">${esc(shortDate(ev))}</span>
      <span class="tab-label">Day ${i + 1}: ${esc(ev.title)}</span>
    </button>`
  ).join("");

  document.getElementById("talks").innerHTML = EVENTS.map(
    (ev, i) => `
    <div class="day ${COLORS[i % COLORS.length]}" role="tabpanel" id="panel-${ev.id}" aria-labelledby="tab-${ev.id}">
      <p class="day-title">${esc(ev.dateLabel)}: <strong>${esc(ev.title)}</strong>${ev.subtitle ? `. ${esc(ev.subtitle)}` : ""}</p>
      ${ev.schedule.map(itemHtml).join("")}
    </div>`
  ).join("");

  const tabs = [...document.querySelectorAll("#day-tabs [role=tab]")];
  const select = (id, focus) => {
    tabs.forEach((b) => {
      const on = b.id === "tab-" + id;
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
      if (on && focus) b.focus();
    });
  };
  tabs.forEach((b, i) => {
    b.addEventListener("click", () => select(EVENTS[i].id));
    b.addEventListener("keydown", (e) => {
      const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (d) select(EVENTS[(i + d + EVENTS.length) % EVENTS.length].id, true);
    });
  });

  // Open the day from the URL (#day1 / #day2), else the next upcoming day.
  const today = new Date().toISOString().slice(0, 10);
  const fromHash = EVENTS.find((ev) => location.hash === "#" + ev.id);
  const upcoming = EVENTS.find((ev) => ev.date >= today) || EVENTS[EVENTS.length - 1];
  select((fromHash || upcoming).id);
})();
