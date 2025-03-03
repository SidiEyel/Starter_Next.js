import React from 'react';
import { WebsiteLayout } from '@/Layouts';

export default function RootLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: never;
}) {
  return (
    <WebsiteLayout>{children}</WebsiteLayout>
  );
}
