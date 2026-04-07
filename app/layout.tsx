import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Hittich Gesundheits-Mittel – Naturstoffe mit der Intelligenz der Natur",
  description:
    "Gesundheits-Mittel direkt vom Entwickler und Hersteller. Über 30 Jahre Dr. Hittich – Gesund mit der Intelligenz der Natur – Freude am Leben",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
