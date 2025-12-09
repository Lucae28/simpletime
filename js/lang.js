const translations = {
  de: {
    tagline: "Einfaches Zeit-Tracking, das mitdenkt.",
    languageLabel: "Sprache:",
    headline: "Support",
    intro:
      "Danke, dass du SimpleTime verwendest! Wenn du Fragen, Feedback oder Probleme hast, kannst du dich jederzeit melden.",
    contactHeading: "Kontakt",
    contactEmailLabel: "E-Mail:",
    faqHeading: "Häufige Fragen",
    faqDataLossQuestion: "Datenverlust?",
    faqDataLossAnswer:
      "Stelle sicher, dass iCloud in den iOS-Einstellungen aktiviert ist und SimpleTime Zugriff auf iCloud hat.",
    faqBackupQuestion: "Backup wiederherstellen?",
    faqBackupAnswer:
      "Öffne SimpleTime → Einstellungen → Backup und wähle die gewünschte Backup-Datei."
  },
  en: {
    tagline: "Simple time tracking that just works.",
    languageLabel: "Language:",
    headline: "Support",
    intro:
      "Thank you for using SimpleTime! If you have any questions, feedback, or issues, feel free to reach out.",
    contactHeading: "Contact",
    contactEmailLabel: "Email:",
    faqHeading: "Frequently Asked Questions",
    faqDataLossQuestion: "Data loss?",
    faqDataLossAnswer:
      "Please make sure iCloud is enabled in iOS settings and that SimpleTime has permission to use iCloud.",
    faqBackupQuestion: "Restore a backup?",
    faqBackupAnswer:
      "Open SimpleTime → Settings → Backup and choose the backup file you want to restore."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Jahr im Footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const select = document.getElementById("language-select");

  // Sprache aus Browser übernehmen, sonst Deutsch
  const browserLang = (navigator.language || "de").slice(0, 2);
  const initialLang = translations[browserLang] ? browserLang : "de";

  select.value = initialLang;
  setLanguage(initialLang);

  select.addEventListener("change", () => {
    setLanguage(select.value);
  });
});
