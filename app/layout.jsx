import '@/scss/global.scss';

export const metadata = {
  title: 'Seismic Quakes Visualization',
  description: 'Visualized the quakes on Mars and the Moon.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo96.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
