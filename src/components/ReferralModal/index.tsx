import { useEffect, useRef } from "react";

import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import { close } from "#assets/img";

interface IReferralModal {
  t: TFunction;
  setModal: (value: boolean) => void;
}

const ReferralModal: React.FC<IReferralModal> = ({ t, setModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModal(false);
    }
  };

  function isValidAddress(address: string) {
    const addressPattern = /^(0x)?[0-9a-fA-F]{40}$/;

    return addressPattern.test(address);
  }

  const copyText = (text: string | undefined) => {
    if (text && isValidAddress(text)) {
      const link = `${window.location.host}#${text}`;
      navigator.clipboard.writeText(link);
      alert("Link copied!");
    } else {
      alert("Enter correct address!");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflowY = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="bg-[#13141f] w-full h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[50] opacity-80"></div>
      <div
        ref={modalRef}
        className="text-[#fff] bg-black rounded-[10px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[51]"
      >
        <div className="modalBg rounded-[10px] w-[320px] md:w-[628px] h-[160px] md:h-[202px]">
          <img
            className="absolute right-5 top-5 cursor-pointer md:w-4 md:h-4 h-3 w-3"
            src={close}
            alt="close"
            onClick={() => {
              setModal(false);
            }}
          />
          <div className="flex items-center justify-center flex-col py-[45px] gap-[10px]">
            <input
              ref={inputRef}
              type="text"
              className="w-[287px] border border-[#6FE4C6] bg-transparent py-2 md:py-4 px-6 rounded-[34px] "
              placeholder={t("wallet_address")}
            />
            <button
              onClick={() => copyText(inputRef.current?.value)}
              className="bg-[#6FE4C6] rounded-[87px] w-[287px]"
            >
              <p className="text-[#000] md:px-[60px] py-2 md:py-[15px] text-[12px] md:text-[16px] font-semibold leading-6">
                {t("get_ref")}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ReferralModal);
