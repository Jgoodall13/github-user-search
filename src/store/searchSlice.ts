import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchInput: string;
}

const initialState: SearchState = {
  searchInput: "",
};

export const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearch } = counterSlice.actions;
export default counterSlice.reducer;
