import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import styles from "./ActionButtons.module.css";
import ImgRed from "./red.png";
import { answerFigureSet, nextFigureSet } from "../ReduxStore/matchSlice";

const ButtonRed = () => {
  const [imgSize, setImgSize] = useState(0);
  const dispatch = useDispatch();

  const onRed = () => {
    dispatch(answerFigureSet(0));
    dispatch(nextFigureSet());
  };

  return (
    <div
      className={classnames(styles.container, styles.red)}
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
        src={ImgRed}
        height={imgSize}
        width={imgSize}
        onClick={onRed}
        alt={"red"}
      />
      ,
    </div>
  );
};

export default ButtonRed;
