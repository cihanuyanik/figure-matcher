import React, { useLayoutEffect } from "react";
import styles from "./FigureGroup.module.css";
import TableLayout, { ColumnDefinition, RowDefinition } from "./TableLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentFigureSet,
  selectImageSize,
  setImageSize,
} from "../ReduxStore/matchSlice";

const FigureGroup = (props) => {
  const imgSize = useSelector(selectImageSize);
  const figSet = useSelector(selectCurrentFigureSet);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function updateSize() {
      const bRect = document
        .getElementById("figureGroup")
        .getBoundingClientRect();
      const h = bRect.height;
      const w = bRect.width;
      if (h <= w) {
        if (h !== imgSize) dispatch(setImageSize(h));
      } else {
        if (w !== imgSize) dispatch(setImageSize(w));
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [dispatch, figSet, imgSize]);

  const figures = [0, 1, 2, 3].map((value) => {
    return (
      <div id={"figureGroup"} className={styles.figureDiv}>
        <img
          src={
            figSet > -1 ? `Images/${figSet}/${value}.jpg` : "Images/base.jpg"
          }
          width={imgSize - 5}
          height={imgSize - 5}
          alt={`fig${value}`}
        />
      </div>
    );
  });

  return (
    <TableLayout
      rows={[new RowDefinition()]}
      columns={[
        new ColumnDefinition(),
        new ColumnDefinition(),
        new ColumnDefinition(),
        new ColumnDefinition(),
      ]}
      cells={[figures]}
    />
  );
};

FigureGroup.propTypes = {};

export default FigureGroup;
