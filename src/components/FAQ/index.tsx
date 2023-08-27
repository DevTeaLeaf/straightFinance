import { useState } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { FAQ_DATA } from "#constants";
import { plus } from "#assets/img";

interface ItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  t: any;
}

const Item = ({ question, answer, isOpen, toggleOpen, t }: ItemProps) => {
  return (
    <div
      className="w-full manrope rounded-[10px] cursor-pointer"
      onClick={toggleOpen}
    >
      <div>
        <div
          className={
            "font-bold text-[18px] leading-[21.6px] text-white py-4 faqBorder flex justify-between items-center"
          }
        >
          <p>{t(question)}</p>
          <img
            className={`${isOpen && "rotate-[45deg] faqTransition"}`}
            src={plus}
            alt="plus"
          />
        </div>
        {isOpen && (
          <div className=" text-[16px] mt-5 leading-[21.6px] text-white opacity-[0.85] pl-5">
            {t(answer)}
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index: any) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-[1rem] max-w-[800px]">
      {FAQ_DATA.map((item, index) => (
        <Item
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          toggleOpen={() => toggleItem(index)}
          t={t}
        />
      ))}
    </div>
  );
};

export default withTranslation()(FAQ);
