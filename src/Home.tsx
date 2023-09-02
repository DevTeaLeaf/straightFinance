import { useState, useRef } from "react";

import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import i18n from "#translate/i18n";

import {
  Header,
  Footer,
  YouTubePlayer,
  FAQ,
  ReferralModal,
  Slider,
  InvestModal,
} from "./components";

import { PECULIARITIES, CATEGORIES } from "#constants";

import {
  leftBgArrow,
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
  stakingBg,
  card,
  twoCards,
  donut,
  arrow,
  rightBgArrow,
} from "#assets/img";

const Home = ({ t }: { t: TFunction }) => {
  const refs = {
    about: useRef<HTMLDivElement>(null),
    staking: useRef<HTMLDivElement>(null),
    referral: useRef<HTMLDivElement>(null),
    token: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    buy: useRef<HTMLDivElement>(null),
  };

  const [refModal, setRefModal] = useState(false);
  const [investModal, setInvestModal] = useState(false);

  const scrollToElement = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-col min-h-[100vh] gap-10 md:gap-[100px] overflow-x-hidden">
        <Header scrollToElement={scrollToElement} refs={refs} />
        <div className="grow max-w-[1440px] manrope mx-auto z-0">
          <div
            style={{ backgroundImage: `url(${net})` }}
            className="flex flex-col items-center justify-center gap-[30px] netBg"
          >
            <div className="minBacklight absolute top-[10%] md:hidden z-[-1]"></div>
            <div className="absolute left-[-5%] top-[0] z-[-1] md:block hidden">
              <img src={leftBgArrow} alt="bgArrow" />
              <div className="backlight absolute top-[35%] left-[5%]"></div>
            </div>
            <div className="absolute right-[-3%] top-[0] z-[-1] md:block hidden">
              <img src={rightBgArrow} alt="bgArrow" />
              <div className="backlight absolute top-[40%] right-[5%]"></div>
            </div>
            <h1 className="text-[#6FE4C6] text-center text-[24px] md:text-[48px] font-bold leading-[30px] md:leading-[58px] max-w-[300px] md:max-w-[750px]">
              {t("main_h1")}
            </h1>
            <h3 className="text-white text-[14px] md:text-[18px] leading-[17.5px] md:leading-6 font-light max-w-[360px] md:max-w-[645px] text-center">
              {t("main_h3")}
            </h3>
            <div className="flex items-center flex-col md:flex-row gap-5">
              <button
                onClick={() => scrollToElement(refs.buy)}
                className="bg-[#6FE4C6] rounded-[87px] ml-[10px] cursor-pointer"
              >
                <p className="text-[#000] px-[29px] py-2 text-[14px] font-semibold leading-6">
                  {t("how_it_works")}
                </p>
              </button>
              <div className="flex items-center gap-5">
                {" "}
                <a target="_blank" href="https://t.me/straight_finance">
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
            <button
              onClick={() => setInvestModal(true)}
              className="bg-[#6FE4C6] rounded-[87px] mb-[60px] md:mb-[100px]"
            >
              <p className="text-[#000] md:px-[60px] py-2 md:py-[15px] text-[12px] md:text-[16px] font-semibold leading-6 w-[146px] md:w-auto">
                {t("invest")}
              </p>
            </button>
            <div className={`${i18n.language === "en" ? "block" : "hidden"}`}>
              <YouTubePlayer videoId="Yua-bQwNcmI" />
            </div>
            <div className={`${i18n.language === "ru" ? "block" : "hidden"}`}>
              <YouTubePlayer videoId="WmQLdMoRn1o" />
            </div>
          </div>
          <div
            ref={refs.about}
            className="mt-[80px] flex flex-col items-center gap-[60px]"
          >
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
          <div className="mt-[70px] md:mt-[200px] flex flex-col items-center gap-[60px]">
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
            {false && (
              <button className="bg-[#6FE4C6] rounded-[87px]">
                <p className="text-[#000] px-[100px] py-[15px] text-[14px] font-semibold leading-6">
                  {t("claim")}
                </p>
              </button>
            )}
          </div>
          <div
            ref={refs.referral}
            className="mt-[90px] md:mt-[144px] flex flex-col items-center gap-10"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="mb-[-40px] md:mb-0 flex gap-3 text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold">
                <h3 className="text-white">{t("earnings")}</h3>
                <h3 className="textGradient h-[60px]">{t("refs")}</h3>
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
            <button
              onClick={() => setRefModal(true)}
              className="bg-[#6FE4C6] rounded-[87px]"
            >
              <p className="text-[#000] px-[60px] py-[15px] text-[14px] font-semibold leading-6">
                {t("become_ref")}
              </p>
            </button>
          </div>
          <div
            style={{ backgroundImage: `url(${net})` }}
            className="mt-[101px] flex flex-col text-[#fff]"
            ref={refs.buy}
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
          <div className="text-white mt-[50px] md:mt-[200px] flex flex-col gap-[50px]">
            <div className="flex flex-col items-center justify-center gap-[25px]">
              <h1 className="textGradient text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold mb-[-50px] md:mb-0 h-[60px]">
                {t("peculiarities")}
              </h1>
              <h3 className="text-[14px] md:text-[18px] font-light leading-[18.2px] md:leading-[23px] max-w-[700px] text-center px-[15px]">
                {t("peculiarities_description")}
              </h3>
            </div>
            <div>
              {PECULIARITIES.map((element, index) => {
                return (
                  <div
                    className="flex flex-col gap-5 md:gap-10 mb-10 md:mb-[140px]"
                    key={index}
                  >
                    <div className="relative">
                      <div className="font-bold leading-[21px] md:leading-[51px] text-[20px] md:text-[48px] mb-4 flex gap-5">
                        <p className="boldTextGradient">0{index + 1}.</p>{" "}
                        <p>{t(element.header)}</p>
                      </div>
                      <div className="gradientLineBg w-[300px] md:w-[500px] h-[1px] ml-[-100px]"></div>
                    </div>
                    {window.innerWidth >= 767 ? (
                      <div className="flex gap-[45px] md:gap-[90px] flex-wrap items-center justify-center">
                        {element.properties.map((e) => {
                          return (
                            <div
                              className="max-w-[342px] rounded-[10px] border border-[#6FE4C6]"
                              key={e}
                            >
                              <div className="flex flex-col items-start gap-4 py-[16px] md:py-[30px] px-6 md:px-5 w-[324px] h-[176px] md:w-[342px] md:h-[215px]">
                                <img src={bsc} alt="bsc" />
                                <p className="text-[14px] font-light leading-[18.62px]">
                                  {t(e)}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <Slider slides={element.properties} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div ref={refs.staking} className="text-white relative">
            <div>
              <h1 className="textGradient text-[20px] leading-[21px] md:text-[48px] md:leading-[51px] font-bold uppercase mb-3 text-center md:text-left">
                {t("staking")}
              </h1>
              <div className="max-w-[670px] flex flex-col items-center text-center md:text-left md:items-start gap-5 px-[15px] md:px-0">
                <p className="text-[14px] leading-[18.2px] md:text-[20px] md:leading-[30px]">
                  {t("staking_1")}
                </p>
                <p className="text-[14px] leading-[18.2px] md:text-[20px] md:leading-[30px]">
                  {t("staking_2")}
                </p>
              </div>
              <div className="flex items-center gap-1 md:gap-[15px] mt-[10px] md:mt-[80px] justify-center md:justify-start">
                <input
                  type="text"
                  className="border border-[#6FE4C6] bg-transparent py-2 md:py-4 px-6 rounded-[34px] md:min-w-[266px] max-w-[195px]"
                  placeholder={t("input_tokens")}
                />
                <button className="bg-[#6FE4C6] rounded-[87px]">
                  <p className="text-[#000] md:px-[60px] py-2 md:py-[15px] text-[12px] md:text-[16px] font-semibold leading-6 w-[146px] md:w-auto">
                    {t("in_staking")}
                  </p>
                </button>
              </div>
              <p className="mt-8 ml-6 font-light text-[16px] leading-[17.3px] text-center md:text-left">
                {t("in_pools")}: $23 000
              </p>
            </div>
            <img
              className="md:absolute md:top-[-5%] md:z-[-1]"
              src={stakingBg}
              alt="Staking background"
            />
          </div>
          <div ref={refs.token} className="mt-10 md:mt-[160px] text-white">
            <div className="flex justify-center items-center flex-col gap-2 md:gap-4">
              {" "}
              <h1 className="textGradient text-[20px] leading-[21px] md:text-[51px] md:leading-[51px] font-bold uppercase">
                SFINANCE
              </h1>{" "}
              <h3 className="font-light text-[14px] md:text-[18px] leading-[18.2px] md:leading-6 text-center max-w-[350px] md:max-w-none">
                {t("sfinance_tokenomics")}
              </h3>
              <div className="gradientCenterLine"></div>
            </div>{" "}
            <div className="flex items-center justify-center lg:justify-between mt-[85px] mb-[100px] md:mb-[116px] flex-col md:flex-row flex-wrap lg:flex-nowrap">
              <div className="relative max-w-[222px] md:max-w-[506px]">
                <img className="w-full" src={donut} alt="donut" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h3 className="lightText font-bold text-[24px] md:text-[40px] leading-7 md:leading-[45.4px] text-center">
                    {t("capitalization")}
                  </h3>
                  <p className="text-[12px] md:text-[16px] leading-[12.6px] md:leading-5 font-medium lightText text-center mt-[14px]">
                    {t("released")}
                  </p>
                </div>
              </div>

              <div className="relative max-w-[222px] md:max-w-[506px] mt-[90px] md:mt-0">
                <img className="w-full" src={donut} alt="donut" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h3 className="lightText font-bold text-[24px] md:text-[40px] leading-7 md:leading-[45.4px] text-center">
                    {t("capitalization")}
                  </h3>
                  <p className="text-[12px] md:text-[16px] leading-[12.6px] md:leading-5 font-medium lightText text-center mt-[14px]">
                    {t("on")} 20.07.23
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-[30px] px-[15px]">
              {CATEGORIES.map(({ name, color }) => (
                <div key={name} className="flex items-center gap-5">
                  <div
                    className="rounded-full w-[30px] h-[30px]"
                    style={{
                      filter: `drop-shadow(0px 0px 8px ${color})`,
                      backgroundColor: color,
                    }}
                  ></div>
                  <p className="text-[20px] font-bold leading-[26px] uppercase">
                    {t(name)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[85px] md:mt-[160px] text-white">
            <h3 className="text-[#6FE4C6] font-extrabold leading-[26px] text-[24px] md:text-[32px] md:leading-9 text-center mb-6">
              {t("buy_tokens")}
            </h3>
            <div className="flex flex-col items-center gap-[30px] py-[38px] px-[15px] md:px-auto md:border md:border-[#6FE4C6] md:rounded-[39px]">
              <p className="text-[16px] font-bold leading-[17px]">
                1 SFinance = 0.0025 USDT
              </p>
              <div className="text-[#6FE4C6] text-[16px] font-bold leading-[22px] py-[25px] px-3 text-center boxBg">
                {t("min_tokens")} - 1 USDT
              </div>
              <button
                onClick={() => setInvestModal(true)}
                className="bg-[#6FE4C6] rounded-[87px]"
              >
                <p className="text-[#000] md:px-[60px] py-2 md:py-[15px] text-[12px] md:text-[16px] font-semibold leading-6 w-[146px] md:w-auto">
                  {t("invest")}
                </p>
              </button>
              <div className="max-w-[300px] md:max-w-[387px] w-full relative">
                <div className="w-[40%] h-[13px] bg-[#6FE4C6] rounded-[21px]"></div>
                <div className="w-full h-[13px] bg-white rounded-[21px] absolute top-0 z-[-1]"></div>
              </div>
              <div className="flex gap-2 font-bold leading-5 text-[16px]">
                <p>{t("total_sold_out")}: $23000 / </p>
                <p className="text-[#0EB78C]">$50000</p>
              </div>
            </div>
          </div>
          <div className="mt-[100px] md:mt-[200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:text-left text-center">
            <div>
              <h1 className="textGradient text-[20px] leading-[21px] md:text-[51px] md:leading-[51px] font-bold uppercase mb-[16px] md:mb-6">
                {t("nft_sell")}
              </h1>{" "}
              <div className="text-white leading-[18px] md:leading-[29.1px] text-[14px] md:text-[20px] flex flex-start flex-col gap-10 max-w-[670px]">
                <p>{t("nft_sell_1")}</p>
                <p>{t("nft_sell_2")}</p>
              </div>
              <button className="bg-[#6FE4C6] rounded-[87px] mt-[64px] md:block hidden">
                <p className="text-[#000] px-[60px] py-[15px] text-[16px] font-semibold leading-6">
                  {t("buy_nft")}
                </p>
              </button>
            </div>
            <div className="flex relative mt-[55px] md:mt-0">
              <img src={twoCards} alt="twoCards" />
              <img
                src={card}
                alt="card"
                className="absolute bottom-0 left-[75%] z-[-1] hidden lg:block"
              />
            </div>
            <button className="bg-[#6FE4C6] rounded-[87px] mt-[64px] md:hidden block">
              <p className="text-[#000] px-[134px] py-[15px] text-[16px] font-semibold leading-6">
                {t("buy_nft")}
              </p>
            </button>
          </div>
          <div ref={refs.faq} className="mt-[96px] md:mt-[160px] relative">
            <h1 className="textGradient text-[20px] leading-[21px] md:text-[51px] md:leading-[51px] font-bold uppercase mb-6 text-center">
              FAQ
            </h1>{" "}
            <FAQ />
            <div className="backlight absolute top-[30%] left-[-20%] hidden md:block"></div>
            <div className="backlight absolute top-[30%] right-[-20%] hidden md:block"></div>
          </div>
          <div
            onClick={scrollToTop}
            className="mt-[60px] flex items-center justify-center cursor-pointer"
          >
            <img
              className="py-[15px] px-4 rounded-[5px] bg-[#1C2833]"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
        {refModal && <ReferralModal setModal={setRefModal} />}
        {investModal && <InvestModal setModal={setInvestModal} />}
        <Footer />
      </div>
    </>
  );
};

export default withTranslation()(Home);
