export interface Provider {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  city: string;
  speciality: string;
  fee: number;
  turnaround: string;
  completed: number;
  verified: boolean;
}

export const mockProviders: Provider[] = [
  {
    id: "prv-a",
    name: "Provider A — Demo Consultancy",
    rating: 4.8,
    reviews: 412,
    city: "Pune",
    speciality: "Vehicle Transfer",
    fee: 499,
    turnaround: "7–10 days",
    completed: 1240,
    verified: true,
  },
  {
    id: "prv-b",
    name: "Provider B — Demo Motor Services",
    rating: 4.7,
    reviews: 318,
    city: "Pune",
    speciality: "Vehicle Transfer",
    fee: 599,
    turnaround: "5–8 days",
    completed: 980,
    verified: true,
  },
  {
    id: "prv-c",
    name: "Provider C — Demo RTO Desk",
    rating: 4.5,
    reviews: 176,
    city: "Pimpri-Chinchwad",
    speciality: "RC Services",
    fee: 449,
    turnaround: "8–12 days",
    completed: 640,
    verified: false,
  },
  {
    id: "prv-d",
    name: "Provider D — Demo Fleet Partners",
    rating: 4.6,
    reviews: 205,
    city: "Mumbai",
    speciality: "Commercial Vehicle",
    fee: 899,
    turnaround: "6–9 days",
    completed: 720,
    verified: true,
  },
];
