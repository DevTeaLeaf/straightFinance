import { useState } from "react";

import i18n from "#translate/i18n";
import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import LanguagesModal from "../LanguagesModal";
import {
  discord,
  twitter,
  telegram,
  medium,
  copyright,
  arrowDown,
} from "#assets/img";

const Footer = ({ t }: { t: TFunction }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <footer className="px-[10px] md:px-[80px] lg:px-[140px] text-[#fff] py-3 max-w-[1440px] mx-auto w-full">
        <div className="w-full h-[1px] bg-[#0EB78C] mb-4 block md:hidden"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={copyright} alt="copyright" className="w-4 md:w-6" />
            <p className="inter text-[10px] md:text-[20px] ">{`2023 - ${t(
              "rights"
            )}`}</p>
          </div>
          <div className="flex items-center gap-6 md:gap-[55px] flex-col-reverse md:flex-row">
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
                inTop={true}
                active={modalActive}
                setActive={setModalActive}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default withTranslation()(Footer);
