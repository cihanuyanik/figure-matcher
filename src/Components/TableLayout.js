import React from "react";
import PropTypes from "prop-types";
import styles from "./TableLayout.module.css";

export class RowDefinition {
  style = {};
  constructor(style = { flex: 1 }) {
    this.style = style;
  }
}

Row.propTypes = {
  style: PropTypes.object.isRequired,
};

function Row(props) {
  return (
    <div className={styles.tableLayoutRow} style={props.style}>
      {props.children}
    </div>
  );
}

Column.propTypes = {
  style: PropTypes.object.isRequired,
};

export class ColumnDefinition {
  style = {};
  constructor(style = { flex: 1 }) {
    this.style = style;
  }
}

function Column(props) {
  return (
    <div className={styles.tableLayoutColumn} style={props.style}>
      {props.children}
    </div>
  );
}

TableLayout.propTypes = {
  style: PropTypes.object,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  cells: PropTypes.array.isRequired,
};

export function TableLayout(props) {
  const { style, rows, columns, cells } = props;

  const extractCell = (rIndex, cIndex) => {
    if (cells && cells[rIndex] && cells[rIndex][cIndex]) {
      return cells[rIndex][cIndex];
    }
  };

  return (
    <div className={styles.tableLayout} style={style}>
      {rows.map((r, rIndex) => {
        return (
          <Row key={rIndex} style={r.style}>
            {columns.map((c, cIndex) => {
              return (
                <Column key={cIndex} style={c.style}>
                  {extractCell(rIndex, cIndex)}
                </Column>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
}

export default TableLayout;
