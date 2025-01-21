import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Navigation } from "./components/nav";
import { Provider } from "./components/ui/provider";
import { ThemeProvider } from "./components/theme";
import { Background } from "./components/background";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
        default: "Katalin Groe",
        template: "%s | Katalin Groe"
  },
  description: "Research Assistant 2 at CAMH",
  openGraph: {
    title: "Katalin Groe",
    description:
      "Research Assistant 2 at CAMH",
      url: "https://katalin-groe.vercel.app/",
    siteName: "Katalin Groe",
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
  twitter: {
    title: "Katalin Groe",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/K.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")} suppressHydrationWarning style={{height:"100%"}}>
        <head>
        <script src="https://kit.fontawesome.com/600e3d2b49.js" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        </head>
        <body
          className={`bg-pink ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
            }`}
          style={{ height: "100%", overflowY: "auto", overflowX: "clip", msOverflowStyle: "none",
            scrollbarWidth: "none"}}
        >
          <Provider>
            <ThemeProvider>
            <Navigation />
              <Background particles={true}>
                <div className="main" style={{flexGrow: 1, /*marginLeft: "10%", marginRight: "10%", */ width: "100%"}}>
                  {children}
                </div>
              </Background>
              <Footer />
            </ThemeProvider>
          </Provider>
        </body>
    </html>
  );
}
