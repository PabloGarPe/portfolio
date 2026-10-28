export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Texto traducible: un valor por idioma. */
export type L = Record<Lang, string>;

/** Devuelve el texto en el idioma pedido (con fallback al idioma por defecto). */
export const tr = (value: L | string, lang: Lang): string =>
  typeof value === 'string' ? value : value[lang] ?? value[defaultLang];

/** Textos fijos de la interfaz. */
export const ui = {
  es: {
    'meta.title': 'Pablo García Pernas · Desarrollador Full-Stack',
    'meta.description': 'Portfolio de Pablo García Pernas, desarrollador full-stack en Asturias. Proyectos web con React, TypeScript, Node.js y Postgres, experiencia y contacto.',
    'meta.cvTitle': 'CV · Pablo García Pernas, Desarrollador Full-Stack',
    'meta.cvDescription': 'Currículum de Pablo García Pernas: experiencia, proyectos, formación en Ingeniería Informática y Matemáticas (Universidad de Oviedo) y habilidades técnicas.',
    'meta.photoAlt': 'Foto de Pablo García Pernas',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cv': 'CV',
    'theme.toggle': 'Cambiar tema',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos',
    'section.skills': 'Habilidades',
    'section.education': 'Formación',
    'section.certifications': 'Certificaciones',
    'section.languages': 'Idiomas',
    'section.profile': 'Perfil',
    'section.additional': 'Información adicional',
    'job.present': 'Actualidad',
    'job.months': 'meses',
    'project.visit': 'Ver proyecto',
    'contact.title': 'Contacto',
    'contact.text': '¿Buscas un desarrollador con ganas? Estoy disponible para nuevos proyectos.',
    'contact.cta': 'Escríbeme',
    'contact.cv': 'Ver CV',
    'footer.socials': 'Redes',
    'footer.rights': 'Todos los derechos reservados.',
    'cv.print': 'Imprimir / Guardar PDF',
    'cv.back': 'Volver al portfolio',
  },
  en: {
    'meta.title': 'Pablo García Pernas · Full-Stack Developer',
    'meta.description': 'Portfolio of Pablo García Pernas, a full-stack developer based in Asturias, Spain. Web projects built with React, TypeScript, Node.js and Postgres, experience and contact.',
    'meta.cvTitle': 'CV · Pablo García Pernas, Full-Stack Developer',
    'meta.cvDescription': 'Résumé of Pablo García Pernas: experience, projects, Computer Engineering and Mathematics studies (University of Oviedo) and technical skills.',
    'meta.photoAlt': 'Photo of Pablo García Pernas',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'theme.toggle': 'Toggle theme',
    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.skills': 'Skills',
    'section.education': 'Education',
    'section.certifications': 'Certifications',
    'section.languages': 'Languages',
    'section.profile': 'Profile',
    'section.additional': 'Additional information',
    'job.present': 'Present',
    'job.months': 'months',
    'project.visit': 'Visit project',
    'contact.title': 'Contact',
    'contact.text': 'Looking for an enthusiastic developer? I’m available for new projects.',
    'contact.cta': 'Get in touch',
    'contact.cv': 'View CV',
    'footer.socials': 'Socials',
    'footer.rights': 'All rights reserved.',
    'cv.print': 'Print / Save as PDF',
    'cv.back': 'Back to portfolio',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];
