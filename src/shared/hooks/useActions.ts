import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AllActions } from "../redux/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllActions, dispatch);
};
