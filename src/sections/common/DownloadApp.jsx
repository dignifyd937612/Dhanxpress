import Image from "next/image";
import mobileAppImg from "../../assets/common/mobile-app.png";
import app_store_Img from "../../assets/common/app-store.png";
import google_play_Img from "../../assets/common/google-play.png";
import qr_code_Img from "../../assets/common/qr-code.png";
import styles from "./DownloadApp.module.scss";
import Sectionheader from "@/components/common/Sectionheader";
const DownloadApp = () => {
  return (
    <>
      <section className={styles.appSection}>
        <div className="max-w-[1200px] mx-auto px-4">
          <Sectionheader
            title={"Mobile App Connect"}
            heading={"Download the DhanXpress Mobile App"}
            textalign="center"
          />

          <div className="grid lg:grid-cols-2 items-center mt-20 gap-10">
            <div className="flex flex-col items-center">
              <h4 className={styles.scanText}>Scan code to download app</h4>

              <div className={styles.qrBox}>
                <Image
                  src={qr_code_Img}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className={styles.orText}>Or</span>

              <div className="flex items-center mt-4 flex-wrap justify-center">
                <Image
                  src={app_store_Img}
                  alt="App Store"
                  className={styles.storeBtn}
                />

                <Image
                  src={google_play_Img}
                  alt="Google Play"
                  className={styles.storeBtn}
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end relative">
              <Image
                src={mobileAppImg}
                alt="Mobile App"
                className={styles.mobileImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
