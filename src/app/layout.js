import Link from "next/link";
import "./globals.css"

export const metadata = {
  title: "Din Mægler",
  description: "Din boligbutik i området",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header>
          <Link href="/login">Log ind</Link>
        </header>
        {children}
      </body>
    </html>
  )
}
