import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/user";
import { fetchUsers } from "../../services/userService";

type UserState = {
  items: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  items: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.items = state.items.filter((user) => user.id !== userId);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.items.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.items[index] = updatedUser;
      }
    },
    addUser: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const fetchUsersThunk = createAsyncThunk("users/fetchUsers", fetchUsers);

export const { deleteUser, updateUser, addUser } = userSlice.actions;
export default userSlice.reducer;
