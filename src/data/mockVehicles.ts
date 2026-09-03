export type DocState = "valid" | "expiring" | "expired";

export interface Vehicle {
  id: string;
  regNumber: string;
  makeModel: string;
  type: "Two Wheeler" | "Four Wheeler" | "Commercial Vehicle";
  fuel: string;
  registrationDate: string;
  rto: string;
  rtoCode: string;
  owner: string;
  chassis: string;
  engine: string;
  docs: { name: string; status: DocState; note: string }[];
}

export const mockVehicles: Vehicle[] = [
  {
    id: "veh-1",
    regNumber: "MH12AB1234",
    makeModel: "Hyundai Creta",
    type: "Four Wheeler",
    fuel: "Petrol",
    registrationDate: "15 Mar 2021",
    rto: "Pune",
    rtoCode: "MH12",
    owner: "Asif Shaikh",
    chassis: "DEMOCH*****1234",
    engine: "DEMOEN*****5678",
    docs: [
      { name: "RC", status: "valid", note: "Valid until 14 Mar 2036" },
      { name: "Insurance", status: "expiring", note: "Expires in 18 days" },
      { name: "PUC", status: "valid", note: "Valid until 02 Dec 2026" },
      { name: "Tax", status: "valid", note: "Lifetime tax paid" },
    ],
  },
  {
    id: "veh-2",
    regNumber: "MH12XY5678",
    makeModel: "Honda Activa 6G",
    type: "Two Wheeler",
    fuel: "Petrol",
    registrationDate: "08 Jul 2018",
    rto: "Pune",
    rtoCode: "MH12",
    owner: "Asif Shaikh",
    chassis: "DEMOCH*****5678",
    engine: "DEMOEN*****9012",
    docs: [
      { name: "RC", status: "valid", note: "Valid until 07 Jul 2033" },
      { name: "Insurance", status: "valid", note: "Valid until 21 Jan 2027" },
      { name: "PUC", status: "expired", note: "Expired 12 Aug 2026" },
      { name: "Tax", status: "valid", note: "Lifetime tax paid" },
    ],
  },
];

export const getVehicle = (reg: string) =>
  mockVehicles.find((v) => v.regNumber.toLowerCase() === reg.toLowerCase());
