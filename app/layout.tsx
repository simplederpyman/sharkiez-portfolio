export const metadata = {
  title: 'Sharkiez - Digital Builder',
  description: 'Building real things. No pay-to-win. Just growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
