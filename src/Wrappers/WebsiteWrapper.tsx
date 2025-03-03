'use client';

import React from 'react';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export const WebsiteWrapper = ({ children }: PropsWithChildren) => {
  const {
    i18n: { dir, language, changeLanguage },
  } = useTranslation();
  const params = useParams();
  const { locale } = params;

  React.useEffect(() => {
    // 👇 Flips the document direction if i18n language is RTL based
    document.dir = dir();
  }, [language]);

  React.useEffect(() => {
    if (locale) {
      changeLanguage(locale as string);
    }
  }, [locale]);

  return children;
};
