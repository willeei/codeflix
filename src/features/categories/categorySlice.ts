import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { apiSlice } from "../api/apiSlice";
import { Result, Results } from "../../types/Category";

export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}

const endpointUrl = "/categories";
function deleteCategoryMutation(category: Category) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "DELETE",
  };
}

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getCategories: query<Results, void>({
      query: () => `${endpointUrl}`,
      providesTags: ["Categories"],
    }),
    deleteCategory: mutation<Result, { id: string }>({
      query: deleteCategoryMutation,
      invalidatesTags: ["Categories"],
    }),
  }),
});

const category: Category = {
  id: "2e9fddb8-e4ee-429a-99ad-b5c8630d76c0",
  name: "IndianRed",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    is_active: false,
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
    createCategory(state, action) {
      state.push(action.payload);
    },
    updateCategory(state, action) {
      // find index on state of category to update
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      // update category on state
      state[index] = action.payload;
    },
    deleteCategory(state, action) {
      // find index on state of category to delete
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      // remove category from state
      state.splice(index, 1);
    },
  },
});

// Selectors
export const selectCategories = (state: RootState) => state.categories;

// Select catepory by id
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id);

  return (
    category || {
      id: "",
      name: "",
      description: "",
      is_active: false,
      created_at: "",
      updated_at: "",
      deleted_at: null,
    }
  );
};

export default categoriesSlice.reducer;
export const { createCategory, updateCategory, deleteCategory } =
  categoriesSlice.actions;

export const { useGetCategoriesQuery, useDeleteCategoryMutation } =
  categoriesApiSlice;
