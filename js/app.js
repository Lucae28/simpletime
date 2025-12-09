// Alle Texte zentral definiert
const translations = {
  de: {
    heading: "SimpleTime – Support",
    subtitle:
      "Danke, dass du SimpleTime verwendest! Wenn du Fragen, Feedback oder Probleme hast, kannst du dich jederzeit melden.",
    "language-label": "Sprache",
    "contact-heading": "Kontakt",
    "contact-email-label": "E-Mail:",
    "faq-heading": "Häufige Fragen",
    "faq1-question": "Datenverlust?",
    "faq1-answer":
      "Stelle sicher, dass iCloud in den iOS-Einstellungen aktiviert ist und SimpleTime Zugriff auf iCloud hat.",
    "faq2-question": "Backup wiederherstellen?",
    "faq2-answer":
      "Öffne SimpleTime > Einstellungen > Backup und wähle die gewünschte Backup-Datei.",
    "footer-note": "SimpleTime Support-Seite"
  },
  en: {
    heading: "SimpleTime – Support",
    subtitle:
      "Thanks for using SimpleTime! If you have questions, feedback or issues, feel free to reach out anytime.",
    "language-label": "Language",
    "contact-heading": "Contact",
    "contact-email-label": "Email:",
    "faq-heading": "Frequently Asked Questions",
    "faq1-question": "Data loss?",
    "faq1-answer":
      "Make sure iCloud is enabled in iOS settings and that SimpleTime has access to iCloud.",
    "faq2-question": "Restore backup?",
    "faq2-answer":
      "Open SimpleTime > Settings > Backup and choose the backup file you want to restore.",
    "footer-note": "SimpleTime support page"
  }
};

// wendet die Übersetzungen für eine gegebene Sprache an
function applyTranslations(lang) {
  const dict = translations[lang] || translations.de;

  // HTML lang-Attribut aktualisieren
  document.documentElement.lang = lang;

  // Page-Title separat setzen
  if (dict.heading) {
    document.title = dict.heading;
  }

  // Alle Elemente mit data-i18n füllen
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// Setup nach Laden der Seite
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("languageSwitcher");

  // Standard: Browser-Sprache grob auswerten
  const browserLang = (navigator.language || "de").slice(0, 2);
  const initialLang = translations[browserLang] ? browserLang : "de";

  select.value = initialLang;
  applyTranslations(initialLang);

  select.addEventListener("change", () => {
    applyTranslations(select.value);
  });
});
