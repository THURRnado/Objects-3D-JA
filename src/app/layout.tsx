import type { Metadata } from "next";
import "./globals.css";
import PageTransition from '../../components/pageTransition';

export const metadata: Metadata = {
  title: "Objetos 3D",
  description: "Responsável por mostrar os objetos 3D para interação do usuário. Responsável por mostrar as descrições dos objetos também",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
