// src/utils/fetchPackages.ts
export interface TravelPackage {
  "Package Name": string;
  "Price Per Person": string;
  "Description": string;
  "Image": string;
  "Deal of the Day"?: string; // <-- new column
}


const GOOGLE_SHEET_PACKAGES_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbz3W8XEYzilvckX1S8Yy9-8yOOe595Byw5uXq-eDgclYK2hbL7lsnggJuMsnwhGM1dwlQ/exec';

export async function fetchPackages(): Promise<TravelPackage[]> {
  try {
    const res = await fetch(GOOGLE_SHEET_PACKAGES_URL);
    const json = await res.json();
    return json.packages || [];
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
}
