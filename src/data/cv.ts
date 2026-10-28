import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';
import photo from '../assets/image.webp';
import mathtexpediaImg from '../assets/mathtexpedia.png';

export interface Link { label: string; url: string; icon?: 'github' | 'linkedin' | 'mail' | 'web' }

export interface Job {
  company: string;
  role: L;
  location?: string;
  start: string; // ISO yyyy-mm-dd
  end?: string;
  description: L;
  highlights?: L[];
  tech?: string[];
  portfolio?: boolean;
  cv?: boolean;
}

export interface Project {
  title: L | string;
  description: L;
  tech: string[];
  url?: string;
  repo?: string;
  image?: ImageMetadata;
  imageAlt?: L;
  portfolio?: boolean;
  cv?: boolean;
}

export interface Education { center: string; title: L; start?: string; end?: string; note?: L }
export interface Certification { name: L; issuer: string; year?: string }
export interface SkillGroup { name: L; items: string[] }
export interface Language { name: L; level: L }

export const profile = {
  name: 'Pablo García Pernas',
  shortName: 'PGP',
  role: { es: 'Desarrollador Full-Stack', en: 'Full-Stack Developer' } satisfies L,
  photo,
  location: 'Avilés, Asturias, España',
  email: 'pablogarciapernas@gmail.com',
  phone: '+34 648 053 725',
  website: 'https://pablogarciapernas.eu',
  links: [
    { label: 'GitHub', url: 'https://github.com/PabloGarPe', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pablo-garc%C3%ADa-pernas-873630352/', icon: 'linkedin' },
  ] satisfies Link[],
  heroText: {
    es: 'Desarrollador web apasionado por crear experiencias digitales bonitas y funcionales. Actualmente estudio el Doble Grado en Ingeniería Informática y Matemáticas en la Universidad de Oviedo, Asturias.',
    en: 'A passionate web developer crafting beautiful and functional digital experiences. I’m currently studying the Dual Degree in Computer Engineering and Mathematics at the University of Oviedo, Asturias.',
  } satisfies L,
  summary: {
    es: 'Desarrollador junior con una base sólida en ingeniería del software, desarrollo web y trabajo en equipo. Motivado, con ganas de aprender y capacidad de adaptación.',
    en: 'Aspiring junior developer with a strong foundation in software engineering, web development and teamwork. Motivated, eager to learn and adaptable.',
  } satisfies L,
};

export const experience: Job[] = [
  {
    company: 'ASAC',
    role: { es: 'Prácticas · Ingeniería de software', en: 'Software Engineering Intern' },
    location: 'Asturias',
    start: '2025-06-20',
    description: {
      es: 'Prácticas como ingeniero de software centradas en desarrollo full-stack con tecnologías web modernas.',
      en: 'Software engineering internship focused on full-stack development using modern web technologies.',
    },
  },
  {
    company: 'Picakechinga',
    role: { es: 'Ayudante de camarero', en: 'Waiter Assistant' },
    location: 'Avilés',
    start: '2023-06-01',
    end: '2024-09-01',
    description: {
      es: 'Apoyo en el servicio diario en un entorno exigente, desarrollando responsabilidad, habilidades sociales y trabajo en equipo.',
      en: 'Supported day-to-day service in a fast-paced environment, developing responsibility, soft skills and teamwork.',
    },
    portfolio: false,
  },
];

export const projects: Project[] = [
  {
    title: 'Mathtexpedia',
    description: {
      es: 'Plataforma para aprender y practicar matemáticas y compartir apuntes de la carrera.',
      en: 'A platform for learning and practising mathematics and sharing degree notes.',
    },
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'SpringBoot', 'Postgres'],
    url: 'https://mathtexpedia.es',
    image: mathtexpediaImg,
    imageAlt: { es: 'Captura de Mathtexpedia', en: 'Mathtexpedia screenshot' },
  },
  {
    title: 'HorariosHUB',
    description: {
      es: 'Aplicación web institucional para consultar los horarios de clase, con scraping de horarios, autenticación y base de datos.',
      en: 'Institutional web app for viewing class schedules, with schedule scraping, authentication and a database.',
    },
    tech: ['React', 'TypeScript', 'Tailwind', 'NextJS', 'Postgres', 'Rust', 'Axum'],
    url: 'https://horariospceo.web.app',
    // TODO: falta la captura; añádela en src/assets/horarioshub.png, impórtala arriba y descomenta
    // image: horarioshubImg,
    imageAlt: { es: 'Captura de HorariosHUB', en: 'HorariosHUB screenshot' },
  },
  {
    title: { es: 'Proyecto de software colaborativo', en: 'Collaborative Software Project' },
    description: {
      es: 'Universidad de Oviedo. Desarrollo en un equipo internacional, con colaboración remota, control de versiones y buenas prácticas de código limpio.',
      en: 'University of Oviedo. Built with an international team, focusing on remote collaboration, version control and clean code practices.',
    },
    tech: ['Git', 'GitHub'],
    portfolio: false,
  },
];

export const education: Education[] = [
  {
    center: 'Universidad de Oviedo',
    title: { es: 'Doble Grado en Matemáticas e Ingeniería Informática del Software', en: 'Dual Degree in Mathematics and Software Engineering' },
    start: '2023',
  },
  {
    center: 'IES Virgen de la Luz',
    title: { es: 'Bachillerato con Matrícula de Honor', en: 'High School with Honours' },
    end: '2023',
  },
];

export const certifications: Certification[] = [
  { name: { es: 'Certificado de Desarrollo Frontend', en: 'Frontend Developer Certificate' }, issuer: 'Platzi' },
  { name: { es: 'Cambridge English B2 First', en: 'Cambridge English B2 First' }, issuer: 'Cambridge', year: '2022' },
  { name: { es: 'TalentUO: Programación de aplicaciones web y bases de datos', en: 'TalentUO: Web Application Programming and Databases' }, issuer: 'Universidad de Oviedo' },
];

export const skills: SkillGroup[] = [
  { name: { es: 'Lenguajes', en: 'Languages' }, items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Java', 'Python'] },
  { name: { es: 'Frameworks', en: 'Frameworks' }, items: ['React', 'NestJS', 'Express', 'Tailwind CSS', 'Astro'] },
  { name: { es: 'Bases de datos', en: 'Databases' }, items: ['MariaDB', 'Oracle', 'Supabase'] },
  { name: { es: 'Herramientas', en: 'Tools' }, items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
];

export const languages: Language[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2 (Cambridge)', en: 'Upper-intermediate (B2 Cambridge)' } },
  { name: { es: 'Gallego', en: 'Galician' }, level: { es: 'Intermedio', en: 'Intermediate' } },
];

export const additional: L[] = [
  { es: 'Carné de conducir B (desde oct. 2023)', en: 'Driving licence, category B (since Oct 2023)' },
  { es: 'Mecanografía rápida', en: 'Fast touch typing' },
];
