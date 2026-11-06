(function () {
  const S = window.SITE;
  const EVENTS = window.EVENTS;
  const COLORS = ["c2", "c1"];

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Escape, turn bare URLs into links, and split blank lines into paragraphs.
  const richText = (s) =>
    s
      .split(/\n\s*\n/)
      .map((p) => "<p>" + esc(p).replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>') + "</p>")
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

  const site = (t, inner) =>
    t.website ? `<a class="site" href="${esc(t.website)}" target="_blank" rel="noopener">${inner}</a>` : inner;

  const avatar = (t) =>
    `<div class="avatar" data-initials="${esc(initials(t.speaker))}">
       ${t.photo ? `<img src="${esc(t.photo)}" alt="${esc(t.speaker)}" loading="lazy" onerror="this.remove()">` : ""}
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
    ? `→ <a href="${esc(S.registrationUrl)}" target="_blank" rel="noopener">Registration form</a>`
    : "→ The registration form will be linked here soon.";

  document.getElementById("contact-line").innerHTML = S.contactEmail
    ? `Contact: <a href="mailto:${esc(S.contactEmail)}">${esc(S.contactEmail)}</a>`
    : "";

  // --- Programme ------------------------------------------------------------
  document.getElementById("programme").innerHTML = EVENTS.map(
    (ev, i) => `
    <section class="day ${COLORS[i % COLORS.length]}" id="day-${ev.id}">
      <h2>${EVENTS.length > 1 ? esc(ev.title) : "Programme"}</h2>
      ${ev.subtitle ? `<h3>${esc(ev.subtitle)}</h3>` : ""}
      ${ev.talks
        .map(
          (t) => `
        <article class="talk" id="talk-${slug(t.speaker)}">
          ${site(t, avatar(t))}
          <div>
            <p class="talk-time">${t.time ? esc(t.time) : '<span class="tba">time TBA</span>'}</p>
            <p class="talk-title">${t.title ? esc(t.title) : '<span class="tba">Title to be announced</span>'}</p>
            <p class="talk-who"><strong>${site(t, esc(t.speaker))}</strong>, ${esc(t.affiliation)}</p>
            ${t.abstract ? `<details><summary>abstract</summary><div class="note">${richText(t.abstract)}</div></details>` : ""}
            ${t.bio ? `<details><summary>about the speaker</summary><div class="note">${richText(t.bio)}</div></details>` : ""}
          </div>
        </article>`
        )
        .join("")}
    </section>`
  ).join("");

  // --- Speakers -------------------------------------------------------------
  document.getElementById("speaker-list").innerHTML = EVENTS.flatMap((ev, i) =>
    ev.talks.map(
      (t) => `
      <li class="${COLORS[i % COLORS.length]}">
        <a href="${esc(t.website || "#talk-" + slug(t.speaker))}"${t.website ? ' target="_blank" rel="noopener"' : ""}>
          ${avatar(t)}
          <span>
            <span class="sp-name">${esc(t.speaker)}</span>
            <span class="sp-aff">${esc(t.affiliation)}</span>
          </span>
        </a>
      </li>`
    )
  ).join("");
})();
