
export const metadata = {
  title: 'Virtual Markets',
  description: 'AI trading simulator',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang=\"en\">
      <body>{children}</body>
    </html>
  );
}
