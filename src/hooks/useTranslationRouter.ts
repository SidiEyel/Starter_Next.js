'use client'; 
import { usePathname, useRouter } from 'next/navigation';

export function useTranslationRouter() {
  const router = useRouter();
  const pathname = usePathname();

  const back = () => {
    router.back();
  };

  const isCurrentPath = (path: string): boolean => {
    // get the current language from localstroage
    const lang = localStorage.getItem('i18nextLng');
    // set the language in the path
    path = `/${lang}${path}`;
    return pathname === path;
  };

  const navigate = (path: string): void => {
    // get the current language from localstroage
    const lang = localStorage.getItem('i18nextLng');
    if (lang) {
      // set the language in the path
      path = `/${lang}${path}`;
      router.push(path);
    } else {
      router.push(path);
    }
  };

  return {
    back,
    navigate,
    isCurrentPath,
  };
}
