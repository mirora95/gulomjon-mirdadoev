// ===== Данные: чтобы добавить новый клип или песню, добавьте строку сюда =====
// id — это код видео из ссылки YouTube: youtube.com/watch?v=ЭТОТ_КОД

const CLIPS = [
  { id: "4UfE6B9bQ8o", title: "Ай бевафо",       year: 2026, views: "3,8 тыс.", badge: "Новинка" },
  { id: "PhwnnTUVlFo", title: "Хай-Хай Санамо",  year: 2026, views: "26 тыс." },
  { id: "Al1BqDylcnU", title: "Мен ёмонни",      year: 2026, views: "6,1 тыс." },
  { id: "FpSKLrx40bo", title: "Шахри Фасона",    year: 2025, views: "75 тыс." },
  { id: "pOzNG1TaG1g", title: "Нима булди",      year: 2025, views: "8,5 тыс." },
  { id: "GZl_lisMy3M", title: "Духтари зебо",    year: 2024, views: "15 тыс." },
];

// Видео с концерта «Гулчини сурудҳо», 2024
const CONCERT = [
  { id: "WtIJCdVjySk", title: "Фаргона рубоийси", sub: "Концерт, 2024", views: "590 тыс." },
  { id: "TB1zW1f_cTI", title: "Эй падар",         sub: "Концерт, 2024", views: "99 тыс." },
  { id: "Cf3xg9e3098", title: "Попурри",          sub: "Концерт, 2024", views: "56 тыс." },
  { id: "OTTLLX1lr0U", title: "Гунчадахан",       sub: "Концерт, 2024", views: "30 тыс." },
  { id: "awX1KQ8nl_o", title: "Дунё",             sub: "Концерт, 2024 · муз. Дамирбек Олимов", views: "27 тыс." },
  { id: "8GJvFf8gp6M", title: "Нима булди",       sub: "Концерт, 2024", views: "25 тыс." },
  { id: "I4XXaaqZKVw", title: "Амира",            sub: "Концерт, 2024", views: "20 тыс." },
  { id: "QTZulZBQG8o", title: "Ту бош",           sub: "Концерт, 2024", views: "15 тыс." },
  { id: "FIejLso0p8Y", title: "Меойи ё на",       sub: "Концерт, 2024", views: "15 тыс." },
  { id: "c4Q_VLYV6zw", title: "Каламкош",         sub: "Концерт, 2024", views: "14 тыс." },
  { id: "8m91k_W3xB8", title: "Дилакам",          sub: "Концерт, 2024", views: "12 тыс." },
  { id: "CgomlFu8RaU", title: "Дили ман",         sub: "Концерт, 2024", views: "11 тыс." },
  { id: "OYnqTqndIyY", title: "Макун",            sub: "Концерт, 2024", views: "11 тыс." },
  { id: "9EUm4B9lpBY", title: "Дилозор",          sub: "Концерт, 2024", views: "10 тыс." },
  { id: "csXJJWFeGFo", title: "Ёрам куҷоӣ",       sub: "Концерт, 2024", views: "8,7 тыс." },
  { id: "2Jej_DpQxWg", title: "Дилбар",           sub: "Концерт, 2024", views: "8,6 тыс." },
  { id: "1wWBEA8OhL8", title: "Кук сомса",        sub: "Концерт, 2024", views: "8 тыс." },
  { id: "Wh8Fqcj3p2Q", title: "Ҷони ошиқ",        sub: "Концерт, 2024", views: "6,1 тыс." },
  { id: "BHs55a_dmow", title: "Нози-Нози",        sub: "Концерт, 2024", views: "6 тыс." },
  { id: "9S2xDl5plRM", title: "Гузаллар",         sub: "Концерт, 2024", views: "5,8 тыс." },
  { id: "MrtB4ZnXhKU", title: "Духтари зебо",     sub: "Концерт, 2024", views: "5,2 тыс." },
  { id: "pkUuMUFUZOI", title: "Зебо бош",         sub: "Концерт, 2024", views: "5 тыс." },
];

const TELEGRAM = "https://t.me/+992928720024";

// ===== Код страницы =====
const embed = (id, autoplay) =>
  `<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}" title="YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;

// Обложки видео лежат в img/thumbs/ (WebP, 640×360). Для нового видео положите туда файл ID.webp
const thumb = (id, big) => `img/thumbs/${id}${big ? "-lg" : ""}.webp`;

// Клипы
const clipsGrid = document.getElementById("clipsGrid");
clipsGrid.innerHTML = CLIPS.map((c, i) => `
  <button class="clip reveal" data-id="${c.id}" type="button">
    <div class="clip__thumb">
      <img src="${thumb(c.id, i === 0)}" alt="${c.title}" width="640" height="360" loading="lazy"
           onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${c.id}/hqdefault.jpg'">
      ${c.badge ? `<span class="clip__badge">${c.badge}</span>` : ""}
      <span class="play"></span>
    </div>
    <div>
      <div class="clip__title">${c.title}</div>
      <div class="clip__meta">Клип · ${c.year} · ${c.views} просмотров</div>
    </div>
  </button>`).join("");

// Модальное окно с видео
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
function openModal(id) {
  modalVideo.innerHTML = embed(id, true);
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.hidden = true;
  modalVideo.innerHTML = "";
  document.body.style.overflow = "";
}
// Видео с концерта
const concertGrid = document.getElementById("concertGrid");
concertGrid.innerHTML = CONCERT.map(c => `
  <button class="clip" data-id="${c.id}" type="button">
    <div class="clip__thumb">
      <img src="${thumb(c.id)}" alt="${c.title}" width="640" height="360" loading="lazy"
           onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${c.id}/hqdefault.jpg'">
      <span class="play"></span>
    </div>
    <div>
      <div class="clip__title">${c.title}</div>
      <div class="clip__meta">${c.views} просмотров</div>
    </div>
  </button>`).join("");

document.getElementById("videoTabs").addEventListener("click", e => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  e.currentTarget.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
  clipsGrid.hidden = tab.dataset.tab !== "clips";
  concertGrid.hidden = tab.dataset.tab !== "concert";
});

[clipsGrid, concertGrid].forEach(grid => grid.addEventListener("click", e => {
  const btn = e.target.closest(".clip");
  if (btn) { pauseAudio(); openModal(btn.dataset.id); }
}));
modal.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

// ===== Аудиоплеер =====
const audio = document.getElementById("audio");
const ap = document.getElementById("ap");
const songList = document.getElementById("songList");
const songSearch = document.getElementById("songSearch");
const songEmpty = document.getElementById("songEmpty");
const apTitle = document.getElementById("apTitle");
const apFill = document.getElementById("apFill");
const apCur = document.getElementById("apCur");
const apDur = document.getElementById("apDur");
const GROUP_NAMES = { new: "Новые", more: "Ещё песни", y2016: "2016" };

let group = "all";
let queue = [];      // индексы песен в текущем списке (с учётом вкладки и поиска)
let current = -1;    // индекс в SONGS

document.getElementById("songCount").textContent = `${SONGS.length} песен · аудио`;

const fmt = s => isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00";

function renderSongs() {
  const q = songSearch.value.trim().toLowerCase();
  queue = SONGS.map((s, i) => i).filter(i =>
    (group === "all" || SONGS[i].group === group) && (!q || SONGS[i].title.toLowerCase().includes(q)));
  songList.innerHTML = queue.map((i, n) => `
    <li><button class="song${i === current ? " active" : ""}${i === current && !audio.paused ? " playing" : ""}" data-i="${i}" type="button">
      <span class="song__num">${String(n + 1).padStart(2, "0")}</span>
      <span class="song__eq"><i></i><i></i><i></i></span>
      <span class="song__title">${SONGS[i].title}</span>
      <span class="song__group">${GROUP_NAMES[SONGS[i].group]}</span>
    </button></li>`).join("");
  songEmpty.hidden = queue.length > 0;
}

function markActive() {
  songList.querySelectorAll(".song").forEach(b => {
    const on = Number(b.dataset.i) === current;
    b.classList.toggle("active", on);
    b.classList.toggle("playing", on && !audio.paused);
  });
  ap.classList.toggle("is-playing", !audio.paused);
}

function playSong(i) {
  current = i;
  audio.src = SONGS[i].file;
  audio.play();
  apTitle.textContent = SONGS[i].title;
  ap.hidden = false;
  document.body.classList.add("has-player");
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({ title: SONGS[i].title, artist: "Гуломджон Мирдадоев" });
  }
  markActive();
}

function step(dir) {
  if (!queue.length) return;
  const pos = queue.indexOf(current);
  playSong(queue[(pos + dir + queue.length) % queue.length]);
}

function pauseAudio() { if (!audio.paused) audio.pause(); }

songList.addEventListener("click", e => {
  const btn = e.target.closest(".song");
  if (!btn) return;
  const i = Number(btn.dataset.i);
  if (i === current) audio.paused ? audio.play() : audio.pause();
  else playSong(i);
});

document.getElementById("songTabs").addEventListener("click", e => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  e.currentTarget.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
  group = tab.dataset.group;
  renderSongs();
});
songSearch.addEventListener("input", renderSongs);
document.getElementById("playAll").addEventListener("click", () => queue.length && playSong(queue[0]));

document.getElementById("apPlay").addEventListener("click", () => audio.paused ? audio.play() : audio.pause());
document.getElementById("apPrev").addEventListener("click", () => audio.currentTime > 3 ? (audio.currentTime = 0) : step(-1));
document.getElementById("apNext").addEventListener("click", () => step(1));
document.getElementById("apSeek").addEventListener("click", e => {
  const r = e.currentTarget.getBoundingClientRect();
  if (audio.duration) audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
});

audio.addEventListener("play", markActive);
audio.addEventListener("pause", markActive);
audio.addEventListener("ended", () => step(1));
audio.addEventListener("loadedmetadata", () => { apDur.textContent = fmt(audio.duration); });
audio.addEventListener("timeupdate", () => {
  apCur.textContent = fmt(audio.currentTime);
  apFill.style.width = audio.duration ? `${(audio.currentTime / audio.duration) * 100}%` : "0";
});

if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("previoustrack", () => step(-1));
  navigator.mediaSession.setActionHandler("nexttrack", () => step(1));
}

renderSongs();

// Заявка: копируем готовый текст и открываем чат в Telegram
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  if (!name) { f.name.classList.add("invalid"); f.name.focus(); return; }
  f.name.classList.remove("invalid");
  const date = f.date.value ? f.date.value.split("-").reverse().join(".") : "уточню";
  const lines = [
    "Здравствуйте, Гуломджон!",
    `Меня зовут ${name}. Хочу пригласить вас на мероприятие.`,
    `• Тип: ${f.type.value}`,
    `• Дата: ${date}`,
    `• Город: ${f.city.value.trim() || "уточню"}`,
  ];
  if (f.note.value.trim()) lines.push(`• Комментарий: ${f.note.value.trim()}`);
  copyText(lines.join("\n"));
  document.getElementById("bookingNote").hidden = false;
  window.open(TELEGRAM, "_blank", "noopener");
});

// Telegram не умеет заранее вставлять текст в чат, поэтому копируем заявку в буфер обмена
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;opacity:0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch {}
  ta.remove();
}

// Мобильное меню
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") { navLinks.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

// Плавное появление блоков при прокрутке
document.querySelectorAll(".section__head, .about, .service, .songs, .contact").forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
