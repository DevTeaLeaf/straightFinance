import i18n from "#translate/i18n";

interface LanguagesModalProps {
  inTop: boolean;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguagesModal: React.FC<LanguagesModalProps> = ({
  inTop = false,
  active,
  setActive,
}) => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setActive(false);
  };
  return (
    <>
      <div
        className={
          active
            ? `rounded-[10px] fixed transition-[0.5s] ${
                inTop ? "mt-[-150px] ml-[-5%]" : "mt-[10px]"
              } languagesModal`
            : "hidden transition-[0.5s]"
        }
      >
        <div className="pt-[15px] pr-[60px] pb-[18px] pl-[25px]">
          <div
            onClick={() => changeLanguage("en")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <p
              className={`ml-[17px] font-bold text-[16px] leading-6 hover:opacity-100 ${
                i18n.language === "en" ? "opacity-70" : "opacity-100"
              }`}
            >
              English
            </p>
          </div>

          <div
            onClick={() => changeLanguage("ru")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <p
              className={`ml-[17px] font-bold text-[16px] leading-6 hover:opacity-100 ${
                i18n.language === "ru" ? "opacity-70" : "opacity-100"
              }`}
            >
              Русский
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguagesModal;
