import React, { useState } from "react";
import styles from "./ActionButtons.module.css";
import PropTypes from "prop-types";
import TableLayout, { ColumnDefinition, RowDefinition } from "./TableLayout";
import ImgGreen from "./green.png";
import ImgRed from "./red.png";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { answerFigureSet, nextFigureSet } from "../ReduxStore/matchSlice";

const ActionButtons = (props) => {
  const [imgSize, setImgSize] = useState(0);
  const dispatch = useDispatch();

  const onGreen = () => {
    dispatch(answerFigureSet(1));
    dispatch(nextFigureSet());
  };

  const onRed = () => {
    dispatch(answerFigureSet(0));
    dispatch(nextFigureSet());
  };

  return (
    <TableLayout
      rows={[new RowDefinition()]}
      columns={[new ColumnDefinition(), new ColumnDefinition()]}
      cells={[
        [
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
            />
            ,
          </div>,
          <div className={classnames(styles.container, styles.green)}>
            <img
              src={ImgGreen}
              height={imgSize}
              width={imgSize}
              onClick={onGreen}
            />
            ,
          </div>,
        ],
      ]}
    />
  );
};

ActionButtons.propTypes = {};

export default ActionButtons;
