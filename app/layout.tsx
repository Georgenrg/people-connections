import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "People Connections",
  description: "Connect with people that matter and build meaningful relationships with our powerful networking platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    
    <header className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-50">
  <div className="text-2xl font-bold text-gray-800">
    People Connections
  </div>
  <nav className="flex gap-6 text-gray-600">
    <a href="/" className="hover:text-black transition">Все</a>
    <a href="/#categories" className="hover:text-black transition">Категории</a>
    <a href="/#add-profile" className="hover:text-black transition">Добавить профиль</a>
  </nav>
</header>


    {children}
  </ThemeProvider>
</body>
