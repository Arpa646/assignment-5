// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define types for API responses and requests
interface Plant {
  id: string;
  name: string;
  // other plant properties
}




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
  tagTypes: ["plants", "facilities"],
  endpoints: (builder) => ({
    getPlants: builder.query<Plant[], void>({
      query: () => ({
        url: "/plants",
        method: "GET",
      }),
      providesTags: ["plants"],
    }),
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
      providesTags: ["facilities"],
    }),
    addFacility: builder.mutation({
      query: (newFacility) => ({
        url: "/facility",
        method: "POST",
        body: newFacility,
      }),
    }),
    updateFacility: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `facility/${id}`,
        method: "PUT",
        body: updateData,
      }),
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `facility/${id}`,
        method: "DELETE",
      }),
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
      invalidatesTags: ["plants"],
    }),
    logIn: builder.mutation<void, { email: string; password: string }>({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["plants"],
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
    
    }),
    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
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
    }),
  }),
});

export const {
  useGetSingleFacilityQuery,
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

  //useGetFacilitiesQuery,
  //   useGetSingleFacilityQuery,
  //   useAddFacilityMutatio

  //useGetFacilitiesQueryn,
  //   useUpdateFacilityMutation,
  //   useGetAllBookingsQresultuery,
  //   useGetFacilityPerUserQuery,
  //   useAddBookingMutation,
  //   useCancelBookingMutation,
  //   useGetUserQuery,
  //   useLogInMutation,
  //   useSignUpMutation,
  //   useDeleteFacilityMutation,
  //   useCheckAvailabilityQuery,
//} = baseApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define Facility and other types
// type Facility = {
//   id: string;
//   name: string;
//   description: string;
//   pricePerHour: number;
//   location: string;
// };

// type Booking = {
//   id: string;
//   facilityId: string;
//   userId: string;
//   startDate: string;
//   endDate: string;
//   payableAmount: number;
// };

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   role: string;
//   address: string;
// };

// export const baseApi = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   tagTypes: ['Facilities', 'Bookings', 'Users', 'Availability'],
//   endpoints: (builder) => ({
//     // Facility Queries
//     getFacilities: builder.query<Facility[], void>({
//       query: () => 'facilities',
//       providesTags: ['Facilities'],
//     }),
//     getSingleFacility: builder.query<Facility, string>({
//       query: (id) => `facilities/${id}`,

//     }),
//     addFacility: builder.mutation<void, Facility>({
//       query: (newFacility) => ({
//         url: 'facilities',
//         method: 'POST',
//         body: newFacility,
//       }),
//       invalidatesTags: ['Facilities'],
//     }),
//     updateFacility: builder.mutation<void, { id: string; data: Partial<Facility> }>({
//       query: ({ id, data }) => ({
//         url: `facilities/${id}`,
//         method: 'PUT',
//         body: data,
//       }),

//     }),

//     // Booking Queries
//     getAllBookings: builder.query<Booking[], void>({
//       query: () => 'bookings',
//       providesTags: ['Bookings'],
//     }),
//     getFacilityPerUser: builder.query<Booking[], string>({
//       query: (userId) => `bookings/user/${userId}`,
//       providesTags: ['Bookings'],
//     }),
//     addBooking: builder.mutation<void, Booking>({
//       query: (newBooking) => ({
//         url: 'bookings',
//         method: 'POST',
//         body: newBooking,
//       }),
//       invalidatesTags: ['Bookings'],
//     }),
//     cancelBooking: builder.mutation<void, string>({
//       query: (bookingId) => ({
//         url: `bookings/${bookingId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Bookings'],
//     }),

//     // User Queries
//     getUser: builder.query<User, string>({
//       query: (userId) => `users/${userId}`,
//       providesTags: ['Users'],
//     }),
//     deleteFacility: builder.mutation<void, string>({
//       query: (id) => ({
//         url: `facilities/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Facilities'],
//     }),
//     logIn: builder.mutation<void, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: 'auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     signUp: builder.mutation<void, User>({
//       query: (user) => ({
//         url: 'auth/signup',
//         method: 'POST',
//         body: user, // Changed to correct variable name: newUser
//       }),
//     }),

//     // Availability Query
//     checkAvailability: builder.query<boolean, { facilityId: string; startDate: string; endDate: string }>({
//       query: ({ facilityId, startDate, endDate }) => ({
//         url: `availability/${facilityId}`,
//         params: { startDate, endDate },
//       }),
//       providesTags: ['Availability'],
//     }),
//   }),
// });

// // Export hooks for usage in functional components
// export const {
//   useGetFacilitiesQuery,
//   useGetSingleFacilityQuery,
//   useAddFacilityMutatiouseGetFacilitiesQueryn,
//   useUpdateFacilityMutation,
//   useGetAllBookingsQresultuery,
//   useGetFacilityPerUserQuery,
//   useAddBookingMutation,
//   useCancelBookingMutation,
//   useGetUserQuery,
//   useLogInMutation,
//   useSignUpMutation,
//   useDeleteFacilityMutation,
//   useCheckAvailabilityQuery,
// } = baseApi;
