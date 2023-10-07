import React from "react";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store.js"; // Adjust path as needed
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

// If 'next/font/google' doesn't have TypeScript definitions, you might use any
const inter = Inter({ subsets: ["latin"] }) as any;

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}
/*
sir i have use store in homepage firstSection.jsx and SeventhSection.jsx
login Page of components folder uses store completely in every
PLEASE NOT
I HAVE COMMENTED OUT CODES OF (POP OR NEW USER OR MOBILE VERIFICATION OTP PAGE)
SICE THEY USE REDUX STORE SO WHEN ISSUE WILL BE SOLVED U CAN USE THE CODE
IT IS ALSO RESPNSOVE ALSO
 */
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    // <Provider store={store}> STORE ISSUE IN LAYOUT.TSX
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
    // </Provider>
  );
};

export default RootLayout;
