import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IProfile {
  name: string;
}

interface IProfileState {
  profile: IProfile;
}

const initialState: IProfileState = {
  profile: {
    name: "Guadalupe Estrada",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const selectUserProfile = (state: RootState) => state.profile.profile;

export default profileSlice.reducer;
