// src/types.ts
export interface TFacility {
  _id?: string; // Optional, for cases where the facility might not yet have an ID
  name: string;
  description: string;
  category ?:string;
  pricePerHour: number;
  location: string;
  image?: string; // Optional, in case the image URL is not always provided
}
