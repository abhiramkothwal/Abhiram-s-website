const navContainer = document.getElementById('nav-container');

// Select all sections to observe, including the main-content div for "Home"
const sections = document.querySelectorAll('section, .main-content');
// Select all navigation links
const navLinks = document.querySelectorAll('#nav-container .nav-item a');

// IntersectionObserver options
const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.6 // highlight when 60% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove the 'active' class from all links first
            navLinks.forEach(link => link.classList.remove('active'));

            // Get the ID of the intersecting section
            const targetId = entry.target.id;
            // Find the nav link that matches the section's ID
            const activeLink = document.querySelector(`.nav-item a[data-section="${targetId}"]`);

            // Add the 'active' class to that specific link
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, options);

// Tell the observer to watch each section
sections.forEach(section => {
    observer.observe(section);
});

// Set the initial state to highlight "Home" when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('.nav-item a[data-section="home-section"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// Function to handle the accordion effect
function setupProjectsAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentItem = this.closest('.accordion-item');
            
            // Close all other open accordion items
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle the 'active' class on the clicked item
            currentItem.classList.toggle('active');
        });
    });
}

// Call this function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupProjectsAccordion);


// --- LANGUAGE TOGGLE SCRIPT ---
const translations = {
    en: {
        "welcome-top": "Welcome to Abhiram Kothwal's",
        "welcome-bottom": "Ventures in Coding & Creativity",
        "nav-home": "Home",
        "nav-about": "About Myself",
        "nav-courses": "Courses Done",
        "nav-projects": "Projects Done",
        "nav-skills": "Tech Skills",
        "nav-resume": "My Resume",
        "about-title": "Hello everyone",
        "about-text-1": "I am Abhiram kothwal; undergrad student from Information Science Engineering from Malnad Hassan. Welcome to my personal website. This website represents my Journey through Skills, Projects & Growth.",
        "about-text-2": "Vision to create transformative technology ventures with global impact.",
        "courses-title": "Courses Done",
        "projects-title": "Projects Done",
        "skills-title": "Technical Skills",
        "project-1-title": "College Canteen Management System",
        "project-1-point-1": "1. Developed a user-friendly website for students and staffs that reduced waiting time by 40%.",
        "project-1-point-2": "2. Enabled real-time order tracking using Firebase, improved overall customer satisfaction.",
        "project-1-point-3": "3. Also integrated sales analytics to ensure complete transaction transparency.",
        "project-1-point-4": "4. Streamlined order processing, cutting service time from 15 to 8 minutes.",
        "project-2-title": "AI Powered Red Eye Disease Detection Using CNN",
        "project-2-point-1": "1. Designed a website for users to upload images and detect disease.",
        "project-2-point-2": "2. Built AI model using CNN to detect red eye disease in 3 categories.",
        "project-2-point-3": "3. Achieved 97% accuracy in automatically detecting red eye conditions.",
        "project-2-point-4": "4. Facilitated real-time prediction of disease severity for immediate action.",
        "project-2-point-5": "5. Published paper in International Journal of Scientific Development and Research.",
        "project-3-title": "Real-Time Deepfake Video Detection Using Multimodal ML",
        "project-3-point-1": "1. Developed deepfake video detector attaining 98% accuracy.",
        "project-3-point-2": "2. Processed 500+ videos, reducing manual verification time by 70%.",
        "project-3-point-3": "3. Optimized detection of deepfakes by 20% using multimodal analysis.",
        "project-3-point-4": "4. Enabled live detection at 30+ Frames Per Second, providing instant threat alerts.",
        "project-4-title": "Object Detection System to detect defects in minute and second hands during the manufacturing process",
        "project-4-point-1": "1. Built a real-time object detection system using OpenCV and Raspberry Pi.",
        "project-4-point-2": "2. Automated defect detection in watch hands during manufacturing.",
        "project-4-point-3": "3. Improved detection accuracy by 20% and reduced the false positives.",
        "project-4-point-4": "4. Improved quality control by automating small component defect detection using image processing",
        "tech-used": "Technologies Used:",
        // Translations for semester bubbles
        "sem-1": "Semester 1",
        "sem-2": "Semester 2",
        "sem-3": "Semester 3",
        "sem-4": "Semester 4",
        "sem-5": "Semester 5",
        "sem-6": "Semester 6",
        "sem-7": "Semester 7",
        "sem-8": "Semester 8",
        // Text for the button itself
        "lang-button": "English | Deutsch"
    },
    de: {
        "welcome-top": "Willkommen bei Abhiram Kothwal's",
        "welcome-bottom": "Unternehmen in der Kodierung & Kreativität",
        "nav-home": "Startseite",
        "nav-about": "Über mich",
        "nav-courses": "Absolvierte Kurse",
        "nav-projects": "Abgeschlossene Projekte",
        "nav-skills": "Technische Fähigkeiten",
        "nav-resume": "Mein Lebenslauf",
        "about-title": "Hallo zusammen",
        "about-text-1": "Ich bin Abhiram Kothwal, ein Student der Informatik-Ingenieurwissenschaften aus Malnad Hassan. Willkommen auf meiner persönlichen Website. Diese Website stellt meine Reise durch Fähigkeiten, Projekte und Wachstum dar.",
        "about-text-2": "Vision, transformative Technologieunternehmen mit globaler Wirkung zu schaffen.",
        "courses-title": "Absolvierte Kurse",
        "projects-title": "Abgeschlossene Projekte",
        "skills-title": "Technische Fähigkeiten",
        "project-1-title": "College-Kantine-Managementsystem",
        "project-1-point-1": "1. Entwickelte eine benutzerfreundliche Website für Studenten und Mitarbeiter, die die Wartezeit um 40% reduzierte.",
        "project-1-point-2": "2. Ermöglichte Echtzeit-Auftragsverfolgung mit Firebase, was die Kundenzufriedenheit insgesamt verbesserte.",
        "project-1-point-3": "3. Integrierte auch Verkaufsanalysen, um die vollständige Transparenz der Transaktionen zu gewährleisten.",
        "project-1-point-4": "4. Rationalisierte die Auftragsabwicklung und verkürzte die Servicezeit von 15 auf 8 Minuten.",
        "project-2-title": "KI-gesteuerte Rote-Augen-Erkennung mittels CNN",
        "project-2-point-1": "1. Entwickelte eine Website für Benutzer, um Bilder hochzuladen und Krankheiten zu erkennen.",
        "project-2-point-2": "2. Baute ein KI-Modell mit CNN, um Rote-Augen-Krankheiten in 3 Kategorien zu erkennen.",
        "project-2-point-3": "3. Erzielte eine Genauigkeit von 97% bei der automatischen Erkennung von Rote-Augen-Zuständen.",
        "project-2-point-4": "4. Erleichterte die Echtzeit-Vorhersage des Schweregrads der Krankheit für sofortiges Handeln.",
        "project-2-point-5": "5. Veröffentlichte einen Artikel im International Journal of Scientific Development and Research.",
        "project-3-title": "Echtzeit-Deepfake-Videoerkennung mittels multimodaler ML",
        "project-3-point-1": "1. Entwickelte einen Deepfake-Video-Detektor mit 98% Genauigkeit.",
        "project-3-point-2": "2. Verarbeitete über 500 Videos, wodurch die manuelle Verifizierungszeit um 70% reduziert wurde.",
        "project-3-point-3": "3. Optimierte die Erkennung von Deepfakes um 20% durch multimodale Analyse.",
        "project-3-point-4": "4. Ermöglichte Live-Erkennung mit über 30 Bildern pro Sekunde, was sofortige Bedrohungswarnungen lieferte.",
        "project-4-title": "Objekterkennungssystem zur Erkennung von Defekten an Minuten- und Sekundenzeigern während der Herstellung",
        "project-4-point-1": "1. Baute ein Echtzeit-Objekterkennungssystem mit OpenCV und Raspberry Pi.",
        "project-4-point-2": "2. Automatisierte die Defekterkennung in Uhrzeigern während der Herstellung.",
        "project-4-point-3": "3. Verbesserte die Erkennungsgenauigkeit um 20% und reduzierte die falschen Positiven.",
        "project-4-point-4": "4. Verbesserte die Qualitätskontrolle durch Automatisierung der Defekterkennung kleiner Komponenten mittels Bildverarbeitung",
        "tech-used": "Verwendete Technologien:",
        // German translations for semester bubbles
        "sem-1": "Semester 1",
        "sem-2": "Semester 2",
        "sem-3": "Semester 3",
        "sem-4": "Semester 4",
        "sem-5": "Semester 5",
        "sem-6": "Semester 6",
        "sem-7": "Semester 7",
        "sem-8": "Semester 8",
        // Text for the button itself
        "lang-button": "Englisch | Deutsch"
    }
};

const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = 'en';

function setLanguage(lang) {
    // Update the button text with the correct translation for the button itself
    const buttonTextKey = lang === 'en' ? 'lang-button' : 'lang-button';
    langToggleBtn.textContent = translations[lang][buttonTextKey];

    // Update the html tag's lang attribute for accessibility and SEO
    document.documentElement.lang = lang;

    // Loop through all elements with a data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });}
    
  function setLanguage(lang) {
    // This part correctly updates the button and the HTML lang attribute
    const buttonTextKey = lang === 'en' ? 'lang-button' : 'lang-button';
    langToggleBtn.textContent = translations[lang][buttonTextKey];
    document.documentElement.lang = lang;

    // This loop handles all your text translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // You must remove this entire block to enable scrolling
    // if (lang === 'de') {
    //     document.body.style.overflowY = 'hidden';
    // } else {
    //     document.body.style.overflowY = 'auto';
    // }
}

// Event listener to toggle the language
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    setLanguage(currentLang);
});

// Set the initial language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});