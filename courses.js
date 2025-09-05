// Function to handle the language toggle
function setupLanguageToggle() {
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLanguage = 'en';

    const translations = {
        en: {
            "lang-button": "English | Deutsch",
            "back-home": "Back to Home",
            // Semester titles
            "sem-1": "Semester 1",
            "sem-2": "Semester 2",
            "sem-3": "Semester 3",
            "sem-4": "Semester 4",
            "sem-5": "Semester 5",
            "sem-6": "Semester 6",
            "sem-7": "Semester 7",
            "sem-8": "Semester 8",
            // Semester 1 courses
            "s1-course-1": "Engineering Drawing",
            "s1-course-2": "Engineering Physics",
            "s1-course-3": "Calculus & Numerical Methods",
            "s1-course-4": "Basic Electrical Engineering",
            "s1-course-5": "Engineering Mechanics",
            "s1-course-6": "Engineering Physics Laboratory",
            "s1-course-7": "Physical Activity",
            "s1-course-8": "Design Thinking Laboratory",
            // Semester 2 courses
            "s2-course-1": "Engineering Chemistry",
            "s2-course-2": "Differential Equations & Vector Calculus",
            "s2-course-3": "Basic Electronics Engineering",
            "s2-course-4": "Elements of Mechanical Engineering",
            "s2-course-5": "Programming & Problem Solving",
            "s2-course-6": "Chemistry Lab",
            "s2-course-7": "Programming Lab",
            // Semester 3 courses
            "s3-course-1": "Linear Algebra & Integral Transforms",
            "s3-course-2": "Discrete Mathematics",
            "s3-course-3": "Digital System Design",
            "s3-course-4": "Data Structures & Applications",
            "s3-course-5": "Computer Organization",
            "s3-course-6": "Unix Programming",
            "s3-course-7": "Kannada",
            // Semester 4 courses
            "s4-course-1": "Statistics & Probability",
            "s4-course-2": "Microprocessor & Microcontroller",
            "s4-course-3": "Operating System",
            "s4-course-4": "Algorithm Design",
            "s4-course-5": "Java Oops",
            "s4-course-6": "Microprocessor Lab",
            "s4-course-7": "Biology for Engineers",
            "s4-course-8": "Internship-1",
            "s4-course-9": "Universal Human Values",
            // Semester 5 courses
            "s5-course-1": "Software Engineering",
            "s5-course-2": "Theoretical Foundations & Computation",
            "s5-course-3": "Management Information System",
            "s5-course-4": "Database Management systems",
            "s5-course-5": "Data Communication",
            "s5-course-6": "Mini-Project 1",
            "s5-course-7": "Internet of things",
            "s5-course-8": "Social Connection",
            "s5-course-9": "Environmental Studies",
            // Semester 6 courses
            "s6-course-1": "Computer Network",
            "s6-course-2": "Artificial Intelligence",
            "s6-course-3": "Entrepreneurship",
            "s6-course-4": "Mini-project 2",
            "s6-course-5": "Big Data Technologies",
            "s6-course-6": "Analytical Ability & Soft skills",
            "s6-course-7": "Project Management",
            "s6-course-8": "Internship-2",
            "s6-course-9": "Constitution",
            // Semester 7 courses
            "s7-course-1": "Machine learning",
            "s7-course-2": "Major Project phase-1",
            "s7-course-3": "Information storage Management",
            "s7-course-4": "Enterprise Resource Planning",
            "s7-course-5": "Data Science",
            "s7-course-6": "Linear Algebra & its Application",
            "s7-course-7": "Research Methodology & intellectual property rights",
            // Semester 8 courses
            "s8-course-1": "Major Project",
            "s8-course-2": "Internship",
        },
        de: {
            "lang-button": "Englisch | Deutsch",
            "back-home": "Zurück zur Startseite",
            // Semester titles
            "sem-1": "Semester 1",
            "sem-2": "Semester 2",
            "sem-3": "Semester 3",
            "sem-4": "Semester 4",
            "sem-5": "Semester 5",
            "sem-6": "Semester 6",
            "sem-7": "Semester 7",
            "sem-8": "Semester 8",
            // Semester 1 courses
            "s1-course-1": "Technisches Zeichnen",
            "s1-course-2": "Technische Physik",
            "s1-course-3": "Analysis & Numerische Methoden",
            "s1-course-4": "Grundlagen der Elektrotechnik",
            "s1-course-5": "Technische Mechanik",
            "s1-course-6": "Labor Technische Physik",
            "s1-course-7": "Körperliche Aktivität",
            "s1-course-8": "Labor Design Thinking",
            // Semester 2 courses
            "s2-course-1": "Technische Chemie",
            "s2-course-2": "Differentialgleichungen & Vektorkalkül",
            "s2-course-3": "Grundlagen der Elektronik",
            "s2-course-4": "Grundlagen des Maschinenbaus",
            "s2-course-5": "Programmieren & Problemlösung",
            "s2-course-6": "Chemie-Labor",
            "s2-course-7": "Programmier-Labor",
            // Semester 3 courses
            "s3-course-1": "Lineare Algebra & Integraltransformationen",
            "s3-course-2": "Diskrete Mathematik",
            "s3-course-3": "Digitales Systemdesign",
            "s3-course-4": "Datenstrukturen & Anwendungen",
            "s3-course-5": "Rechnerarchitektur",
            "s3-course-6": "Unix-Programmierung",
            "s3-course-7": "Kannada",
            // Semester 4 courses
            "s4-course-1": "Statistik & Wahrscheinlichkeit",
            "s4-course-2": "Mikroprozessor & Mikrocontroller",
            "s4-course-3": "Betriebssysteme",
            "s4-course-4": "Algorithmenentwurf",
            "s4-course-5": "Java OOP",
            "s4-course-6": "Mikroprozessor-Labor",
            "s4-course-7": "Biologie für Ingenieure",
            "s4-course-8": "Praktikum-1",
            "s4-course-9": "Universelle menschliche Werte",
            // Semester 5 courses
            "s5-course-1": "Softwaretechnik",
            "s5-course-2": "Theoretische Grundlagen & Berechnung",
            "s5-course-3": "Management-Informationssysteme",
            "s5-course-4": "Datenbank-Managementsysteme",
            "s5-course-5": "Datenkommunikation",
            "s5-course-6": "Mini-Projekt 1",
            "s5-course-7": "Internet der Dinge",
            "s5-course-8": "Soziale Verbindung",
            "s5-course-9": "Umweltstudien",
            // Semester 6 courses
            "s6-course-1": "Computernetzwerke",
            "s6-course-2": "Künstliche Intelligenz",
            "s6-course-3": "Unternehmertum",
            "s6-course-4": "Mini-Projekt 2",
            "s6-course-5": "Big Data Technologien",
            "s6-course-6": "Analytische Fähigkeiten & Soft Skills",
            "s6-course-7": "Projektmanagement",
            "s6-course-8": "Praktikum-2",
            "s6-course-9": "Verfassung",
            // Semester 7 courses
            "s7-course-1": "Maschinelles Lernen",
            "s7-course-2": "Hauptprojekt Phase 1",
            "s7-course-3": "Informationsspeicherverwaltung",
            "s7-course-4": "Unternehmensressourcenplanung",
            "s7-course-5": "Datenwissenschaft",
            "s7-course-6": "Lineare Algebra & ihre Anwendung",
            "s7-course-7": "Forschungsmethodik & geistige Eigentumsrechte",
            // Semester 8 courses
            "s8-course-1": "Hauptprojekt",
            "s8-course-2": "Praktikum",
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Get the language from the URL or local storage
    let currentLang = 'en';

    // Event listener for the language toggle button
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'de' : 'en';
        setLanguage(currentLang);
        // Save the language preference to local storage
        localStorage.setItem('lang', currentLang);
    });

    // Check for a saved language preference on page load
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
        setLanguage(currentLang);
    }
}

// Function to handle scrolling to the selected semester
function setupSemesterScroll() {
    const params = new URLSearchParams(window.location.search);
    const sem = params.get('sem');
    if (sem) {
        const targetSection = document.getElementById(`sem-${sem}`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageToggle();
    setupSemesterScroll();
});