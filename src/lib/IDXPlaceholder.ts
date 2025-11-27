export const connectIDX = () => {
  return "IDX integration will be placed here.";
};
export type IDXListing = {
  id: string
  price: number
  beds: number
  baths: number
  sqft: number
  city: string
}

export function getSampleListings(): IDXListing[] {
  return [
    { id: "1", price: 425000, beds: 4, baths: 3, sqft: 2450, city: "Biloxi" },
    { id: "2", price: 289000, beds: 3, baths: 2, sqft: 1750, city: "Gulfport" },
    { id: "3", price: 525000, beds: 4, baths: 3, sqft: 3100, city: "Ocean Springs" },
  ]
}

export type MarketMetric = { label: string; value: string }
export function getSampleMetrics(): MarketMetric[] {
  return [
    { label: "Biloxi Median Price", value: "$285k" },
    { label: "New Listings This Week", value: "74" },
    { label: "Avg Days on Market", value: "31" },
  ]
}
