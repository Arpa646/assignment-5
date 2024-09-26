// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define types for API responses and requests


interface RootState {
  auth: {
    token: string;
  };
}

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({


    
    baseUrl: "https://assignment-ivory-two.vercel.app/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["facilities"],
  endpoints: (builder) => ({
   
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
    getFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["facilities"],
    }),
    getUser: builder.query({
      query: () => ({
        url: "/auth",
        method: "GET",
      }),
     
    }),
    addFacility: builder.mutation({
      query: (newFacility) => ({
        url: "/facility",
        method: "POST",
        body: newFacility,
      }),
      invalidatesTags: ["facilities"],
    }),
    updateFacility: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `facility/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["facilities"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facilities"],
    }),
    getFacilityPerUser: builder.query({
      query: () => ({
        url: "/bookings/user",
        method: "GET",
      }),
    }),
    signUp: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
      }),
     
    }),
    logIn: builder.mutation<void, { email: string; password: string }>({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
     
    }),
    checkAvailability: builder.query({
      query: (date) => ({
        url: `/check-availability?date=${date}`,
        method: "GET",
      }),
    }),
    cancelBooking: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facilities"],
    }),
    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["facilities"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/auth/${id}`,
        method: "GET",
      }),
      providesTags: ["facilities"],
    }),

    addBooking: builder.mutation({
      query: (bookingData) => ({
        url: "bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["facilities"],
    }),
  }),
});

export const {
  useGetSingleFacilityQuery,
  useGetSingleUserQuery,
  useGetAllBookingsQuery,
  useCancelBookingMutation,
  useGetFacilitiesQuery,
  useAddFacilityMutation,
  useAddBookingMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetFacilityPerUserQuery,
  useGetUserQuery,
  useLogInMutation,
  useSignUpMutation,

  useCheckAvailabilityQuery,
} = baseApi;
