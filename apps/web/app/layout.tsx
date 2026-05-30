import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '녹두의 개발 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
