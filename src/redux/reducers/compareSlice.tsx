
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  SelectedItem: [] as Array<any>,
  activeCompare: false,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    compare: (state, { payload }: PayloadAction) => {
      const existingCartItem = state.SelectedItem.find(
        (item) => item.id === payload.id
      );
      state.SelectedItem.length === 2 || existingCartItem !== undefined
        ? null
        : (state.SelectedItem = [...state.SelectedItem, payload]),
        state.SelectedItem.length === 2
          ? (state.activeCompare = true)
          : (state.activeCompare = false);
    },
    remove: (state, { payload }: PayloadAction) => {
      state.SelectedItem = state.SelectedItem.filter(
        (item) => item.id !== payload.id
      );
    },
  
  },
});

export const {
  compare,
  remove,
} = compareSlice.actions;

export default compareSlice.reducer;
