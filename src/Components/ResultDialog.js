import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  resultDialogClose,
  selectResultDialogOpen,
} from "../ReduxStore/resultDialogSlice";
import {
  selectTotalAnswer,
  selectWrongAnsweredFigureSets,
} from "../ReduxStore/matchSlice";
import store from "../ReduxStore/store";

export default function ResultDialog() {
  const open = useSelector(selectResultDialogOpen);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(resultDialogClose());
  };

  const totalAnswer = selectTotalAnswer(store.getState());
  const wrongAnswers = selectWrongAnsweredFigureSets(store.getState());

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Alıştırma Sonucu"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div>{`Toplam cevaplandırılan şekil: ${totalAnswer}`}</div>
          <div>{`Doğru cevap sayısı: ${
            totalAnswer - wrongAnswers.length
          }`}</div>
          <div>{`Yanlış cevap sayısı: ${wrongAnswers.length}`}</div>
          <div>{`Başarı oranı: %${Math.round(
            (100 * (totalAnswer - wrongAnswers.length)) / totalAnswer
          )}`}</div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
