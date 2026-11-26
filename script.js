const translations = {
  ja: {
    skip: "本文へ移動", homeLabel: "Inaho Tech ホーム", navLabel: "メインナビゲーション",
    navWork: "プロジェクト", navPrinciples: "原則",
    heroLead: '<span class="keep">Inaho Techは、</span><span class="keep">日常にある小さな摩擦を見つめ、</span><span class="keep">使う人の手元で、</span><span class="keep">静かに役立つソフトウェアを</span><span class="keep">設計します。</span>', explore: "見る",
    statementLabel: "INAHO TECHについて", statementMain: '<span class="keep">Inaho Techが</span><span class="keep">つくるのは、</span><span class="keep">機能ではなく、</span><span class="keep">迷わない体験です。</span>',
    statementSub: '<span class="keep">必要なものを、</span><span class="keep">必要な場所に。</span><span class="keep">複雑さを引き受け、</span><span class="keep">体験をシンプルにする。</span><span class="keep">それがInaho Techの</span><span class="keep">ものづくりです。</span>',
    workLabel: "選ばれたプロジェクト", workTitle: "WORK / 01—02",
    kosenTagline: '<span class="keep">高専生活に必要な情報と道具を、</span><span class="keep">ひとつのアプリに。</span>',
    kosenDescription: '<span class="keep">WebClass、シラバス、時刻表、</span><span class="keep">学習ツールを整理。</span><span class="keep">授業前から放課後までを</span><span class="keep">自然につなぐ、</span><span class="keep">木更津高専向けモバイルアプリです。</span>',
    veiloadTagline: '<span class="keep">プライバシーを、</span><span class="keep">設計の中心に。</span>',
    veiloadDescription: '<span class="keep">動画の検出・処理を</span><span class="keep">端末上で完結。</span><span class="keep">アカウントも広告も</span><span class="keep">解析SDKも持たない、</span><span class="keep">Android向けオープンソースアプリです。</span>',
    install: "インストール", sourceCode: "ソースを見る", kosenPlatform: "ANDROID 8.0+ / iOS", veiloadPlatform: "ANDROID 8.0+", kosenVisualLabel: "Kosen+のアプリ画面", veiloadVisualLabel: "Veiloadのアプリ画面",
    kosenAlt1: "Kosen+のWebClass画面", kosenAlt2: "Kosen+のシラバス画面", veiloadAlt1: "Veiloadのダウンロード画面", veiloadAlt2: "Veiloadのライブラリ画面",
    principlesLabel: "つくるときの原則", principlesTitle: "LESS,<br />BUT BETTER.",
    p1Title: "現場から始める", p1Body: "仕様より先に、使う場面を見る。解くべき摩擦を正しく選びます。",
    p2Title: "複雑さを内側へ", p2Body: "技術の難しさはプロダクトが引き受け、利用者には明快な体験を届けます。",
    p3Title: "信頼を設計する", p3Body: "プライバシー、透明性、責任ある選択を最初から組み込みます。",
    backTop: "トップへ戻る ↑"
  },
  en: {
    skip: "Skip to content", homeLabel: "Inaho Tech home", navLabel: "Main navigation",
    navWork: "WORK", navPrinciples: "PRINCIPLES",
    heroLead: "Inaho Tech finds the small frictions in everyday life and designs software that works quietly, right where people need it.", explore: "EXPLORE",
    statementLabel: "ABOUT INAHO TECH", statementMain: "Inaho Tech builds clear experiences, not feature counts.",
    statementSub: "Put what matters where it belongs. Take on the complexity, then make the experience feel simple. That is how Inaho Tech builds.",
    workLabel: "SELECTED PROJECTS", workTitle: "WORK / 01—02",
    kosenTagline: "Campus essentials and everyday tools, all in one app.",
    kosenDescription: "A mobile app for Kisarazu KOSEN that brings WebClass, syllabi, transit schedules, and study tools into one continuous experience.",
    veiloadTagline: "Privacy at the center of the design.",
    veiloadDescription: "An open-source Android video downloader that processes media on-device—with no account, ads, or analytics SDK.",
    install: "INSTALL", sourceCode: "VIEW SOURCE", kosenPlatform: "ANDROID 8.0+ / iOS", veiloadPlatform: "ANDROID 8.0+", kosenVisualLabel: "Kosen+ app screens", veiloadVisualLabel: "Veiload app screens",
    kosenAlt1: "Kosen+ WebClass screen", kosenAlt2: "Kosen+ syllabus screen", veiloadAlt1: "Veiload download screen", veiloadAlt2: "Veiload library screen",
    principlesLabel: "HOW WE BUILD", principlesTitle: "LESS,<br />BUT BETTER.",
    p1Title: "START WITH REALITY", p1Body: "Before writing a spec, watch how the product will be used. Choose the right friction to remove.",
    p2Title: "HIDE THE COMPLEXITY", p2Body: "The product carries the technical weight so the person using it gets a clear, direct experience.",
    p3Title: "DESIGN FOR TRUST", p3Body: "Privacy, transparency, and responsible choices belong in the foundation—not the fine print.",
    backTop: "BACK TO TOP ↑"
  }
};

const toggle = document.querySelector("[data-language-toggle]");
const currentLabel = toggle.querySelector(".language-current");
const nextLabel = toggle.querySelector(".language-next");

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  currentLabel.textContent = language === "ja" ? "JP" : "EN";
  nextLabel.textContent = language === "ja" ? "EN" : "JP";
  toggle.setAttribute("aria-label", language === "ja" ? "Switch to English" : "日本語に切り替える");
  const meta = language === "ja" ? {
    title: "Inaho Tech | モバイルアプリの設計・開発",
    description: "Inaho Techは、Kosen+やVeiloadなど、日常の摩擦を解消するモバイルアプリを設計・開発するプロダクトスタジオです。",
    socialTitle: "Inaho Tech — 迷わない体験をつくる。",
    socialDescription: "Kosen+やVeiloadなど、日常の摩擦を解消するモバイルアプリを設計・開発しています。",
    locale: "ja_JP"
  } : {
    title: "Inaho Tech | Thoughtful Mobile App Design & Development",
    description: "Inaho Tech designs and develops focused mobile apps, including Kosen+ and Veiload, that remove friction from everyday experiences.",
    socialTitle: "Inaho Tech — Clear experiences, thoughtfully built.",
    socialDescription: "We design and develop focused mobile apps including Kosen+ and Veiload.",
    locale: "en_US"
  };
  document.title = meta.title;
  document.querySelector('meta[name="description"]').content = meta.description;
  document.querySelector('meta[property="og:locale"]').content = meta.locale;
  document.querySelector('meta[property="og:title"]').content = meta.socialTitle;
  document.querySelector('meta[property="og:description"]').content = meta.socialDescription;
  document.querySelector('meta[name="twitter:title"]').content = meta.socialTitle;
  document.querySelector('meta[name="twitter:description"]').content = meta.socialDescription;
  try { localStorage.setItem("inaho-language", language); } catch {}
}

toggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "ja" ? "en" : "ja"));
try { setLanguage(localStorage.getItem("inaho-language") === "en" ? "en" : "ja"); } catch { setLanguage("ja"); }

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const preference = matchMedia("(prefers-color-scheme: dark)");
let savedTheme;
try { savedTheme = localStorage.getItem("inaho-theme"); } catch {}
function applyTheme(dark) {
  root.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? "#151810" : "#faf9f4";
}
applyTheme(savedTheme ? savedTheme === "dark" : preference.matches);
themeButton.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  savedTheme = dark ? "dark" : "light";
  applyTheme(dark);
  try { localStorage.setItem("inaho-theme", savedTheme); } catch {}
});
preference.addEventListener("change", e => { if (!savedTheme) applyTheme(e.matches); });
const navLinks = [...document.querySelectorAll(".primary-nav a")];
const sections = navLinks.map(a => document.querySelector(a.hash));
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
let queued = false;
function renderScroll() {
  queued = false;
  const current = sections.reduce((active, section) => section.getBoundingClientRect().top < innerHeight * .45 ? section : active, null);
  navLinks.forEach(a => {
    if (current && a.hash === "#" + current.id) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
  if (reduced.matches) return;
  root.classList.add("motion-ready");
  const mark = document.querySelector(".hero-mark");
  const rect = mark.getBoundingClientRect();
  if (rect.bottom > 0) mark.style.setProperty("--seed-angle", Math.max(0, Math.min(45, -rect.top * .12)) + "deg");
  document.querySelectorAll(".project-visual").forEach(el => {
    const box = el.getBoundingClientRect();
    const value = Math.max(-12, Math.min(12, (box.top + box.height / 2 - innerHeight / 2) * .035));
    el.style.setProperty("--travel", value + "px");
  });
}
function scheduleScroll() { if (!queued) { queued = true; requestAnimationFrame(renderScroll); } }
addEventListener("scroll", scheduleScroll, { passive: true });
addEventListener("resize", scheduleScroll);
renderScroll();
