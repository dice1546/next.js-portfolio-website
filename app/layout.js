import "./globals.css";
import React from "react";

export const metadata = {
  title: "Daniyal Dev",
  description: "Tunrn Ideas in to Reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative'>
        {children}
      </body>
    </html>
  );
}
