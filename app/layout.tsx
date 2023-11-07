import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { TanstackProvider } from "@/components/tanstack-provider"
import { getServerSession } from "next-auth"
import { SessionProvider } from "@/components/session-provider"
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession();
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <SessionProvider session={session} >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TanstackProvider>
                <NextTopLoader showSpinner={false} />
                {children}
              </TanstackProvider>
              <TailwindIndicator />
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html >
    </>
  )
}
