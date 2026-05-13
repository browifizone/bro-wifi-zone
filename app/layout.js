import "./globals.css";

export const metadata = {
  title: "BRO WIFI ZONE | Internet CPE, Starlink, MikroTik et WiFi",
  description:
    "BRO WIFI ZONE propose des solutions Internet locales par CPE, Starlink, MikroTik, WiFi, dépannage réseau et accompagnement à Madagascar.",
  keywords: [
    "BRO WIFI ZONE",
    "internet CPE",
    "Starlink Madagascar",
    "MikroTik",
    "WiFi",
    "réseau",
    "hotspot",
  ],
  openGraph: {
    title: "BRO WIFI ZONE",
    description: "Internet CPE, Starlink, MikroTik et solutions WiFi.",
    images: ["/banniere-bro-wifi-zone.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
