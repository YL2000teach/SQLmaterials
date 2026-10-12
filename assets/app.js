/* Shared rendering for index.html, chapter.html and practice.html. Content comes from course.js. */
(function () {
  const C = window.COURSE;
  const KINDS = Object.assign({ lesson: "תרגול בהקניה", self: "תרגול עצמי" }, C.labels || {});
  const CLAUSES = new Set("SELECT FROM WHERE GROUP BY ORDER HAVING AS DISTINCT TOP ASC DESC JOIN LEFT RIGHT INNER FULL ON CASE WHEN THEN ELSE END WITH TIES".split(" "));
  const OPS = new Set("AND OR NOT IN BETWEEN LIKE IS NULL EXISTS".split(" "));

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // `code` inside Hebrew text
  const rich = s => esc(s).replace(/&lt;br&gt;/g, "<br>").replace(/`([^`]+)`/g, "&rlm;<code>$1</code>&rlm;");
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
      <div class="setup-link">המסד FoodRush לא מותקן במחשב? <a href="${C.setupPage}" target="_blank" rel="noopener">להתקנה</a>${C.schemaPage ? ` · <a href="${C.schemaPage}" target="_blank" rel="noopener">מבנה המסד</a>` : ""}</div>
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
      ${C.extrasPage ? `<p class="extras-link"><a href="${C.extrasPage}">${esc(KINDS.extras || "תרגילי רשות")}: תרגילים נוספים לכל הפרקים</a></p>` : ""}
      <footer>להתקנת המסד: <a href="${C.setupPage}">דף ההתקנה</a>${C.teacherGuide ? ` · <a href="${C.teacherGuide}" target="_blank" rel="noopener">מדריך למורה</a>` : ""}</footer></main>`;
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
      <h2>ההקניה</h2>${ch.deckPages ? `<p class="deck-pages">שקפים ${esc(ch.deckPages[0])} עד ${esc(ch.deckPages[1])} במצגת</p>` : ""}${slides}
      <h2>${KINDS.lesson}</h2>${list("lesson")}
      <h2>${KINDS.self}</h2>${list("self")}
      ${ch.extras && ch.extras.length && C.extrasPage ? `<h2>${esc(KINDS.extras || "תרגילי רשות")}</h2><p><a href="${C.extrasPage}#ch${ch.n}">${ch.extras.length} תרגילים נוספים לפרק הזה</a></p>` : ""}
      <footer><a href="index.html">לכל הפרקים</a></footer></main>`;
  }

  /* ---------- practice ---------- */
  const norm = v => String(v).trim().replace(/\s+/g, " ").toLowerCase();
  const nums = v => (String(v).match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
  function isCorrect(given, answer) {
    if (String(given).trim() === "") return null;
    if (Array.isArray(answer)) {
      const g = nums(given);
      return g.length === answer.length && g.every((x, i) => x === answer[i]);
    }
    if (typeof answer === "number") { const g = nums(given); return g.length === 1 && g[0] === answer; }
    return norm(given) === norm(answer);
  }

  const open = q => q.answer === undefined || q.answer === null;
  /* questions block: used by practice pages and by the extras page. pfx keeps input ids unique */
  function questionsHTML(questions, pfx) {
    return questions.map((q, i) => `
      <section class="q" data-i="${i}">
        <div class="q-head"><span class="q-num">${i + 1}</span><div class="q-text">${rich(q.q)}</div></div>
        <div class="row">${open(q) ? "" : `
          <label for="${pfx}a${i}">${esc(q.label || "התשובה שקיבלתם")}${q.unit ? " (" + esc(q.unit) + ")" : ""}:</label>
          <input class="ans" id="${pfx}a${i}" autocomplete="off">
          <button class="check">בדיקה</button>`}
          ${q.hint ? `<button class="ghost show-hint">רמז</button>` : ""}
          <button class="ghost show-sol" ${open(q) ? "" : "disabled"} title="אפשר לראות את הפתרון אחרי ניסיון אחד">${open(q) ? "תשובה" : "פתרון"}</button>
          <span class="fb" role="status" aria-live="polite"></span>
        </div>
        ${q.hint ? `<div class="hint hidden">${rich(q.hint)}</div>` : ""}
        <div class="sol hidden">${q.solution ? `<pre class="sql">${sql(q.solution)}</pre>` : ""}${q.note ? `<div class="note">${rich(q.note)}</div>` : ""}</div>
      </section>`).join("");
  }
  function wireQuestions(root, questions, scoreEl) {
    const solved = new Set();
    const total = questions.filter(x => !open(x)).length;
    root.querySelectorAll(".q").forEach(el => {
      const i = Number(el.dataset.i), q = questions[i];
      const input = el.querySelector(".ans"), fb = el.querySelector(".fb"), solBtn = el.querySelector(".show-sol");
      const check = () => {
        const r = isCorrect(input.value, q.answer);
        if (r === null) { fb.className = "fb"; fb.textContent = ""; return; }
        solBtn.disabled = false;
        if (r) { fb.className = "fb ok"; fb.textContent = "נכון"; solved.add(i); }
        else { fb.className = "fb bad"; fb.textContent = "לא בדיוק. בדקו את השאילתה ונסו שוב"; solved.delete(i); }
        if (scoreEl) scoreEl.textContent = `ענית נכון על ${solved.size} מתוך ${total}`;
      };
      if (input) {
        el.querySelector(".check").addEventListener("click", check);
        input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      }
      const hb = el.querySelector(".show-hint");
      if (hb) hb.addEventListener("click", () => el.querySelector(".hint").classList.toggle("hidden"));
      solBtn.addEventListener("click", () => el.querySelector(".sol").classList.toggle("hidden"));
    });
  }
  function renderPractice() {
    const found = findPractice(params.get("id"));
    if (!found) { $("#app").innerHTML = topbar(home) + `<main class="wrap"><h1>התרגול לא נמצא</h1></main>`; return; }
    const { ch, p } = found;
    document.title = `${p.title} | פרק ${ch.n}`;
    if (p.kind === "self") return renderSelf(ch, p);
    $("#app").innerHTML = topbar(`${home} › <a href="chapter.html?ch=${ch.n}">פרק ${ch.n}</a> › ${esc(KINDS[p.kind] || "")}`) + `<main class="wrap">
      <h1>${esc(p.title)}</h1>${p.intro ? `<p class="lead">${rich(p.intro)}</p>` : ""}
      ${questionsHTML(p.questions, "")}
      ${p.questions.some(q => !open(q)) ? `<div class="score" id="score">ענית נכון על 0 מתוך ${p.questions.filter(q => !open(q)).length}</div>` : ""}
      <footer><a href="chapter.html?ch=${ch.n}">חזרה לפרק ${ch.n}</a></footer></main>`;
    wireQuestions(document, p.questions, $("#score"));
  }

  /* ---------- extras: all chapters on one page ---------- */
  function renderExtras() {
    const label = KINDS.extras || "תרגילי רשות";
    document.title = `${label} | ${C.title}`;
    const chs = C.chapters.filter(ch => ch.extras && ch.extras.length);
    $("#app").innerHTML = topbar(`${home} › ${esc(label)}`) + `<main class="wrap">
      <h1>${esc(label)}</h1><p class="lead">תרגילים נוספים לכל פרק, למי שרוצה עוד תרגול. לא חובה.</p>
      <nav class="toc">${chs.map(ch => `<a href="#ch${ch.n}">פרק ${ch.n}</a>`).join("")}</nav>
      ${chs.map(ch => `<div class="xch" id="ch${ch.n}" data-n="${ch.n}"><h2>פרק ${ch.n}: ${esc(ch.title)}</h2>${questionsHTML(ch.extras, "c" + ch.n + "_")}</div>`).join("")}
      <footer><a href="index.html">לכל הפרקים</a></footer></main>`;
    document.querySelectorAll(".xch").forEach(div => wireQuestions(div, findChapter(Number(div.dataset.n)).extras, null));
  }

  /* ---------- independent practice: business questions, submitted to Classroom ---------- */
  const plain = s => String(s).replace(/<br>/g, "\n").replace(/`/g, "");
  const store = {
    get(k) { try { return localStorage.getItem(k) || ""; } catch (_) { return ""; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
  };
  function renderSelf(ch, p) {
    const teacher = params.get("teacher") === "1";
    const key = f => `fr:${p.id}:${f}`;
    const qs = p.questions.map((q, i) => `
      <section class="q" data-i="${i}">
        <div class="q-head"><span class="q-num">${i + 1}</span><div class="q-text">
          ${q.title ? `<div class="q-title">${rich(q.title)}</div>` : ""}
          ${q.context ? `<p class="q-part">${rich(q.context)}</p>` : ""}
          ${q.task ? `<p class="q-part"><b>המשימה:</b> ${rich(q.task)}</p>` : ""}
          ${q.explain ? `<p class="q-part"><b>בתשובה במילים:</b> ${rich(q.explain)}</p>` : ""}
          ${q.q ? rich(q.q) : ""}</div></div>
        ${q.hint ? `<div class="hint">${rich(q.hint)}</div>` : ""}
        <label class="fld">השאילתה שכתבתם<textarea class="sqlbox" data-f="q${i}" rows="4" dir="ltr" spellcheck="false"></textarea></label>
        <label class="fld">התשובה במילים<textarea class="txtbox" data-f="t${i}" rows="2"></textarea></label>
        ${open(q) ? "" : `<div class="row">
          <label for="a${i}">בדיקה עצמית${q.label ? ": " + esc(q.label) : ""}:</label>
          <input class="ans" id="a${i}" autocomplete="off"><button class="check ghost">בדיקה</button>
          <span class="fb" role="status" aria-live="polite"></span></div>`}
        ${teacher && q.solution ? `<div class="sol"><pre class="sql">${sql(q.solution)}</pre>${q.note ? `<div class="note">${rich(q.note)}</div>` : ""}</div>` : ""}
      </section>`).join("");
    $("#app").innerHTML = topbar(`${home} › <a href="chapter.html?ch=${ch.n}">פרק ${ch.n}</a> › ${esc(KINDS.self)}`) + `<main class="wrap">
      <h1>${esc(p.title)}</h1>${p.intro ? `<p class="lead">${rich(p.intro)}</p>` : ""}
      <div class="howto"><b>איך מגישים:</b> לכל שאלה כותבים את השאילתה ב־SSMS, מעתיקים אותה לתיבה, וכותבים תשובה במילים.
        בסוף לוחצים "העתקת כל התשובות", ומדביקים במטלה ב־Classroom.</div>
      <label class="fld name">שם מלא<input class="txtbox" data-f="name" autocomplete="name"></label>
      ${qs}
      <div class="submit"><button id="copyall">העתקת כל התשובות</button><span class="fb" id="copyfb" role="status" aria-live="polite"></span></div>
      <footer><a href="chapter.html?ch=${ch.n}">חזרה לפרק ${ch.n}</a></footer></main>`;

    document.querySelectorAll("[data-f]").forEach(el => {
      el.value = store.get(key(el.dataset.f));
      el.addEventListener("input", () => store.set(key(el.dataset.f), el.value));
    });
    document.querySelectorAll(".q").forEach(el => {
      const q = p.questions[Number(el.dataset.i)], input = el.querySelector(".ans");
      if (!input) return;
      const fb = el.querySelector(".fb");
      const check = () => {
        const r = isCorrect(input.value, q.answer);
        if (r === null) { fb.className = "fb"; fb.textContent = ""; return; }
        fb.className = r ? "fb ok" : "fb bad";
        fb.textContent = r ? "נכון" : "לא בדיוק. בדקו את השאילתה";
      };
      el.querySelector(".check").addEventListener("click", check);
      input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    });
    $("#copyall").addEventListener("click", async () => {
      const v = f => (document.querySelector(`[data-f="${f}"]`).value || "").trim();
      const parts = [`שם: ${v("name") || "(לא מולא)"}`, `${p.title} (פרק ${ch.n})`.replace(`: פרק ${ch.n} (פרק ${ch.n})`, `: פרק ${ch.n}`), ""];
      p.questions.forEach((q, i) => {
        parts.push(`${i + 1}. ${plain(q.title || q.q || "")}`, "שאילתה:", v("q" + i) || "(ריק)", `תשובה: ${v("t" + i) || "(ריק)"}`, "");
      });
      const text = parts.join("\n"), fb = $("#copyfb");
      try { await navigator.clipboard.writeText(text); fb.className = "fb ok"; fb.textContent = "הועתק. עכשיו מדביקים במטלה ב־Classroom"; }
      catch (_) {
        const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
        const ok = document.execCommand("copy"); ta.remove();
        fb.className = ok ? "fb ok" : "fb bad";
        fb.textContent = ok ? "הועתק. עכשיו מדביקים במטלה ב־Classroom" : "ההעתקה נכשלה. סמנו את התשובות והעתיקו ידנית";
      }
    });
  }

  const page = document.body.dataset.page;
  function renderSchema() {
    document.title = "מבנה המסד: " + C.title;
    $("#app").innerHTML = topbar(`${home} › מבנה המסד`) + `<main class="wrap">
      <h1>מבנה המסד FoodRush</h1>
      <p class="schema-legend"><span class="pk">PK</span> מפתח ראשי. <span class="fk">FK</span> מפתח זר: מצביע על מפתח ראשי בטבלה אחרת. הקווים מחברים כל מפתח זר למפתח הראשי שהוא מצביע עליו. ההזמנות (orders) ופרטי ההזמנה (order_items) בכחול כהה.</p>
      <div class="schema-tools">
        <button type="button" data-z="in">הגדלה +</button>
        <button type="button" data-z="out">הקטנה −</button>
        <button type="button" data-z="fit">התאמה לרוחב</button>
        <a href="assets/erd.svg" target="_blank" rel="noopener">פתיחה בחלון נפרד</a>
        <button type="button" data-z="print">הדפסה</button>
      </div></main>
      <div class="schema-view"><img id="erd" src="assets/erd.svg" alt="תרשים הטבלאות של מסד FoodRush"></div>`;
    const img = $("#erd"), view = $(".schema-view");
    let w = 0;
    const fit = () => { w = view.clientWidth - 24; img.style.width = w + "px"; };
    img.addEventListener("load", fit); if (img.complete) fit();
    document.querySelectorAll(".schema-tools button").forEach(b => b.addEventListener("click", () => {
      const z = b.dataset.z;
      if (z === "in") { w = Math.round(w * 1.25); img.style.width = w + "px"; }
      else if (z === "out") { w = Math.max(300, Math.round(w / 1.25)); img.style.width = w + "px"; }
      else if (z === "fit") fit();
      else if (z === "print") window.print();
    }));
  }

  if (page === "index") renderIndex();
  else if (page === "schema") renderSchema();
  else if (page === "chapter") renderChapter();
  else if (page === "practice") renderPractice();
  else if (page === "extras") renderExtras();
})();
