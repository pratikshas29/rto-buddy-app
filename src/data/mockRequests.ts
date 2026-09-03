export type RequestStage =
  | "Request Created"
  | "Documents Uploaded"
  | "Documents Verified"
  | "Payment Completed"
  | "Application Submitted"
  | "RTO Processing"
  | "Completed";

export const requestStages: RequestStage[] = [
  "Request Created",
  "Documents Uploaded",
  "Documents Verified",
  "Payment Completed",
  "Application Submitted",
  "RTO Processing",
  "Completed",
];

export interface ServiceRequest {
  id: string;
  service: string;
  serviceSlug: string;
  vehicle: string;
  rto: string;
  customer: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  currentStage: RequestStage;
  status: "In Progress" | "Completed" | "Action Needed" | "New";
  amount: number;
  paymentStatus: "Paid" | "Pending";
}

export const mockRequests: ServiceRequest[] = [
  {
    id: "RTO-20260903-00125",
    service: "Vehicle Ownership Transfer",
    serviceSlug: "vehicle-transfer",
    vehicle: "MH12AB1234",
    rto: "Pune — MH12",
    customer: "Asif Shaikh",
    provider: "Provider A — Demo Consultancy",
    createdAt: "28 Aug 2026",
    updatedAt: "03 Sep 2026",
    currentStage: "Application Submitted",
    status: "In Progress",
    amount: 2248,
    paymentStatus: "Paid",
  },
  {
    id: "RTO-20260812-00098",
    service: "Green Tax Payment",
    serviceSlug: "green-tax",
    vehicle: "MH12XY5678",
    rto: "Pune — MH12",
    customer: "Asif Shaikh",
    provider: "Provider B — Demo Motor Services",
    createdAt: "12 Aug 2026",
    updatedAt: "20 Aug 2026",
    currentStage: "Completed",
    status: "Completed",
    amount: 2348,
    paymentStatus: "Paid",
  },
  {
    id: "RTO-20260902-00121",
    service: "Duplicate RC",
    serviceSlug: "duplicate-rc",
    vehicle: "MH12XY5678",
    rto: "Pune — MH12",
    customer: "Rhea Kulkarni",
    provider: "Provider A — Demo Consultancy",
    createdAt: "02 Sep 2026",
    updatedAt: "03 Sep 2026",
    currentStage: "Documents Uploaded",
    status: "Action Needed",
    amount: 798,
    paymentStatus: "Pending",
  },
  {
    id: "RTO-20260903-00131",
    service: "No Objection Certificate (NOC)",
    serviceSlug: "noc",
    vehicle: "MH14QT7788",
    rto: "Pimpri-Chinchwad — MH14",
    customer: "Vikram Rao",
    provider: "Unassigned",
    createdAt: "03 Sep 2026",
    updatedAt: "03 Sep 2026",
    currentStage: "Request Created",
    status: "New",
    amount: 948,
    paymentStatus: "Pending",
  },
];
