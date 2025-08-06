import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Prescripto',
  description: 'Prescripto is a web application designed to help users manage their prescriptions and medications effectively.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
