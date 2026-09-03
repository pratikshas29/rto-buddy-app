export interface MockUser {
  id: string;
  name: string;
  firstName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  memberSince: string;
  role: "customer" | "provider" | "admin";
}

export const mockCustomer: MockUser = {
  id: "usr-1",
  name: "Asif Shaikh",
  firstName: "Asif",
  email: "asif.demo@example.com",
  phone: "+91 90000 00000 (demo)",
  city: "Pune",
  state: "Maharashtra",
  memberSince: "Jan 2024",
  role: "customer",
};

export const mockProviderUser: MockUser = {
  id: "usr-2",
  name: "Provider A — Demo Consultancy",
  firstName: "Provider A",
  email: "provider.demo@example.com",
  phone: "+91 90000 00001 (demo)",
  city: "Pune",
  state: "Maharashtra",
  memberSince: "Mar 2023",
  role: "provider",
};

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  type: "info" | "success" | "warning";
  read: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    title: "Application submitted",
    body: "RTO-20260903-00125 has been submitted to Pune RTO (MH12).",
    time: "2 hours ago",
    type: "success",
    read: false,
  },
  {
    id: "n2",
    title: "Document needs re-upload",
    body: "Insurance copy for MH12AB1234 was unreadable. Please upload a clearer scan.",
    time: "Yesterday",
    type: "warning",
    read: false,
  },
  {
    id: "n3",
    title: "PUC expired",
    body: "PUC for MH12XY5678 expired on 12 Aug 2026.",
    time: "3 days ago",
    type: "warning",
    read: true,
  },
  {
    id: "n4",
    title: "Payment received",
    body: "Demo payment of ₹2,248 recorded against TXN-DEMO-98231.",
    time: "5 days ago",
    type: "info",
    read: true,
  },
];

export const adminUsers = [
  { id: "U-10241", name: "Asif Shaikh", phone: "+91 90000 00000", city: "Pune", vehicles: 2, requests: 3, status: "Active" },
  { id: "U-10242", name: "Rhea Kulkarni", phone: "+91 90000 00010", city: "Pune", vehicles: 1, requests: 1, status: "Active" },
  { id: "U-10243", name: "Vikram Rao", phone: "+91 90000 00011", city: "Thane", vehicles: 4, requests: 6, status: "Active" },
  { id: "U-10244", name: "Meera Nair", phone: "+91 90000 00012", city: "Mumbai", vehicles: 1, requests: 0, status: "Inactive" },
  { id: "U-10245", name: "Sahil Deshpande", phone: "+91 90000 00013", city: "Bengaluru", vehicles: 2, requests: 2, status: "Active" },
];

export const adminRules = [
  { id: "R-01", name: "Vehicle Transfer Fee", service: "Vehicle Ownership Transfer", state: "Maharashtra", vehicleType: "Private", condition: "Demo rule", amount: 500, status: "Active" },
  { id: "R-02", name: "Green Tax — 15y+ Petrol", service: "Green Tax Payment", state: "Maharashtra", vehicleType: "Private", condition: "Age > 15 years", amount: 2000, status: "Active" },
  { id: "R-03", name: "NOC Processing Fee", service: "No Objection Certificate (NOC)", state: "Maharashtra", vehicleType: "All", condition: "Demo rule", amount: 450, status: "Active" },
  { id: "R-04", name: "Commercial Fitness Charge", service: "Commercial Permit & Fitness", state: "Karnataka", vehicleType: "Commercial", condition: "Goods carriage", amount: 1500, status: "Inactive" },
  { id: "R-05", name: "Re-registration Road Tax", service: "Vehicle Re-registration", state: "Gujarat", vehicleType: "Private", condition: "Depreciated value", amount: 8000, status: "Active" },
];
