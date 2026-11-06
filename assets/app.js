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
  document.getElementById("talks").innerHTML = EVENTS.flatMap((ev) =>
    ev.talks.map(
      (t) => `
      <article class="talk" id="talk-${slug(t.speaker)}">
        ${photoLink(t)}
        <div>
          ${t.time ? `<p class="talk-time">${esc(t.time)}</p>` : ""}
          <h3 class="talk-title">${t.title ? esc(t.title) : '<span class="tba">Title to be announced</span>'}</h3>
          <p class="talk-who"><strong>${nameLink(t)}</strong>, ${esc(t.affiliation)}</p>
          ${t.abstract ? `<details><summary>abstract</summary><div class="note c1">${richText(t.abstract)}</div></details>` : ""}
          ${t.bio ? `<details><summary>about the speaker</summary><div class="note c1">${richText(t.bio)}</div></details>` : ""}
        </div>
      </article>`
    )
  ).join("");
})();
