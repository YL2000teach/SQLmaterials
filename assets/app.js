/* Shared rendering for index.html, chapter.html and practice.html. Content comes from course.js. */
(function () {
  const C = window.COURSE;
  const KINDS = { lesson: "תרגול בהקניה", self: "תרגול עצמי" };
  const CLAUSES = new Set("SELECT FROM WHERE GROUP BY ORDER HAVING AS DISTINCT TOP ASC DESC JOIN LEFT RIGHT INNER FULL ON CASE WHEN THEN ELSE END WITH TIES".split(" "));
  const OPS = new Set("AND OR NOT IN BETWEEN LIKE IS NULL EXISTS".split(" "));

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // `code` inside Hebrew text
  const rich = s => esc(s).replace(/`([^`]+)`/g, "&rlm;<code>$1</code>&rlm;");
  function sql(src) {
    return esc(src).replace(/(&#39;|')[^']*'|\b[A-Za-z_]+\b/g, t => {
      if (t.startsWith("'")) return `<span class="str">${t}</span>`;
      if (CLAUSES.has(t)) return `<span class="kw">${t}</span>`;
      if (OPS.has(t)) return `<span class="op">${t}</span>`;
      return t;
    });
  }
  const params = new URLSearchParams(location.search);
  const $ = sel => document.querySelector(sel);

  function topbar(crumbs) {
    return `<div class="topbar"><div class="wrap">
      <div class="crumbs">${crumbs}</div>
      <div class="setup-link">המסד FoodRush לא מותקן במחשב? <a href="${C.setupPage}" target="_blank" rel="noopener">להתקנה</a></div>
    </div></div>`;
  }
  const home = `<a href="index.html">${esc(C.title)}</a>`;
  const findChapter = n => C.chapters.find(c => c.n === n);
  function findPractice(id) {
    for (const ch of C.chapters) for (const p of ch.practices) if (p.id === id) return { ch, p };
    return null;
  }

  /* ---------- index ---------- */
  function renderIndex() {
    document.title = C.title;
    $("#app").innerHTML = topbar(home) + `<main class="wrap">
      <h1>${esc(C.title)}</h1><p class="lead">${esc(C.subtitle)}</p>
      <ul class="chapters">${C.chapters.map(ch => `
        <li><a href="chapter.html?ch=${ch.n}">
          <span class="num">${ch.n}</span><span class="t">${esc(ch.title)}</span>
          <span class="meta">${ch.practices.length ? ch.practices.length + " תרגולים" : ""}</span>
        </a></li>`).join("")}</ul>
      <footer>להתקנת המסד: <a href="${C.setupPage}">דף ההתקנה</a></footer></main>`;
  }

  /* ---------- chapter ---------- */
  function renderChapter() {
    const ch = findChapter(Number(params.get("ch")));
    if (!ch) { $("#app").innerHTML = topbar(home) + `<main class="wrap"><h1>הפרק לא נמצא</h1></main>`; return; }
    document.title = `פרק ${ch.n}: ${ch.title}`;
    const list = kind => {
      const items = ch.practices.filter(p => p.kind === kind);
      if (!items.length) return `<p class="empty">עוד אין תרגולים מהסוג הזה.</p>`;
      return `<ul class="plist">${items.map(p => `<li><a href="practice.html?id=${encodeURIComponent(p.id)}"><bdi class="t">${esc(p.title)}</bdi><span class="count">${p.questions.length} שאלות</span></a></li>`).join("")}</ul>`;
    };
    const slides = ch.slides
      ? `<div class="slides"><iframe src="${esc(ch.slides)}" allowfullscreen loading="lazy" title="מצגת פרק ${ch.n}"></iframe></div>`
      : `<div class="slides"><div class="placeholder">כאן תופיע המצגת של הפרק</div></div>`;
    $("#app").innerHTML = topbar(`${home} › פרק ${ch.n}`) + `<main class="wrap">
      <h1>פרק ${ch.n}: ${esc(ch.title)}</h1>
      <h2>ההקניה</h2>${slides}
      <h2>${KINDS.lesson}</h2>${list("lesson")}
      <h2>${KINDS.self}</h2>${list("self")}
      <footer><a href="index.html">לכל הפרקים</a></footer></main>`;
  }

  /* ---------- practice ---------- */
  const norm = v => String(v).trim().replace(/,/g, "").toLowerCase();
  function isCorrect(given, answer) {
    const g = norm(given);
    if (g === "") return null;
    if (typeof answer === "number") return Number(g) === answer;
    return g === norm(answer);
  }

  function renderPractice() {
    const found = findPractice(params.get("id"));
    if (!found) { $("#app").innerHTML = topbar(home) + `<main class="wrap"><h1>התרגול לא נמצא</h1></main>`; return; }
    const { ch, p } = found;
    document.title = `${p.title} | פרק ${ch.n}`;
    const qs = p.questions.map((q, i) => `
      <section class="q" data-i="${i}">
        <div class="q-head"><span class="q-num">${i + 1}</span><div class="q-text">${rich(q.q)}</div></div>
        <div class="row">
          <label for="a${i}">התשובה שקיבלתם${q.unit ? " (" + esc(q.unit) + ")" : ""}:</label>
          <input class="ans" id="a${i}" inputmode="decimal" autocomplete="off">
          <button class="check">בדיקה</button>
          ${q.hint ? `<button class="ghost show-hint">רמז</button>` : ""}
          <button class="ghost show-sol" disabled title="אפשר לראות את הפתרון אחרי ניסיון אחד">פתרון</button>
          <span class="fb" role="status" aria-live="polite"></span>
        </div>
        ${q.hint ? `<div class="hint hidden">${rich(q.hint)}</div>` : ""}
        <div class="sol hidden"><pre class="sql">${sql(q.solution)}</pre>${q.note ? `<div class="note">${rich(q.note)}</div>` : ""}</div>
      </section>`).join("");
    $("#app").innerHTML = topbar(`${home} › <a href="chapter.html?ch=${ch.n}">פרק ${ch.n}</a> › ${esc(KINDS[p.kind] || "")}`) + `<main class="wrap">
      <h1>${esc(p.title)}</h1>${p.intro ? `<p class="lead">${rich(p.intro)}</p>` : ""}
      ${qs}
      <div class="score" id="score">ענית נכון על 0 מתוך ${p.questions.length}</div>
      <footer><a href="chapter.html?ch=${ch.n}">חזרה לפרק ${ch.n}</a></footer></main>`;

    const solved = new Set();
    document.querySelectorAll(".q").forEach(el => {
      const i = Number(el.dataset.i), q = p.questions[i];
      const input = el.querySelector(".ans"), fb = el.querySelector(".fb"), solBtn = el.querySelector(".show-sol");
      const check = () => {
        const r = isCorrect(input.value, q.answer);
        if (r === null) { fb.className = "fb"; fb.textContent = ""; return; }
        solBtn.disabled = false;
        if (r) { fb.className = "fb ok"; fb.textContent = "נכון"; solved.add(i); }
        else { fb.className = "fb bad"; fb.textContent = "לא בדיוק. בדקו את השאילתה ונסו שוב"; solved.delete(i); }
        $("#score").textContent = `ענית נכון על ${solved.size} מתוך ${p.questions.length}`;
      };
      el.querySelector(".check").addEventListener("click", check);
      input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      const hb = el.querySelector(".show-hint");
      if (hb) hb.addEventListener("click", () => el.querySelector(".hint").classList.toggle("hidden"));
      solBtn.addEventListener("click", () => el.querySelector(".sol").classList.toggle("hidden"));
    });
  }

  const page = document.body.dataset.page;
  if (page === "index") renderIndex();
  else if (page === "chapter") renderChapter();
  else if (page === "practice") renderPractice();
})();
