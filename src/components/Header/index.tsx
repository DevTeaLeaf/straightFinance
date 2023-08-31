import { useState, useEffect } from "react";

import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useSigner, useNetwork, useSwitchNetwork } from "wagmi";

import i18n from "#translate/i18n";
import "./header.css";

import LanguagesModal from "../LanguagesModal";
import { wallet, arrowDown } from "#assets/img";

interface HeaderProps {
  t: TFunction;
  scrollToElement: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    about: React.RefObject<HTMLDivElement>;
    staking: React.RefObject<HTMLDivElement>;
    referral: React.RefObject<HTMLDivElement>;
    token: React.RefObject<HTMLDivElement>;
    faq: React.RefObject<HTMLDivElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ t, scrollToElement, refs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const { address } = useAccount();
  const { data } = useSigner();
  const { open } = useWeb3Modal();

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  // data === signer
  // data.provider === provider
  const closeNavAndScroll = (ref: React.RefObject<HTMLElement>) => {
    setIsNavOpen(false);
    scrollToElement(ref);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }
  }, [isNavOpen]);
  useEffect(() => {
    if (chain?.id != 56) {
      switchNetwork?.(56);
    }
  }, [chain]);

  return (
    <header className="w-full text-[#fff] manrope z-10">
      <div className="flex items-center justify-center h-[80px] mx-auto">
        <div className="flex items-center justify-between xl:justify-center w-full xl:px-0 pr-[60px] pl-4">
          <h3 className="text-[14px] md:text-[19px] md:leading-4 leading-3 font-bold cursor-pointer whitespace-nowrap">
            STRAIGHT FINANCE
          </h3>
          <div className="text-[18px] leading-4 xl:flex hidden items-center gap-[25px] ml-[18px] mr-[46px] ">
            <p
              onClick={() => scrollToElement(refs.about)}
              className="cursor-pointer"
            >
              {t("about_us")}
            </p>
            <p
              onClick={() => scrollToElement(refs.staking)}
              className="cursor-pointer"
            >
              {t("staking")}
            </p>
            <p
              onClick={() => scrollToElement(refs.referral)}
              className="cursor-pointer"
            >
              {t("ref_system")}
            </p>
            <p
              onClick={() => scrollToElement(refs.token)}
              className="cursor-pointer"
            >
              {t("token_and_nft")}
            </p>
            <p
              onClick={() => scrollToElement(refs.faq)}
              className="cursor-pointer"
            >
              FAQ
            </p>
          </div>
          {true ? (
            <button className="walletButton" onClick={() => open()}>
              <div className="flex items-center justify-center py-[7px] px-4 md:pl-[17px] md:pr-[22px] gap-[10px] ">
                <img src={wallet} alt="wallet" />
                <p className="text-[12px] md:text-[14px] font-semibold leading-6 whitespace-nowrap">
                  {address
                    ? address.slice(0, 4) + "..." + address.slice(-4)
                    : t("short_connect_wallet")}
                </p>
              </div>
            </button>
          ) : (
            <button className="bg-[#6FE4C6] rounded-[87px] ml-[10px] xl:flex hidden">
              <p className="text-[#000] px-[29px] py-2 text-[14px] font-semibold leading-6">
                {t("claim")}
              </p>
            </button>
          )}

          <div className="ml-2 md:ml-6 xl:block hidden">
            <div
              onClick={
                modalActive
                  ? () => setModalActive(false)
                  : () => setModalActive(true)
              }
              className="cursor-pointer flex items-center"
            >
              <p className="text-[14px] font-semibold leading-6">
                {i18n.language === "ru" ? "Русский" : "English"}
              </p>
              <img
                className={
                  modalActive
                    ? "rotate-[180deg] transition-[0.5s]"
                    : "transition-[0.5s]"
                }
                src={arrowDown}
                alt="arrow"
              />
            </div>
            <LanguagesModal
              inTop={false}
              active={modalActive}
              setActive={setModalActive}
            />
          </div>
        </div>
        <section className="flex xl:hidden absolute right-[16px] md:right-[26px] z-50">
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-[2px] w-[21px] animate-pulse bg-[#0EB78C]"></span>
            <span className="block h-[2px] w-[21px] animate-pulse bg-[#0EB78C]"></span>
            <span className="block h-[2px] w-[21px] animate-pulse bg-[#0EB78C]"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <p className="absolute top-1 left-0 px-8 py-8 cursor-pointer">
              STRAIGHT FINANCE
            </p>
            <div
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-[#0EB78C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex justify-center items-center flex-col w-full">
              <div className="text-[#fff] px-5 w-full">
                <div className="flex justify-between items-center flex-col gap-8 text-[18px] leading-4">
                  <p
                    onClick={() => closeNavAndScroll(refs.about)}
                    className="cursor-pointer"
                  >
                    {t("about_us")}
                  </p>
                  <p
                    onClick={() => closeNavAndScroll(refs.staking)}
                    className="cursor-pointer"
                  >
                    {t("staking")}
                  </p>
                  <p
                    onClick={() => closeNavAndScroll(refs.referral)}
                    className="cursor-pointer"
                  >
                    {t("ref_system")}
                  </p>
                  <p
                    onClick={() => closeNavAndScroll(refs.token)}
                    className="cursor-pointer"
                  >
                    {t("token_and_nft")}
                  </p>
                  <p
                    onClick={() => closeNavAndScroll(refs.faq)}
                    className="cursor-pointer"
                  >
                    FAQ
                  </p>
                  {true ? (
                    <button className="walletButton" onClick={() => open()}>
                      <div className="flex items-center justify-center py-[7px] px-4 md:pl-[17px] md:pr-[22px] gap-[10px]">
                        <img src={wallet} alt="wallet" />
                        <p className="text-[12px] md:text-[14px] font-semibold leading-6">
                          {address
                            ? address.slice(0, 4) + "..." + address.slice(-4)
                            : t("connect_wallet")}
                        </p>
                      </div>
                    </button>
                  ) : (
                    <button className="bg-[#6FE4C6] rounded-[87px]">
                      <p className="text-[#000] px-[29px] py-2 text-[14px] font-semibold leading-6">
                        {t("claim")}
                      </p>
                    </button>
                  )}

                  <div>
                    <div
                      onClick={
                        modalActive
                          ? () => setModalActive(false)
                          : () => setModalActive(true)
                      }
                      className="cursor-pointer flex items-center"
                    >
                      <p className="text-[14px] font-semibold leading-6">
                        {i18n.language === "ru" ? "Русский" : "English"}
                      </p>
                      <img
                        className={
                          modalActive
                            ? "rotate-[180deg] transition-[0.5s]"
                            : "transition-[0.5s]"
                        }
                        src={arrowDown}
                        alt="arrow"
                      />
                    </div>
                    <LanguagesModal
                      inTop={false}
                      active={modalActive}
                      setActive={setModalActive}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default withTranslation()(Header);
