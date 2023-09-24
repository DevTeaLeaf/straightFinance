import { useState } from "react";

import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

import { move, moveActive, bsc } from "#assets/img";

interface ISlider {
  t: TFunction;
  slides: any;
}

const Slider: React.FC<ISlider> = ({ t, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    setCurrentIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  const prevIndex = () => {
    setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  return (
    <div>
      <div
        className="max-w-[258px] mx-auto rounded-[10px] border border-[#6FE4C6]"
        key={currentIndex}
      >
        <div className="flex flex-col items-start gap-[6px] py-[16px] px-6">
          <img src={bsc} alt="bsc" className="w-6 h-6" />
          <p className="text-[14px] font-light leading-[18.62px] max-w-[210px]">
            {t(slides[currentIndex])}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[10px] py-[14px]">
        {" "}
        <button
          className={`${currentIndex ? "cursor-pointer" : "cursor-default"}`}
          onClick={() => currentIndex && prevIndex()}
        >
          <img
            src={currentIndex ? moveActive : move}
            alt="move"
            className="rotate-[180deg]"
          />
        </button>
        <button
          onClick={() => currentIndex != slides.length - 1 && nextIndex()}
          className={`${
            currentIndex != slides.length - 1
              ? "cursor-pointer"
              : "cursor-default"
          }`}
        >
          <img
            src={currentIndex === slides.length - 1 ? move : moveActive}
            alt="move"
          />
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(Slider);
