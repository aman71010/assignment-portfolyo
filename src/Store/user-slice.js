import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    about: {
      name: '',
      title: '',
      subTitle: '',
      description: '',
      quote: '',
      address: '',
      phoneNumber: '',
      avatarUrl: '',
      username: '',
      email: ''
    },
    timelines: [],
    services: [],
    projects: [],
    skills: [],
    testimonials: [],
    socialHandles: [],
  },
  reducers: {
    replaceUserData(state, action) {
      state.about = {
        name: action.payload.about.name,
        title: action.payload.about.title,
        subTitle: action.payload.about.subTitle,
        description: action.payload.about.description,
        quote: action.payload.about.quote,
        address: action.payload.about.address,
        phoneNumber: action.payload.about.phoneNumber,
        avatarUrl: action.payload.about.avatar.url,
        username: action.payload.about.username,
        email: action.payload.email
      }
      state.timelines = action.payload.timeline;
      state.services = action.payload.services;
      state.projects = action.payload.projects;
      state.skills = action.payload.skills;
      state.testimonials = action.payload.testimonials;
      state.socialHandles = action.payload.social_handles;
    }
  }
})

export const fetchUserData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      if(!response.ok){
        // throw error
      }
      const data = await response.json();
      return data;
    }
    try {
      const data = await fetchData();
      dispatch(userSlice.actions.replaceUserData(data.user));
    } catch(error) {
      //handle error
    }
  }
} 

export default userSlice;
