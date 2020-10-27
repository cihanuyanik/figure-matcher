import React from "react";
import styles from "./FigureGroup.module.css";
import { useSelector } from "react-redux";
import {
  selectCurrentFigureSet,
  selectCurrentRefFigure,
  selectImageSize,
} from "../ReduxStore/matchSlice";

const RefFigure = (props) => {
  const imgSize = useSelector(selectImageSize);
  const figSet = useSelector(selectCurrentFigureSet);
  const refFig = useSelector(selectCurrentRefFigure);
  return (
    <div className={styles.refFigureImg}>
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
