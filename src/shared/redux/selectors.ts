import { RootState } from "@/app/store/store";

export const postSelector = (state: RootState) => state.postReducer;
