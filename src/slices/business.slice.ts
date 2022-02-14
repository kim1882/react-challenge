import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface Person {
  name: string;
  email: string;
  phone: string;
  role: string;
  join_date: Date;
}

interface Business {
  name: string;
  personsList: Person[];
}

interface IBusinessState {
  businessList: Business[];
  status: "idle" | "loading" | "failed";
}

const initialState: IBusinessState = {
  businessList: [],
  status: "idle",
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    getBusinessList: (state) => {
      state.status = "loading";
    },
    getBusinessListSuccess: (
      state,
      action: PayloadAction<{ businessList: Business[] }>
    ) => {
      const { businessList } = action.payload;
      state.status = "idle";
      state.businessList = businessList;
    },
    getBusinessListFailure: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  getBusinessList,
  getBusinessListSuccess,
  getBusinessListFailure,
} = businessSlice.actions;

export const selectBusinessList = (state: RootState) =>
  state.business.businessList;

export default businessSlice.reducer;
