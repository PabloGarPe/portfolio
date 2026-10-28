import { defaultLang, ui, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Ruta localizada: localizePath('/cv', 'en') -> '/en/cv' ; ('/cv','es') -> '/cv' */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Quita el prefijo de idioma de una ruta para poder cambiarla a otro idioma. */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  return first in ui ? `/${rest.join('/')}` : pathname;
}

export function formatDate(iso: string, lang: Lang, opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }) {
  return new Date(iso).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', opts);
}

export function monthsBetween(startIso: string, endIso?: string) {
  const s = new Date(startIso);
  const e = endIso ? new Date(endIso) : new Date();
  return Math.max(1, (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()));
}
