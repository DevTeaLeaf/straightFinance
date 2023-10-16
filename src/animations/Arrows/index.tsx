import { motion } from "framer-motion";

interface IArrows {
  direction: string;
}

const Arrows = ({ direction }: IArrows) => {
  const transition = { duration: 2, yoyo: Infinity, ease: "easeInOut" };

  switch (direction) {
    case "right":
      return (
        <svg
          width="315"
          height="601"
          viewBox="0 0 315 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M354.212 -106L1 247.212L354.212 600.425"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M516.738 42.9531L312.479 247.212L516.738 451.471"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M476.106 5.71484L234.608 247.212L476.106 488.71"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M435.475 -31.5234L156.739 247.212L435.475 525.948"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M394.843 -68.7617L78.8691 247.212L394.843 563.186"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      );
    case "left":
      return (
        <svg
          width="315"
          height="601"
          viewBox="0 0 315 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M-39.2123 -106L314 247.212L-39.2123 600.425"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M-201.738 42.9531L2.52148 247.212L-201.738 451.471"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M-161.106 5.71484L80.3916 247.212L-161.106 488.71"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M-120.475 -31.5234L158.261 247.212L-120.475 525.948"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M-79.8431 -68.7617L236.131 247.212L-79.8431 563.186"
            stroke="#6FE4C6"
            stroke-opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      );
    default:
      return <div></div>;
  }
};

export default Arrows;
