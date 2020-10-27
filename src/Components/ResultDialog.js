import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
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
import { Typography } from "@material-ui/core";

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
        <Typography>{`Toplam cevaplandırılan şekil: ${totalAnswer}`}</Typography>
        <Typography>{`Doğru cevap sayısı: ${
          totalAnswer - wrongAnswers.length
        }`}</Typography>
        <Typography>{`Yanlış cevap sayısı: ${wrongAnswers.length}`}</Typography>
        <Typography>{`Başarı oranı: %${Math.round(
          (100 * (totalAnswer - wrongAnswers.length)) / totalAnswer
        )}`}</Typography>
      </DialogContent>
    </Dialog>
  );
}
