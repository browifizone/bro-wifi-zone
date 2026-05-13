import "./globals.css";

export const metadata = {
  title: "BRO WIFI ZONE | Internet CPE, Starlink et WiFi",
  description: "BRO WIFI ZONE propose des solutions Internet CPE, Starlink, MikroTik, WiFi et dépannage réseau.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
