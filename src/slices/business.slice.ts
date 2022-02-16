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
  personsList?: Person[];
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
    updateBusiness: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.status = "loading";
    },
    updateBusinessSuccess: (
      state,
      action: PayloadAction<{ businessId: string; name: string }>
    ) => {
      state.status = "idle";
      const { businessId, name } = action.payload;
      let businessList = state.businessList;
      businessList = businessList.map((item) => {
        if (item.businessId === businessId) {
          item.name = name;
        }
        return item;
      });
      state.businessList = businessList;
    },
    updateBusinessFailure: (state) => {
      state.status = "failed";
    },
    deleteBusiness: (state, action: PayloadAction<{ id: string }>) => {
      state.status = "loading";
    },
    deleteBusinessSuccess: (state) => {
      state.status = "idle";
    },
    deleteBusinessFailure: (state) => {
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
  updateBusiness,
  updateBusinessSuccess,
  updateBusinessFailure,
  deleteBusiness,
  deleteBusinessSuccess,
  deleteBusinessFailure,
} = businessSlice.actions;

export const selectBusinessList = (state: RootState) =>
  state.business.businessList;

export default businessSlice.reducer;
