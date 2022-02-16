import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface Person {
  name: string;
  email: string;
  phone: string;
  role: string;
  join_date: Date;
}

export interface IBusiness {
  businessId: string;
  name: string;
  personsList: Person[];
}

interface IBusinessState {
  businessList: IBusiness[];
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
    createBusiness: (state, action: PayloadAction<{ name: string }>) => {
      state.status = "loading";
    },
    createBusinessSuccess: (state) => {
      state.status = "idle";
    },
    createBusinessFailure: (state) => {
      state.status = "failed";
    },
    getBusinessList: (state) => {
      state.status = "loading";
    },
    getBusinessListSuccess: (
      state,
      action: PayloadAction<{ businessList: IBusiness[] }>
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
  createBusiness,
  createBusinessSuccess,
  createBusinessFailure,
  getBusinessList,
  getBusinessListSuccess,
  getBusinessListFailure,
} = businessSlice.actions;

export const selectBusinessList = (state: RootState) =>
  state.business.businessList;

export default businessSlice.reducer;
