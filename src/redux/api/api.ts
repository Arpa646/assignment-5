import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define Facility and other types
type Facility = {
  id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
};

type Booking = {
  id: string;
  facilityId: string;
  userId: string;
  startDate: string;
  endDate: string;
  payableAmount: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Facilities', 'Bookings', 'Users', 'Availability'],
  endpoints: (builder) => ({
    // Facility Queries
    getFacilities: builder.query<Facility[], void>({
      query: () => 'facilities',
      providesTags: ['Facilities'],
    }),
    getSingleFacility: builder.query<Facility, string>({
      query: (id) => `facilities/${id}`,
     
    }),
    addFacility: builder.mutation<void, Facility>({
      query: (newFacility) => ({
        url: 'facilities',
        method: 'POST',
        body: newFacility,
      }),
      invalidatesTags: ['Facilities'],
    }),
    updateFacility: builder.mutation<void, { id: string; data: Partial<Facility> }>({
      query: ({ id, data }) => ({
        url: `facilities/${id}`,
        method: 'PUT',
        body: data,
      }),
      
    }),

    // Booking Queries
    getAllBookings: builder.query<Booking[], void>({
      query: () => 'bookings',
      providesTags: ['Bookings'],
    }),
    getFacilityPerUser: builder.query<Booking[], string>({
      query: (userId) => `bookings/user/${userId}`,
      providesTags: ['Bookings'],
    }),
    addBooking: builder.mutation<void, Booking>({
      query: (newBooking) => ({
        url: 'bookings',
        method: 'POST',
        body: newBooking,
      }),
      invalidatesTags: ['Bookings'],
    }),
    cancelBooking: builder.mutation<void, string>({
      query: (bookingId) => ({
        url: `bookings/${bookingId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bookings'],
    }),

    // User Queries
    getUser: builder.query<User, string>({
      query: (userId) => `users/${userId}`,
      providesTags: ['Users'],
    }),
    logIn: builder.mutation<void, { email: string; password: string }>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<void, User>({
      query: (newUser) => ({
        url: 'auth/signup',
        method: 'POST',
        body: newUser, // Changed to correct variable name: newUser
      }),
    }),

    // Availability Query
    checkAvailability: builder.query<boolean, { facilityId: string; startDate: string; endDate: string }>({
      query: ({ facilityId, startDate, endDate }) => ({
        url: `availability/${facilityId}`,
        params: { startDate, endDate },
      }),
      providesTags: ['Availability'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetFacilitiesQuery,
  useGetSingleFacilityQuery,
  useAddFacilityMutation,
  useUpdateFacilityMutation,
  useGetAllBookingsQresultuery,
  useGetFacilityPerUserQuery,
  useAddBookingMutation,
  useCancelBookingMutation,
  useGetUserQuery,
  useLogInMutation,
  useSignUpMutation,
  useCheckAvailabilityQuery,
} = baseApi;
