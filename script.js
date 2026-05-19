const posts = [{ id: 1, category: "Polska", edition: "week", importance: 9, date: "2026-04-26", source: "PAP / gov.pl", title: "Od listopada 2026 założenie działalności gosp. będzie możliwe wyłącznie przez Internet, np. w aplikacji mObywatel.", body: "Przedsiębiorcy będą musieli korzystać z profilu zaufanego lub podpisu kwalifikowanego. Nowy system ma automatycznie wykrywać błędy we wnioskach i aktualizować dane bez udziału przedsiębiorcy. 1 wniosek wystarczy, by system sam powiadomił ZUS, urząd skarbowy oraz GUS." }, { id: 2, category: "Świat", edition: "week", importance: 7, date: "2026-04-24", source: "Reuters", title: "Europejskie miasta testują krótsze komunikaty kryzysowe w aplikacjach miejskich.", body: "Nowy format ma pomagać szybciej zrozumieć najważniejsze alerty. W pierwszych pilotażach użytkownicy najczęściej wybierali krótkie podsumowania, jasne przyciski działania i możliwość zapisania komunikatu na później." }, { id: 3, category: "Pozytywy", edition: "week", importance: 8, date: "2026-04-26", source: "Pyk Desk", title: "Rośnie liczba lokalnych inicjatyw wymiany rzeczy zamiast zakupów.", body: "Największą popularnością cieszą się ubrania, książki i drobne sprzęty domowe. Organizatorzy podkreślają, że takie akcje są proste, tanie i budują sąsiedzką społeczność bez nadmiaru formalności." }, { id: 4, category: "Twórcy", edition: "week", importance: 6, date: "2026-04-22", source: "Creator Lab", title: "Twórcy coraz częściej projektują newslettery jako mini-aplikacje.", body: "Zamiast długich bloków tekstu pojawiają się sekcje, mikroakcje, zapisywanie tematów i krótkie wersje audio. Trend wynika z potrzeby szybkiego przeglądania treści na telefonie." }, { id: 5, category: "Live", edition: "week", importance: 10, date: "2026-04-26", source: "Live Feed", title: "Na żywo: najważniejsze aktualizacje dnia w jednym miejscu.", body: "Relacja zbiera krótkie komunikaty z kilku kategorii. Wpisy są aktualizowane dynamicznie, a użytkownik może zapisać najważniejsze fragmenty do ulubionych." }, { id: 6, category: "Technologia", edition: "week", importance: 5, date: "2026-04-21", source: "Tech Brief", title: "Aplikacje newsowe upraszczają ekrany startowe i stawiają na szybkie filtry.", body: "Nowe wzorce interfejsów skracają drogę do najważniejszych wpisów. Najczęściej pojawiają się przewijane kategorie, mikrofiltry i zapisane preferencje czytania." }, {
  id: 7,
  category: "Polska",
  edition: "week",
  importance: 7,
  date: "2026-04-27",
  source: "PAP",
  title: "Nowe ułatwienia dla osób korzystających z usług publicznych online.",
  body: "Urzędy rozwijają kolejne cyfrowe formularze, które mają skrócić czas załatwiania spraw i ograniczyć liczbę wizyt osobistych."
},
{
  id: 8,
  category: "Świat",
  edition: "week",
  importance: 6,
  date: "2026-04-27",
  source: "Reuters",
  title: "Miasta w Europie testują inteligentne systemy zarządzania ruchem.",
  body: "Nowe rozwiązania mają zmniejszyć korki, poprawić bezpieczeństwo pieszych i szybciej reagować na utrudnienia w centrum miast."
},
{
  id: 9,
  category: "Pozytywy",
  edition: "week",
  importance: 8,
  date: "2026-04-28",
  source: "Good News",
  title: "Coraz więcej bibliotek organizuje darmowe warsztaty dla mieszkańców.",
  body: "Największym zainteresowaniem cieszą się zajęcia z nowych technologii, rękodzieła, języków obcych i spotkania sąsiedzkie."
},
{
  id: 10,
  category: "Twórcy",
  edition: "week",
  importance: 7,
  date: "2026-04-28",
  source: "Creator Lab",
  title: "Twórcy internetowi stawiają na krótsze serie edukacyjne.",
  body: "Zamiast długich materiałów coraz częściej publikują krótkie cykle z konkretnymi poradami, checklistami i przykładami do zastosowania od razu."
},
{
  id: 11,
  category: "Live",
  edition: "week",
  importance: 9,
  date: "2026-04-29",
  source: "Live Feed",
  title: "Aktualizacja: najważniejsze informacje dnia w skrócie.",
  body: "Relacja zbiera szybkie komunikaty z kraju, świata, technologii i tematów lokalnych. Najważniejsze wpisy są oznaczane priorytetem."
},
{
  id: 12,
  category: "Technologia",
  edition: "week",
  importance: 6,
  date: "2026-04-29",
  source: "Tech Brief",
  title: "Aplikacje mobilne coraz częściej dodają tryb spokojnego czytania.",
  body: "Nowy trend skupia się na większych odstępach, czytelniejszej typografii i ograniczeniu liczby elementów rozpraszających użytkownika."
}, {
  id: 13,
  category: "Polska",
  edition: "week",
  importance: 8,
  date: "2026-04-30",
  source: "gov.pl",
  title: "Nowe cyfrowe usługi publiczne mają skrócić czas obsługi spraw urzędowych.",
  body: "System ma prowadzić użytkownika krok po kroku przez najczęstsze formularze i automatycznie podpowiadać brakujące dane."
},
{
  id: 14,
  category: "Świat",
  edition: "week",
  importance: 7,
  date: "2026-04-30",
  source: "Reuters",
  title: "Europejskie stolice rozwijają aplikacje do szybkiego zgłaszania problemów miejskich.",
  body: "Mieszkańcy mogą zgłaszać awarie, utrudnienia i uszkodzenia infrastruktury bezpośrednio z telefonu."
},
{
  id: 15,
  category: "Pozytywy",
  edition: "week",
  importance: 9,
  date: "2026-05-01",
  source: "Good News",
  title: "Szkoły organizują więcej lokalnych akcji społecznych z udziałem uczniów.",
  body: "Najczęściej są to zbiórki rzeczy, pomoc seniorom, sadzenie roślin i działania porządkowe w okolicy."
},
{
  id: 16,
  category: "Twórcy",
  edition: "week",
  importance: 6,
  date: "2026-05-01",
  source: "Creator Lab",
  title: "Twórcy testują krótsze formaty poradników z gotowymi szablonami.",
  body: "Materiały są projektowane tak, aby użytkownik mógł od razu pobrać checklistę, notatkę albo przykład do własnego projektu."
},
{
  id: 17,
  category: "Live",
  edition: "week",
  importance: 10,
  date: "2026-05-01",
  source: "Live Feed",
  title: "Live: szybkie aktualizacje z kraju i świata.",
  body: "Najważniejsze informacje są dodawane w krótkich blokach, z oznaczeniem czasu publikacji i kategorii tematu."
},
{
  id: 18,
  category: "Technologia",
  edition: "week",
  importance: 7,
  date: "2026-05-02",
  source: "Tech Brief",
  title: "Nowe aplikacje newsowe dodają personalizowane skróty tematów.",
  body: "Użytkownik może wybrać kilka ulubionych kategorii, a ekran główny pokazuje tylko najważniejsze wpisy z tych obszarów."
},
{
  id: 19,
  category: "Polska",
  edition: "week",
  importance: 6,
  date: "2026-05-02",
  source: "PAP",
  title: "Samorządy zapowiadają więcej usług dostępnych przez aplikacje mobilne.",
  body: "W pierwszej kolejności rozwijane są zgłoszenia lokalne, płatności, rezerwacje wizyt i powiadomienia o ważnych terminach."
},
{
  id: 20,
  category: "Świat",
  edition: "week",
  importance: 8,
  date: "2026-05-02",
  source: "World Desk",
  title: "Miasta inwestują w prostsze komunikaty dla mieszkańców podczas kryzysów.",
  body: "Nowe alerty mają być krótsze, bardziej konkretne i zawierać jasną informację, co użytkownik powinien zrobić."
},
{
  id: 21,
  category: "Pozytywy",
  edition: "week",
  importance: 7,
  date: "2026-05-03",
  source: "Local Good",
  title: "Rośnie popularność osiedlowych grup pomocy sąsiedzkiej.",
  body: "Mieszkańcy wymieniają się informacjami, rzeczami i drobną pomocą, a lokalne grupy coraz częściej działają także offline."
},
{
  id: 22,
  category: "Twórcy",
  edition: "week",
  importance: 8,
  date: "2026-05-03",
  source: "Creator Lab",
  title: "Newslettery coraz częściej przypominają interaktywne magazyny.",
  body: "Pojawiają się krótkie sekcje, reakcje, miniankiety, przyciski zapisu i podsumowania dla osób czytających na telefonie."
},
{
  id: 23,
  category: "Live",
  edition: "week",
  importance: 9,
  date: "2026-05-03",
  source: "Live Feed",
  title: "Relacja dnia: najważniejsze tematy aktualizowane na bieżąco.",
  body: "Wpisy są grupowane według kategorii, a najnowsze komunikaty pojawiają się na górze listy."
},
{
  id: 24,
  category: "Technologia",
  edition: "week",
  importance: 6,
  date: "2026-05-03",
  source: "Tech Brief",
  title: "Aplikacje testują tryb bardzo krótkich podsumowań wiadomości.",
  body: "Użytkownik może najpierw przeczytać jednozdaniowy skrót, a dopiero później rozwinąć pełną treść wpisu."
},
{
  id: 25,
  category: "Polska",
  edition: "week",
  importance: 7,
  date: "2026-05-04",
  source: "PAP",
  title: "Nowe rozwiązania online mają ułatwić kontakt obywateli z administracją.",
  body: "Najważniejsze zmiany dotyczą prostszych formularzy, szybszych powiadomień i lepszej obsługi spraw przez telefon."
},
{
  id: 26,
  category: "Świat",
  edition: "week",
  importance: 6,
  date: "2026-05-04",
  source: "Global Brief",
  title: "W wielu krajach rośnie znaczenie prostych usług cyfrowych dla mieszkańców.",
  body: "Najczęściej rozwijane są systemy powiadomień, rezerwacje online, zgłoszenia lokalne i cyfrowe dokumenty."
},
{
  id: 27,
  category: "Pozytywy",
  edition: "week",
  importance: 8,
  date: "2026-05-04",
  source: "Good News",
  title: "Lokalne kawiarnie i biblioteki tworzą miejsca do pracy i nauki.",
  body: "Coraz więcej punktów udostępnia spokojne przestrzenie, darmowe Wi-Fi i wydarzenia dla osób pracujących zdalnie."
},
{
  id: 28,
  category: "Twórcy",
  edition: "week",
  importance: 7,
  date: "2026-05-04",
  source: "Creator Lab",
  title: "Twórcy częściej łączą tekst, audio i krótkie grafiki w jednym wpisie.",
  body: "Format ma ułatwiać odbiór treści różnym grupom użytkowników i pozwalać wybrać wygodny sposób czytania."
},
{
  id: 29,
  category: "Live",
  edition: "week",
  importance: 10,
  date: "2026-05-04",
  source: "Live Feed",
  title: "Na żywo: szybkie podsumowanie najważniejszych aktualizacji.",
  body: "Relacja pokazuje krótkie komunikaty, źródła i możliwość zapisania najważniejszych wpisów do ulubionych."
},
{
  id: 30,
  category: "Technologia",
  edition: "week",
  importance: 8,
  date: "2026-05-04",
  source: "Tech Brief",
  title: "Interfejsy aplikacji informacyjnych stają się prostsze i bardziej modułowe.",
  body: "Projektanci ograniczają liczbę elementów na ekranie, dodają większe odstępy i szybkie przełączniki tematów."
},
{
  id: 31,
  category: "Polska",
  edition: "today",
  importance: 10,
  date: todayISO(),
  source: "PAP",
  title: "Nowe cyfrowe usługi publiczne są dziś najczęściej wybieranym tematem w serwisach informacyjnych.",
  body: "Użytkownicy sprawdzają głównie informacje o dokumentach, terminach urzędowych i szybkich płatnościach online."
},
{
  id: 32,
  category: "Polska",
  edition: "today",
  importance: 8,
  date: todayISO(),
  source: "gov.pl",
  title: "Administracja przypomina o możliwości załatwiania spraw urzędowych przez internet.",
  body: "Największe zainteresowanie dotyczą dziś wniosków online, powiadomień SMS oraz usług dostępnych w aplikacjach mobilnych."
},
{
  id: 33,
  category: "Polska",
  edition: "today",
  importance: 7,
  date: todayISO(),
  source: "Pyk Desk",
  title: "Krótki przegląd dnia: najważniejsze zmiany i komunikaty dla użytkowników usług publicznych.",
  body: "W jednym miejscu zebrano najważniejsze informacje dotyczące dokumentów, terminów, zgłoszeń i cyfrowej obsługi spraw."
},
{
  id: 34,
  category: "Live",
  edition: "today",
  importance: 10,
  date: todayISO(),
  source: "Live Feed",
  title: "Na żywo: dzisiejsze aktualizacje pojawiają się w krótkich blokach.",
  body: "Relacja zbiera szybkie komunikaty z kraju, świata i technologii. Najważniejsze wpisy trafiają na górę listy."
},
{
  id: 35,
  category: "Pozytywy",
  edition: "today",
  importance: 8,
  date: todayISO(),
  source: "Good News",
  title: "Lokalne inicjatywy społeczne zyskują dziś większą widoczność w mediach.",
  body: "Najczęściej pojawiają się akcje sąsiedzkie, zbiórki rzeczy, warsztaty i wydarzenia organizowane przez biblioteki."
},
{
  id: 36,
  category: "Technologia",
  edition: "today",
  importance: 8,
  date: todayISO(),
  source: "Tech Brief",
  title: "Aplikacje informacyjne coraz mocniej stawiają na szybkie podsumowania dnia.",
  body: "Projektanci upraszczają ekrany startowe, dodają krótsze bloki tekstu i filtry pomagające szybko znaleźć najważniejsze tematy."
}
];
const state = { 
  category: "Polska", 
  query: "", 
  pendingQuery: "", 
  edition: "today", 
  sort: "newest", 
  view: "home", 
  favorites: JSON.parse(localStorage.getItem("pykFavs") || "[]") 
};
const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const feed = $("#newsFeed"), favFeed = $("#favoritesFeed"), toast = $("#toast"), app = $("#app"), navEl = $("#bottomNav");
function showToast(t) { toast.textContent = t; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1600) }
function saveFavs() { localStorage.setItem("pykFavs", JSON.stringify(state.favorites)) }
function openDrawer() { $("#sideMenu").classList.add("open"); $("#drawerBackdrop").classList.add("open"); }
function closeDrawer() { $("#sideMenu").classList.remove("open"); $("#drawerBackdrop").classList.remove("open"); }
function categories() { const cats = ["Polska", "Świat", "Pozytywy", "Twórcy", "Live", "Technologia"]; $("#categories").innerHTML = cats.map(c => `<button class="pill ${state.category === c ? "active" : ""}" data-cat="${c}">${c}</button>`).join(""); $$(".pill").forEach(b => b.onclick = () => { state.category = b.dataset.cat; render(); }); }
function filtered(onlyFav = false) { let arr = [...posts]; if (onlyFav) arr = arr.filter(p => state.favorites.includes(p.id)); else arr = arr.filter(p => p.category === state.category); if (state.edition === "today") {
  const today = todayISO();
  arr = arr.filter(p => p.date === today);
} else if (state.edition !== "all" && state.edition !== "range") {
  arr = arr.filter(p =>
    state.edition === "week" ? true :
    state.edition === "month" ? true :
    true
  );
} if (state.query.trim()) { const q = state.query.toLowerCase(); arr = arr.filter(p => (p.title + " " + p.body + " " + p.source).toLowerCase().includes(q)); } if (state.sort === "newest") arr.sort((a, b) => b.date.localeCompare(a.date)); if (state.sort === "oldest") arr.sort((a, b) => a.date.localeCompare(b.date)); return arr }
function card(p) { const fav = state.favorites.includes(p.id); return `<article class="card"><div class="tag">${p.category}</div><h3>${p.title}</h3><p>${p.body}</p><footer><button class="heart ${fav ? "active" : ""}" data-save="${p.id}">${fav ? "♥" : "♡"}</button><button class="source-btn" data-source="${p.source}">${p.source}</button><button class="share" data-share="${p.id}">↗</button></footer></article>` }
function wireActions() { $$("[data-save]").forEach(b => b.onclick = () => { const id = +b.dataset.save; state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites, id]; saveFavs(); render(); showToast(state.favorites.includes(id) ? "Dodano do ulubionych" : "Usunięto z ulubionych") }); $$(".source-btn").forEach(b => b.onclick = () => showToast("Źródło: " + b.dataset.source)); $$(".share").forEach(b => b.onclick = async () => { const p = posts.find(x => x.id == b.dataset.share); const text = `${p.title} — ${p.source}`; try { if (navigator.share) await navigator.share({ title: "PYK News", text }); else await navigator.clipboard.writeText(text); showToast("Udostępnianie gotowe / skopiowano"); } catch (e) { showToast("Udostępnianie anulowane") } }); }
function adjustLayout() { requestAnimationFrame(() => { let contentBottom = 0; if (state.view === "home") { const box = $("#dynamicArea"); contentBottom = box.offsetTop + box.offsetHeight; } else if (state.view === "favorites") { contentBottom = Math.max(720, $("#favoritesFeed").offsetTop + $("#favoritesFeed").offsetHeight); } else { const list = document.querySelector("#" + state.view + "View .settings-list"); contentBottom = list ? list.offsetTop + list.offsetHeight : 420; } navEl.style.top = (contentBottom + 18) + "px"; app.style.minHeight = (contentBottom + 18 + 76) + "px"; }); }
function setTodayDate() {
  const todayDateEl = document.querySelector("#todayDate");

  if (!todayDateEl) return;

  const today = new Date();

  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(today);

  todayDateEl.textContent = formattedDate;
}

setTodayDate();

// opcjonalnie: sprawdza co minutę, gdyby apka była otwarta przez północ
setInterval(setTodayDate, 60 * 1000);

render();

function render() { categories(); $("#feedTitle").textContent = state.category === "Live" ? "Live feed" : "Najważniejsze"; $("#feedLabel").textContent = state.query ? `Wyniki dla: ${state.query}` : "Dzisiejszy przegląd"; $("#editionTrigger").textContent = editionLabel(state.edition); $("#sortTrigger").textContent = sortLabel(state.sort); $("#editionSelect").value = state.edition; $("#sortSelect").value = state.sort; const arr = filtered(false); feed.innerHTML = (arr.length ? arr.map(card).join("") : `<div class="empty">Brak wpisów dla tych ustawień. Zmień kategorię, wyszukiwanie albo filtry.</div>`); const favs = filtered(true); favFeed.innerHTML = favs.length ? favs.map(card).join("") : `<div class="empty">Nie masz jeszcze ulubionych wpisów. Kliknij serce przy newsie, a pojawi się tutaj.</div>`; wireActions(); adjustLayout(); }
function nav(view) { state.view = view; $$(".view").forEach(v => v.classList.remove("active")); $("#" + view + "View").classList.add("active"); $$(".bottom-nav button").forEach(b => b.classList.toggle("active", (view === "home" && b.hasAttribute("data-refresh")) || b.dataset.nav === view)); $("#profileBtn").classList.toggle("active", view === "account"); closeDrawer(); render(); }
$("#menuBtn").onclick = openDrawer; $("#closeMenu").onclick = closeDrawer; $("#drawerBackdrop").onclick = closeDrawer; $("#profileBtn").onclick = () => { nav("account"); showToast("Otworzono ustawienia konta") };
$$("[data-nav]").forEach(b => b.onclick = () => nav(b.dataset.nav)); $$("[data-refresh]").forEach(b => b.onclick = () => {
  state.query = "";
  state.pendingQuery = "";
  $("#searchInput").value = "";
  $("#searchBox").classList.remove("open");
  state.category = "Polska";
  state.edition = "today";
  state.sort = "newest";
  nav("home");
  showToast("Odświeżono przegląd");
}); $$("[data-open-filters]").forEach(b => b.onclick = () => { $("#filterDialog").showModal(); closeDrawer(); });
$("#searchBtn").onclick = () => { $("#searchBox").classList.add("open"); $("#searchInput").focus(); adjustLayout(); }; $("#closeSearch").onclick = () => { $("#searchBox").classList.remove("open"); state.pendingQuery = ""; state.query = ""; $("#searchInput").value = ""; render(); }; $("#searchInput").oninput = e => { state.pendingQuery = e.target.value; }; $("#searchInput").addEventListener("keydown", e => { if (e.key === "Enter") { state.query = state.pendingQuery; render(); } }); $("#runSearch").onclick = () => { state.query = state.pendingQuery; render(); showToast(state.query ? `Szukam: ${state.query}` : "Wpisz słowo do wyszukania") };
function editionLabel(v) {
  return v === "today" ? "Dzisiaj" :
         v === "week" ? "Ostatni tydzień" :
         v === "month" ? "Ostatni miesiąc" :
         v === "all" ? "Wszystkie" :
         v === "range" ? "Zakres dat" :
         "Wydanie";
}
function todayISO() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
function sortLabel(v) { return v === "oldest" ? "Najstarsze" : "Najnowsze" }
$("#editionTrigger").onclick = () => { $("#editionPopover").classList.toggle("open"); $("#sortPopover").classList.remove("open") };
$("#sortTrigger").onclick = () => { $("#sortPopover").classList.toggle("open"); $("#editionPopover").classList.remove("open") };
$$("[data-edition]").forEach(b => b.onclick = () => { state.edition = b.dataset.edition; if (state.edition === "range") { $("#dateRangeQuick").classList.add("open") } else { $("#editionPopover").classList.remove("open"); render() } });
$$("[data-sort]").forEach(b => b.onclick = () => { state.sort = b.dataset.sort; $("#sortPopover").classList.remove("open"); render() });
$("#applyRange").onclick = () => { $("#editionPopover").classList.remove("open"); state.edition = "range"; render(); showToast("Zakres dat ustawiony") };
$("#editionSelect").onchange = e => { $("#dialogRange").classList.toggle("open", e.target.value === "range") };

$("#applyFilters").onclick = () => { state.edition = $("#editionSelect").value; state.sort = $("#sortSelect").value; render(); $("#dialogRange").classList.toggle("open", state.edition === "range"); showToast("Filtry zastosowane") };
$$(".swatch").forEach(b => b.onclick = () => { $$(".swatch").forEach(x => x.classList.remove("active")); b.classList.add("active"); document.documentElement.style.setProperty("--accent", b.dataset.accent); });
$("#readingMode").onclick = () => { app.classList.toggle("big-text"); $("#readingMode").textContent = app.classList.contains("big-text") ? "Wyłącz większy tekst" : "Włącz większy tekst"; adjustLayout() };
window.addEventListener("resize", adjustLayout);

setTodayDate();
setInterval(setTodayDate, 60 * 1000);

render();