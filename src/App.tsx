import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import { Header, Footer, YouTubePlayer } from "./components";

import { bgArrow, net, twitter, medium, discord, telegram } from "#assets/img";

const App = ({ t }: { t: TFunction }) => {
  return (
    <div className="flex flex-col min-h-[100vh] gap-[100px]">
      <Header />
      <div className="grow max-w-[1440px] manrope mx-auto">
        <div
          style={{ backgroundImage: `url(${net})` }}
          className="flex flex-col items-center justify-center gap-[30px] netBg"
        >
          <div className="minBacklight absolute top-[10%] md:hidden"></div>
          <div className="absolute left-[-5%] top-[0] z-[0] md:block hidden">
            <img src={bgArrow} alt="bgArrow" />
            <div className="backlight absolute top-[35%] left-[5%]"></div>
          </div>
          <div className="absolute right-[-3%] top-[-8%] z-[0] md:block hidden">
            <img src={bgArrow} alt="bgArrow" className="rotate-[180deg]" />
            <div className="backlight absolute top-[40%] right-[5%]"></div>
          </div>
          <h1 className="text-[#6FE4C6] text-center text-[24px] md:text-[48px] font-bold leading-[30px] md:leading-[58px] max-w-[300px] md:max-w-[750px]">
            {t("main_h1")}
          </h1>
          <h3 className="text-white text-[14px] md:text-[18px] leading-[17.5px] md:leading-6 font-light max-w-[360px] md:max-w-[645px] text-center">
            {t("main_h3")}
          </h3>
          <div className="flex items-center flex-col md:flex-row gap-5 mb-[100px]">
            <button className="bg-[#6FE4C6] rounded-[87px] ml-[10px]">
              <p className="text-[#000] px-[29px] py-2 text-[14px] font-semibold leading-6">
                {t("how_it_works")}
              </p>
            </button>
            <div className="flex items-center gap-5">
              {" "}
              <a href="#">
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-6 h-6 md:w-9 md:h-9"
                />
              </a>
              <a href="#">
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-6 h-6 md:w-9 md:h-9"
                />
              </a>
              <a href="#">
                <img
                  src={discord}
                  alt="discord"
                  className="w-6 h-6 md:w-9 md:h-9"
                />
              </a>
              <a href="#">
                <img
                  src={medium}
                  alt="medium"
                  className="w-6 h-6 md:w-9 md:h-9"
                />
              </a>
            </div>
          </div>
          <YouTubePlayer videoId={"Zi8vJ_lMxQI"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withTranslation()(App);
