import React, { useState } from "react";
import classnames from "classnames";
import styles from "./ActionButtons.module.css";
import ImgGreen from "./green.png";
import { answerFigureSet, nextFigureSet } from "../ReduxStore/matchSlice";
import { useDispatch } from "react-redux";

const ButtonGreen = () => {
  const [imgSize, setImgSize] = useState(0);
  const dispatch = useDispatch();

  const onGreen = () => {
    dispatch(answerFigureSet(1));
    dispatch(nextFigureSet());
  };

  return (
    <div
      className={classnames(styles.container, styles.green)}
      ref={(el) => {
        if (!el) return;
        const bRect = el.getBoundingClientRect();
        const h = bRect.height;
        const w = bRect.width;
        if (h <= w) setImgSize(h);
        else setImgSize(w);
      }}
    >
      <img
        src={ImgGreen}
        height={imgSize}
        width={imgSize}
        onClick={onGreen}
        alt={"green"}
      />
      ,
    </div>
  );
};

export default ButtonGreen;
