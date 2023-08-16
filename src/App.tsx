import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import { Header, Footer, YouTubePlayer } from "./components";

import { PECULIARITIES } from "#constants";

import {
  bgArrow,
  statisticBg,
  net,
  twitter,
  medium,
  discord,
  telegram,
  bnb,
  metamask,
  trust,
  scene,
  usdt,
  walletconnect,
  bsc,
  stackingBg,
} from "#assets/img";

const App = ({ t }: { t: TFunction }) => {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] gap-[100px]">
        <Header />
        <div className="grow max-w-[1440px] manrope mx-auto z-0">
          <div
            style={{ backgroundImage: `url(${net})` }}
            className="flex flex-col items-center justify-center gap-[30px] netBg"
          >
            <div className="minBacklight absolute top-[10%] md:hidden"></div>
            <div className="absolute left-[-5%] top-[0] z-0 md:block hidden">
              <img src={bgArrow} alt="bgArrow" />
              <div className="backlight absolute top-[35%] left-[5%]"></div>
            </div>
            <div className="absolute right-[-3%] top-[-12%] z-0 md:block hidden">
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
          <div className="mt-[80px] flex flex-col items-center gap-[60px]">
            <div className="absolute mt-[-70px] z-0">
              <img src={statisticBg} alt="statisticBg" />
              <div className="statisticBacklight absolute top-[30%] right-[30%]"></div>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <h3 className="textGradient text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold">
                {t("statistics")}
              </h3>
              <h4 className="text-white text-[14px] md:text-[19px] font-medium  md:font-bold leading-[18.2px] md:leading-4">
                STRAIGHT FINANCE
              </h4>
            </div>
            <div className="flex items-center gap-5 md:gap-10 inter z-10 flex-wrap justify-center flex-col md:flex-row">
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  3 000
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("users")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("queue")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500 000
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("invested")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500 000
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("paid")}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[200px] flex flex-col items-center gap-[60px]">
            <div className="absolute mt-[-70px] z-0">
              <img src={statisticBg} alt="statisticBg" />
              <div className="statisticBacklight absolute top-[30%] right-[30%]"></div>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <h3 className="textGradient text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold">
                {t("my_statistics")}
              </h3>
              <h4 className="text-white text-[14px] md:text-[19px] font-medium  md:font-bold leading-[18.2px] md:leading-4">
                STRAIGHT FINANCE
              </h4>
            </div>
            <div className="flex items-center gap-5 md:gap-10 inter z-10 flex-wrap justify-center flex-col md:flex-row">
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  72
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("my_queue")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("my_invested")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("to_claim")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("future_claim")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <h3 className="text-[32px] md:text-[48px] text-[#EBF7FD] font-bold leading-[64px] ">
                  1 500 000
                </h3>
                <p className="text-[16px] text-[#95A1B4] leading-[22px]">
                  {t("all_claim")}
                </p>
              </div>
            </div>
            <button className="bg-[#6FE4C6] rounded-[87px]">
              <p className="text-[#000] px-[100px] py-[15px] text-[14px] font-semibold leading-6">
                {t("claim")}
              </p>
            </button>
          </div>
          <div className="mt-[144px] flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-3 text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold">
                <h3 className="text-white">{t("earnings")}</h3>
                <h3 className="textGradient">{t("refs")}</h3>
              </div>
              <h4 className="text-white text-[14px] leading-[18.2px] md:text-[18px] font-light md:leading-[23px] max-w-[282px] md:max-w-full text-center">
                {t("percents")}
              </h4>
            </div>{" "}
            <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-[50px] text-[#fff] text-[16px] leading-[22px]">
              <div className="w-full max-w-[348px] refBox h-[112px] flex items-center justify-center whitespace-nowrap">
                <p className="px-[43px] pt-[20px] pb-[45px] md:py-[45px]">
                  {t("min_invest")}
                </p>
              </div>
              <div className="w-full max-w-[348px] refBox h-[112px] flex items-center justify-center whitespace-nowrap">
                <p className="px-[43px] pt-[20px] pb-[45px] md:py-[45px]">
                  {t("instant_payouts")}
                </p>
              </div>
              <div className="w-full max-w-[348px] refBox h-[112px] flex items-center justify-center whitespace-nowrap">
                <p className="px-[43px] pt-[20px] pb-[45px] md:py-[45px]">
                  {t("payment_from_friend")}
                </p>
              </div>
            </div>
            <button className="bg-[#6FE4C6] rounded-[87px]">
              <p className="text-[#000] px-[60px] py-[15px] text-[14px] font-semibold leading-6">
                {t("become_ref")}
              </p>
            </button>
          </div>
          <div
            style={{ backgroundImage: `url(${net})` }}
            className="mt-[101px] flex flex-col text-[#fff]"
          >
            <div className="relative">
              <h1 className="font-bold leading-[21px] md:leading-[51px] text-[20px] md:text-[48px] mb-4 ml-[15px] md:ml-[80px]">
                {t("buy")}
              </h1>
              <div className="gradientLineBg w-[500px] h-[1px] ml-[-100px] hidden md:flex"></div>
              <div className="minBacklight absolute top-[-100%] left-[-20%]"></div>
            </div>
            <div className="flex flex-col items-center mt-5 md:mt-10 gap-[70px] md:gap-[140px] max-w-[1185px] px-[15px]">
              <div className="flex items-center gap-[30px] md:gap-[70px] flex-col lg:flex-row">
                <div className="flex items-start flex-col gap-3">
                  <h3 className="text-[16px] md:text-[32px] font-bold leading-[21px] md:leading-10">
                    {t("step")} 1
                  </h3>
                  <p className="text-[14px] md:text-[18px] leading-[18px]  md:leading-6 max-w-[345px] md:max-w-[640px]">
                    {t("step_1")} -{" "}
                    <a
                      href="https://t.me/straight_finance"
                      target="_blank"
                      className="underlinedLink"
                    >
                      @straight_finance
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-[30px] relative">
                  <img
                    className="max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px]"
                    src={metamask}
                    alt="metamask"
                  />
                  <img
                    className="max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px]"
                    src={walletconnect}
                    alt="walletconnect"
                  />
                  <img
                    className="max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px]"
                    src={trust}
                    alt="trust"
                  />
                  <div className="minBacklight absolute top-[-60%] right-[-90%]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-[30px] md:gap-[70px] w-full flex-col-reverse lg:flex-row">
                <div className="flex items-center gap-[108px]">
                  <img
                    className="max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px]"
                    src={usdt}
                    alt="usdt"
                  />
                  <img
                    className="max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px]"
                    src={bnb}
                    alt="bnb"
                  />
                </div>
                <div className="flex items-start lg:items-end flex-col gap-3">
                  <h3 className="text-[16px] md:text-[32px] font-bold leading-[21px] md:leading-10">
                    {t("step")} 2
                  </h3>
                  <p className="text-[14px] md:text-[18px] leading-[18px]  md:leading-6 max-w-[345px] md:max-w-[640px] lg:max-w-[520px] text-start lg:text-end">
                    {t("step_2")}
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-[185px] flex-col lg:flex-row">
                <div className="flex items-start flex-col gap-3">
                  <h3 className="text-[16px] md:text-[32px] font-bold leading-[21px] md:leading-10">
                    {t("step")} 3
                  </h3>
                  <p className="text-[14px] md:text-[18px] leading-[18px]  md:leading-6 max-w-[345px] md:max-w-[640px]">
                    {t("step_3")}
                  </p>
                </div>
                <div className="relative">
                  <img
                    className="max-w-[240px] max-h-[240px] md:max-w-[348px] md:max-h-[348px] z-10"
                    src={scene}
                    alt="scene"
                  />{" "}
                  <div className="backlight absolute top-[5%] z-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white mt-[200px] flex flex-col gap-[50px]">
            <div className="flex flex-col items-center justify-center gap-[25px]">
              <h1 className="textGradient text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold">
                {t("peculiarities")}
              </h1>
              <h3 className="text-[18px] font-light leading-[23px] max-w-[700px] text-center">
                {t("peculiarities_description")}
              </h3>
            </div>
            <div>
              {PECULIARITIES.map((element, index) => {
                return (
                  <div className="flex flex-col gap-10 mb-[140px]" key={index}>
                    <div className="relative">
                      <div className="font-bold leading-[21px] md:leading-[51px] text-[20px] md:text-[48px] mb-4 flex gap-5">
                        <p className="boldTextGradient">0{index + 1}.</p>{" "}
                        <p>{t(element.header)}</p>
                      </div>
                      <div className="gradientLineBg w-[500px] h-[1px] ml-[-100px] hidden md:flex"></div>
                    </div>
                    <div className="flex gap-[90px]">
                      {element.properties.map((e) => {
                        return (
                          <div
                            className="max-w-[342px] rounded-[10px] border border-[#6FE4C6]"
                            key={e}
                          >
                            <div className="flex flex-col items-start gap-4 py-[30px] px-5">
                              <img src={bsc} alt="bsc" />
                              <p className="text-[14px] font-light leading-[18.62px]">
                                {t(e)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-white relative">
            <div>
              <h1 className="textGradient text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold uppercase mb-3">
                {t("stacking")}
              </h1>
              <div className="max-w-[670px] flex flex-col items-start gap-5">
                <p className="text-[20px] leading-[30px]">{t("stacking_1")}</p>
                <p className="text-[20px] leading-[30px]">{t("stacking_2")}</p>
              </div>
              <div className="flex items-center gap-[15px] mt-[80px]">
                <input
                  type="text"
                  className="border border-[#6FE4C6] bg-transparent py-4 px-6 rounded-[34px] min-w-[266px]"
                  placeholder={t("input_tokens")}
                />
                <button className="bg-[#6FE4C6] rounded-[87px]">
                  <p className="text-[#000] px-[60px] py-[15px] text-[16px] font-semibold leading-6">
                    {t("in_stacking")}
                  </p>
                </button>
              </div>
              <p className="mt-8 ml-6 font-light text-[16px] leading-[17.3px]">
                {t("in_pools")}: $23 000
              </p>
            </div>
            <img
              className="absolute top-[-5%] z-[-1]"
              src={stackingBg}
              alt="Stacking background"
            />
          </div>
          <div className="mt-[160px]"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withTranslation()(App);
