const translations = {
  de: {
    tagline: "Einfaches Zeit-Tracking, das mitdenkt.",
    languageLabel: "Sprache",
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
    languageLabel: "Language",
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
  },

  fr: {
  tagline: "Un suivi du temps simple et intelligent.",
  languageLabel: "Langue",
  headline: "Support",
  intro:
    "Merci d’utiliser SimpleTime ! Si vous avez des questions, des remarques ou des problèmes, n’hésitez pas à nous contacter.",
  contactHeading: "Contact",
  contactEmailLabel: "E-mail :",
  faqHeading: "Questions fréquentes",
  faqDataLossQuestion: "Perte de données ?",
  faqDataLossAnswer:
    "Assurez-vous qu’iCloud est activé dans les réglages iOS et que SimpleTime a l’autorisation d’utiliser iCloud.",
  faqBackupQuestion: "Restaurer une sauvegarde ?",
  faqBackupAnswer:
    "Ouvrez SimpleTime → Réglages → Sauvegarde, puis sélectionnez la sauvegarde souhaitée."
}
};

function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang");
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.de;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const select = document.getElementById("language-select");
  if (select) select.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const urlLang = getLangFromURL();

  const browserLang = (navigator.language || "de").slice(0, 2);

  const lang =
    urlLang && translations[urlLang]
      ? urlLang
      : translations[browserLang]
      ? browserLang
      : "de";

  setLanguage(lang);

  const select = document.getElementById("language-select");
  if (select) {
    select.addEventListener("change", () => {
      const newLang = select.value;
      const url = new URL(window.location);
      url.searchParams.set("lang", newLang);
      window.location.href = url.toString();
    });
  }
});
