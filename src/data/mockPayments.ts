export interface Payment {
  id: string;
  txnId: string;
  service: string;
  vehicle: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Refunded";
  method: string;
}

export const mockPayments: Payment[] = [
  {
    id: "pay-1",
    txnId: "TXN-DEMO-98231",
    service: "Vehicle Ownership Transfer",
    vehicle: "MH12AB1234",
    date: "29 Aug 2026",
    amount: 2248,
    status: "Paid",
    method: "UPI (demo)",
  },
  {
    id: "pay-2",
    txnId: "TXN-DEMO-91120",
    service: "Green Tax Payment",
    vehicle: "MH12XY5678",
    date: "13 Aug 2026",
    amount: 2348,
    status: "Paid",
    method: "Card (demo)",
  },
  {
    id: "pay-3",
    txnId: "TXN-DEMO-88410",
    service: "Duplicate RC",
    vehicle: "MH12XY5678",
    date: "02 Sep 2026",
    amount: 798,
    status: "Pending",
    method: "—",
  },
  {
    id: "pay-4",
    txnId: "TXN-DEMO-80102",
    service: "Address Change in RC",
    vehicle: "MH12AB1234",
    date: "18 Jun 2026",
    amount: 698,
    status: "Refunded",
    method: "UPI (demo)",
  },
];

export const defaultPaymentSummary = [
  { label: "Government Charges", amount: 1700 },
  { label: "Assistance Fee", amount: 499 },
  { label: "Platform Fee", amount: 49 },
];
