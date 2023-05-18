import "./globals.css";
import Head from "./head";
import Footer from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { aboutMeData, pages, contactMeLinks } from "./data/data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header name={aboutMeData.name} pages={pages} />
        {children}
        <Footer contactMeLinks={contactMeLinks} />
      </body>
    </html>
  );
}
