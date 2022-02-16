import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IPerson {
  personId?: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  join_date: Date;
}

export interface IBusiness {
  businessId: string;
  name: string;
  personsList?: IPerson[];
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
    createBusinessPerson: (
      state,
      action: PayloadAction<{ businessId: string; person: IPerson }>
    ) => {
      state.status = "loading";
    },
    createBusinessPersonSuccess: (state) => {
      state.status = "idle";
    },
    createBusinessPersonFailure: (state) => {
      state.status = "failed";
    },
    getBusinessPersonsList: (
      state,
      action: PayloadAction<{ businessId: string }>
    ) => {
      state.status = "loading";
    },
    getBusinessPersonsListSuccess: (
      state,
      action: PayloadAction<{ businessId: string; personsList: IPerson[] }>
    ) => {
      state.status = "idle";
      const { businessId, personsList } = action.payload;
      let businessList = state.businessList;
      businessList = businessList.map((item) => {
        if (item.businessId === businessId) {
          item.personsList = personsList;
        }
        return item;
      });
      state.businessList = businessList;
    },
    getBusinessPersonsListFailure: (state) => {
      state.status = "failed";
    },
    updateBusinessPerson: (
      state,
      action: PayloadAction<{
        businessId: string;
        personId: string;
        person: IPerson;
      }>
    ) => {
      state.status = "loading";
    },
    updateBusinessPersonSuccess: (
      state,
      action: PayloadAction<{
        businessId: string;
        personId: string;
        person: IPerson;
      }>
    ) => {
      state.status = "idle";
      const { businessId, personId, person } = action.payload;
      let businessList = state.businessList;
      businessList = businessList.map((item) => {
        if (item.businessId === businessId) {
          let personsList = item.personsList;
          personsList = personsList?.map((elem) => {
            if (elem.personId === personId) {
              return { ...elem, ...person };
            }
            return elem;
          });
          item.personsList = personsList;
        }
        return item;
      });
      state.businessList = businessList;
    },
    updateBusinessPersonFailure: (state) => {
      state.status = "failed";
    },
    deleteBusinessPerson: (
      state,
      action: PayloadAction<{ businessId: string; personId: string }>
    ) => {
      state.status = "loading";
    },
    deleteBusinessPersonSuccess: (state) => {
      state.status = "idle";
    },
    deleteBusinessPersonFailure: (state) => {
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
  createBusinessPerson,
  createBusinessPersonSuccess,
  createBusinessPersonFailure,
  getBusinessPersonsList,
  getBusinessPersonsListSuccess,
  getBusinessPersonsListFailure,
  updateBusinessPerson,
  updateBusinessPersonSuccess,
  updateBusinessPersonFailure,
  deleteBusinessPerson,
  deleteBusinessPersonSuccess,
  deleteBusinessPersonFailure,
} = businessSlice.actions;

export const selectBusinessList = (state: RootState) =>
  state.business.businessList;

export const selectBusiness = (businessId: string) => (state: RootState) =>
  state.business.businessList.find((item) => item.businessId === businessId);

export default businessSlice.reducer;
