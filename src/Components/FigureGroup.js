import React, { useState } from "react";
import styles from "./FigureGroup.module.css";
import TableLayout, { ColumnDefinition, RowDefinition } from "./TableLayout";
import { useSelector } from "react-redux";
import { selectCurrentFigureSet } from "../ReduxStore/matchSlice";

const FigureGroup = (props) => {
  const [imgSize, setImgSize] = useState(0);
  const figSet = useSelector(selectCurrentFigureSet);

  const figures = [0, 1, 2, 3].map((value) => {
    return (
      <div
        className={styles.figureDiv}
        ref={(el) => {
          if (!el) return;
          const bRect = el.getBoundingClientRect();
          const h = bRect.height;
          const w = bRect.width;
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
          src={
            figSet > -1 ? `Images/${figSet}/${value}.jpg` : "Images/base.jpg"
          }
          width={imgSize - 10}
          height={imgSize - 10}
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
      cells={[
        figures,
        // [
        // <div
        //   className={styles.figureDiv}
        //   ref={(el) => {
        //     if (!el) return;
        //     const bRect = el.getBoundingClientRect();
        //     const h = bRect.height;
        //     const w = bRect.width;
        //     if (h <= w) {
        //       if (h !== imgSize) {
        //         setImgSize(h);
        //       }
        //     } else {
        //       if (w !== imgSize) {
        //         setImgSize(w);
        //       }
        //     }
        //   }}
        // >
        //   <img
        //     src={"Images/0/0.jpg"}
        //     width={imgSize - 10}
        //     height={imgSize - 10}
        //   />
        // </div>,
        // <div className={styles.figureDiv}>
        //   <img
        //     src={"Images/0/0.jpg"}
        //     width={imgSize - 10}
        //     height={imgSize - 10}
        //   />{" "}
        // </div>,
        // <div className={styles.figureDiv}>
        //   <img
        //     src={"Images/0/0.jpg"}
        //     width={imgSize - 10}
        //     height={imgSize - 10}
        //   />{" "}
        // </div>,
        // <div className={styles.figureDiv}>
        //   <img
        //     src={"Images/0/0.jpg"}
        //     width={imgSize - 10}
        //     height={imgSize - 10}
        //   />{" "}
        // </div>,
        // ],
      ]}
    />
  );
};

FigureGroup.propTypes = {};

export default FigureGroup;
