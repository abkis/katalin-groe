import "../global.css";
import { Inter, Outfit } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { ThemeProvider } from "./components/theme";
import { Navigation } from "./components/nav";
import { Background } from "./components/background";
import { Provider } from "./components/ui/provider";

export const metadata: Metadata = {
  title: {
    default: "Katalin Groe",
    template: "%s | Katalin Groe",
  },
  description: "Research Assistant 2 at CAMH",
  openGraph: {
    title: "Katalin Groe",
    description:
      "Research Assistant 2 at CAMH",
    url: "katalin-groe.vercel.app",
    siteName: "katalin-groe.vercel.app",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/images/K.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
          className={` ${outfit.className} min-h-screen text-gray-50 flex flex-col items-center justify-center w-full`}
          style={{ height: "100%", overflowY: "auto", overflowX: "clip", msOverflowStyle: "none",
            scrollbarWidth: "none"}}
        >
          <Provider>
            <ThemeProvider>
            <Navigation />
              <Background particles={true}>
                <div className="main" style={{flexGrow: 1, width: "100%"}}>
                  {children}
                </div>
              </Background>
            </ThemeProvider>
          </Provider>
        </body>
    </html>
  );
}
