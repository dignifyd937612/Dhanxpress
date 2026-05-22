import "./globals.css";

import "../../public/css/pylon-icons.css";
import "../../public/css/flaticon.css";
import "../../public/css/pylon-two-icons.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/animate.min.css";
import "../../public/css/fontawesome-all.min.css";
import "../../public/css/swiper.min.css";
import "../../public/css/owl.carousel.min.css";
import "../../public/css/jquery-ui.css";
import "../../public/css/nouislider.min.css";
import "../../public/css/nouislider.pips.css";
import "../../public/css/main.css";
import "../../public/css/responsive.css";
import "../../public/css/bootstrap-select.min.css";
import "../../public/css/custom-animation.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/odometer.min.css";

import Script from "next/script";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScriptInitializer from "@/components/common/ThemeInitializer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        <ScriptInitializer />
        {children}

        <Script src="/js/jquery-3.5.1.min.js" strategy="beforeInteractive" />

        <Script src="/js/jquery.appear.min.js" strategy="beforeInteractive" />

        <Script id="jquery-global" strategy="beforeInteractive">
          {`window.$ = window.jQuery = window.$;`}
        </Script>

        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-ui.js" strategy="afterInteractive" />

        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper.min.js" strategy="afterInteractive" />

        <Script src="/js/wow.js" strategy="afterInteractive" />

        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />

        <Script src="/js/nouislider.min.js" strategy="afterInteractive" />
        <Script src="/js/wNumb.min.js" strategy="afterInteractive" />

        <Script src="/js/odometer.min.js" strategy="afterInteractive" />

        <Script src="/js/loan-calculator.js" strategy="afterInteractive" />
        <Script src="/js/loan-eligibility.js" strategy="afterInteractive" />

        <Script src="/js/theme.js" strategy="afterInteractive" />
        <Footer />
      </body>
    </html>
  );
}
