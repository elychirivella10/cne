import { Inter } from "next/font/google";

import '@/styles/style.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CNE",
  description: "Pagina para ingresar datos de votación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
