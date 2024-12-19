import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import Header from "./Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./Footer";
import Script from "next/script";
import LazyScript from "./components/LazyScript"; // Import the new component
import StoreProvider from "./components/StoreProvider";
import Offerlabel from "./components/offerlabel";
import { GlobalProvider, useGlobalContext } from "@/context/GlobalContext";
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: "true"
});

export const metadata = {
  title:
    "Certification Training Courses | ITIL, PMP, PRINCE2, Six Sigma, COBIT 5 | Invensis Learning",
  description:
    "Invensis Learning imparts ITIL, PMP, CAPM, PRINCE2, Six Sigma, COBIT 5, DevOps, Cloud Computing, Agile, &amp; Change Management Training courses for individuals and enterprises globally. Trainings are delivered through instructor-led classroom and live online training modes.",
    robots: {
      index: false,
      follow: false,
      googlebot: {
        index: false,
        follow: false,
      }
    },
};

export default function RootLayout({ children  }) {

  return (
    <html className={`${montserrat.variable}`} lang="en">
     
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
          <GlobalProvider>
       
            <Offerlabel/>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
            </GlobalProvider>
          </StoreProvider>
        </ThemeProvider>

        <LazyScript
          src="https://static.hotjar.com/c/hotjar-3548742.js?sv=6"
          delay={20000}
          id="hotjar"
        />

        <LazyScript
          src="https://static.zdassets.com/ekr/snippet.js?key=b5798bd8-0e7e-4e68-a1d0-6d949b4063e6"
          id="ze-snippet"
          delay={10000}
          loadOnUserActivity={true}
        />
        <Script
          strategy="worker"
          class="cytrio-script"
          id="cytrio-script"
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js';
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
