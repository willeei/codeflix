import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}

const category: Category = {
  id: "2e9fddb8-e4ee-429a-99ad-b5c8630d76c0",
  name: "IndianRed",
  description: null,
  is_active: true,
  deleted_at: null,
  created_at: "2024-10-18T02:46:45+0000",
  updated_at: "2024-10-18T02:46:45+0000",
};

export const initialState = [
  category,
  {
    ...category,
    id: "2e9fddb8-e4ee-429a-99ad-b5c8630d76c1",
    name: "Crimson",
  },
  {
    ...category,
    id: "2e9fddb8-e4ee-429a-99ad-b5c8630d76c2",
    name: "LightCoral",
  },
  {
    ...category,
    id: "2e9fddb8-e4ee-429a-99ad-b5c8630d76c3",
    name: "DarkRed",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCreateCategory(state, action) {},
    deleteCreateCategory(state, action) {},
  },
});

export default categoriesSlice.reducer;