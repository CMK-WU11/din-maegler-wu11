import Footer from "@/components/footer";
import "./globals.css"
import Header from "@/components/header";

export const metadata = {
  title: "Din Mægler",
  description: "Din boligbutik i området",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
      <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
