export type DocumentStatus = "Uploaded" | "Under Review" | "Approved" | "Re-upload Required";

export interface UserDocument {
  id: string;
  name: string;
  vehicle?: string;
  status: DocumentStatus;
  uploadedAt: string;
  size: string;
  note?: string;
}

export const mockDocuments: UserDocument[] = [
  { id: "doc-1", name: "RC", vehicle: "MH12AB1234", status: "Approved", uploadedAt: "28 Aug 2026", size: "412 KB" },
  {
    id: "doc-2",
    name: "Insurance",
    vehicle: "MH12AB1234",
    status: "Re-upload Required",
    uploadedAt: "28 Aug 2026",
    size: "289 KB",
    note: "Policy copy is unreadable. Please upload a clearer scan.",
  },
  { id: "doc-3", name: "PUC", vehicle: "MH12AB1234", status: "Approved", uploadedAt: "28 Aug 2026", size: "128 KB" },
  { id: "doc-4", name: "Aadhaar / ID", status: "Approved", uploadedAt: "27 Aug 2026", size: "540 KB" },
  { id: "doc-5", name: "Address Proof", status: "Under Review", uploadedAt: "01 Sep 2026", size: "331 KB" },
  { id: "doc-6", name: "NOC", vehicle: "MH12XY5678", status: "Uploaded", uploadedAt: "02 Sep 2026", size: "205 KB" },
  { id: "doc-7", name: "Bank Documents", status: "Uploaded", uploadedAt: "02 Sep 2026", size: "654 KB" },
];

export const documentTypes = [
  "RC",
  "Insurance",
  "PUC",
  "Aadhaar / ID",
  "Address Proof",
  "NOC",
  "Bank Documents",
  "Sale Agreement",
];
