import { Inter } from "next/font/google";

import { AntdRegistry } from '@ant-design/nextjs-registry';

import {App} from 'antd';

import '@fortawesome/fontawesome-free/css/all.css'

import '@/styles/style2.css'
import '@/styles/index.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CNE",
  description: "Pagina para ingresar datos de votación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App  message={{
          maxCount: 1
        }}>
          <AntdRegistry>{children}</AntdRegistry>
        </App>
      </body>
    </html>
  );
}
