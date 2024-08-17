import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/data";
import QueryProvider from "@/utils/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Graham B. - Portfolio",
  description: "Thank you for visiting my portfolio. I am a software engineer with a passion for web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar navItems={navItems} />
          <QueryProvider>
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
