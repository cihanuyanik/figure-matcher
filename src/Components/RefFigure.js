import React, { useState } from "react";
import styles from "./FigureGroup.module.css";
import { useSelector } from "react-redux";
import {
  selectCurrentFigureSet,
  selectCurrentRefFigure,
} from "../ReduxStore/matchSlice";

const RefFigure = (props) => {
  const [imgSize, setImgSize] = useState(0);
  const figSet = useSelector(selectCurrentFigureSet);
  const refFig = useSelector(selectCurrentRefFigure);
  return (
    <div
      className={styles.figureDiv}
      ref={(el) => {
        if (!el) return;
        const bRect = el.getBoundingClientRect();
        const h = bRect.height;
        const w = bRect.width / 4;
        if (h <= w) {
          if (h !== imgSize) {
            setImgSize(h);
          }
        } else {
          if (w !== imgSize) {
            setImgSize(w);
          }
        }
      }}
    >
      <img
        src={figSet > -1 ? `Images/${figSet}/${refFig}.jpg` : "Images/base.jpg"}
        width={imgSize - 10}
        height={imgSize - 10}
        alt={"refFigure"}
      />
    </div>
  );
};

RefFigure.propTypes = {};

export default RefFigure;
