'use client';

import React from 'react';
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import Content from './components/Content';
import { Toaster } from '@/components/ui/toaster';

const WebsiteWrapper = dynamic(() => import('@/Wrappers/WebsiteWrapper').then((mod) => mod.WebsiteWrapper), {
  ssr: false,
});
export const WebsiteLayout = ({ children }: PropsWithChildren) => {
  return (
    // <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Content>
          <Toaster />
          <WebsiteWrapper>{children}</WebsiteWrapper>
        </Content>
      </I18nextProvider>
    // </Provider>
  );
};
