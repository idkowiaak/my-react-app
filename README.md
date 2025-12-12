# 🌿 Aura Spaces

> **Aura Spaces** to nowoczesny landing page dla studia projektowania wnętrz w stylu Japandi. Projekt łączy minimalizm z funkcjonalnością, demonstrując umiejętność tworzenia responsywnych interfejsów w React.js z naciskiem na "Clean Code" i autorskie style CSS.

---

## 📸 Podgląd (Preview)

🔴 **[Zobacz Demo Online](https://aura-spaces.netlify.app/)**

---

## 🛠️ Technologie i Narzędzia

Projekt został zbudowany przy użyciu nowoczesnego stacku technologicznego, bez nadmiarowych bibliotek UI, aby zademonstrować głęboką znajomość CSS i React.

- **Core:** React.js (Hooks: `useState`, Functional Components)
- **Styling:** Czysty CSS3 (Flexbox, CSS Grid, Media Queries, Zmienne CSS)
- **Fonty:** Google Fonts (Cormorant Garamond & Poppins)
- **Struktura:** Modularna architektura komponentów
- **Ikony:** Custom Assets

---

## 🚀 Główne Funkcjonalności

### 1. Responsywny Design (RWD)

Strona jest w pełni responsywna i dostosowana do trzech głównych breakpointów:

- **Desktop:** Pełny układ gridowy i szeroka nawigacja.
- **Tablet:** Dostosowanie siatki usług i galerii (`max-width: 1024px`).
- **Mobile:** Hamburger menu, stackowanie kolumn, optymalizacja pod dotyk (`max-width: 768px` i `480px`).

### 2. Formularz Kontaktowy z Walidacją

W sekcji `ContactFormSection` zaimplementowano pełną logikę formularza bez zewnętrznych bibliotek:

- **Walidacja:** Sprawdzanie poprawności e-maila (Regex) oraz długości wiadomości.
- **Obsługa stanów:** Zarządzanie stanami `idle`, `loading`, `success`, `error`.
- **Symulacja API:** Asynchroniczna obsługa wysyłki (`Promise` + `setTimeout`) imitująca komunikację z serwerem backendowym.

### 3. Interaktywny UI

- **Smooth Scroll:** Płynne przewijanie do sekcji po kliknięciu w nawigację.
- **Dynamiczny Navbar:** Zmiana stanu menu na urządzeniach mobilnych (animacja ikony hamburgera).
- **Efekty wizualne:** Hover effects na przyciskach i linkach, cienie (box-shadow) dodające głębi.

---

## 📂 Struktura Projektu

Projekt utrzymuje czystą strukturę plików, separując logikę widoków od komponentów wspólnych.

```bash
src/
├── common/           # Komponenty wielokrotnego użytku
│   ├── Footer.jsx    # Stopka z dynamiczną datą
│   └── Navbar.jsx    # Nawigacja z logiką scrollowania
├── sections/         # Główne sekcje strony (Landing Page)
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   └── ContactFormSection.jsx
├── App.jsx           # Główny layout
├── index.css         # Globalne style i reset CSS
└── main.jsx          # Punkt wejścia aplikacji
```

## 📦 Jak uruchomić projekt lokalnie?

Sklonuj repozytorium:

Bash

```
git clone [https://github.com/idkowiaak/nazwa-twojego-repo.git](https://github.com/idkowiaak/nazwa-twojego-repo.git)
```

Wejdź do katalogu projektu:

Bash

```
cd nazwa-twojego-repo
Zainstaluj zależności:
```

Bash

```
npm install
```

Uruchom wersję deweloperską:

Bash

```
npm run dev
```

## 📬 Kontakt

Twórca: @idkowiaak
