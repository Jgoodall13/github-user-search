import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchInput: string;
  name: string;
  login: string;
  bio: string;
  avatar: string;
  created: string;
  location: string;
  twitter: string;
  blog: string;
  company: string;
  followers: number;
  following: number;
  repos: number;
  url: string;
}

const initialState: SearchState = {
  searchInput: "",
  name: "",
  login: "",
  bio: "",
  avatar: "",
  created: "",
  location: "",
  twitter: "",
  blog: "",
  company: "",
  followers: 0,
  following: 0,
  repos: 0,
  url: "",
};

export const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setCreated: (state, action: PayloadAction<string>) => {
      state.created = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setTwitter: (state, action: PayloadAction<string>) => {
      state.twitter = action.payload;
    },
    setBlog: (state, action: PayloadAction<string>) => {
      state.blog = action.payload;
    },
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    setFollowers: (state, action: PayloadAction<number>) => {
      state.followers = action.payload;
    },
    setFollowing: (state, action: PayloadAction<number>) => {
      state.following = action.payload;
    },
    setRepos: (state, action: PayloadAction<number>) => {
      state.repos = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const {
  setSearch,
  setName,
  setLogin,
  setBio,
  setAvatar,
  setCreated,
  setLocation,
  setTwitter,
  setBlog,
  setCompany,
  setFollowers,
  setFollowing,
  setRepos,
  setUrl,
} = counterSlice.actions;
export default counterSlice.reducer;
