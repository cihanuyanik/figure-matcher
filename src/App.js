import React from "react";
import styles from "./App.module.css";
import TableLayout, {
  ColumnDefinition,
  RowDefinition,
} from "./Components/TableLayout";
import FigureGroup from "./Components/FigureGroup";
import RefFigure from "./Components/RefFigure";
import ApplicationBar from "./Components/ApplicationBar";
import ResultDialog from "./Components/ResultDialog";
import ButtonGreen from "./Components/ButtonGreen";
import ButtonRed from "./Components/ButtonRed";

function App() {
  return (
    <div className={styles.appRoot}>
      <TableLayout
        rows={[
          new RowDefinition({ height: 50 }),
          new RowDefinition(),
          new RowDefinition({ height: 10 }),

          new RowDefinition(),
        ]}
        columns={[new ColumnDefinition()]}
        cells={[
          [<ApplicationBar />],
          [<FigureGroup />],
          [""],
          [
            <TableLayout
              rows={[new RowDefinition()]}
              columns={[
                new ColumnDefinition({ width: "min-content" }),
                new ColumnDefinition(),
                new ColumnDefinition({ width: "min-content" }),
              ]}
              cells={[[<ButtonRed />, <RefFigure />, <ButtonGreen />]]}
            />,
          ],
        ]}
      />
      <ResultDialog />
    </div>
  );
}

export default App;
