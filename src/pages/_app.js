import "@/styles/globals.css";
import Aos from "aos";
import { DM_Sans, Source_Sans_Pro } from "next/font/google";
import { useEffect } from "react";
import "aos/dist/aos.css";

const dm_Sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-DM_Sans",
});

const source_Sans_Pro = Source_Sans_Pro({
  subsets: ["latin", "cyrillic", "cyrillic", "cyrillic-ext", "latin-ext"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-Source_Sans_Pro",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <main
      className={`${source_Sans_Pro.variable} font-sans ${dm_Sans.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
