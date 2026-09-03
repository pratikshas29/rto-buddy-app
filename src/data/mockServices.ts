export type VehicleType = "two-wheeler" | "four-wheeler" | "commercial";

export type ServiceCategory =
  | "vehicle-transfer"
  | "rc-services"
  | "tax"
  | "driving-licence"
  | "hypothecation"
  | "noc"
  | "scrapping"
  | "commercial";

export interface RtoService {
  slug: string;
  name: string;
  category: ServiceCategory;
  short: string;
  about: string;
  whoNeeds: string[];
  vehicleTypes: VehicleType[];
  documents: { name: string; detail: string }[];
  steps: string[];
  costs: { label: string; amount: number }[];
  popular: boolean;
  processingTime: string;
}

export const serviceCategories: {
  id: ServiceCategory;
  name: string;
  emoji: string;
  blurb: string;
}[] = [
  { id: "vehicle-transfer", name: "Vehicle Transfer", emoji: "🚗", blurb: "Buying or selling a used vehicle" },
  { id: "rc-services", name: "RC Services", emoji: "📄", blurb: "Duplicate RC, address change, renewal" },
  { id: "tax", name: "Road Tax & Green Tax", emoji: "💰", blurb: "Pay pending or lifetime taxes" },
  { id: "driving-licence", name: "Driving Licence", emoji: "🪪", blurb: "New, renewal, duplicate, endorsements" },
  { id: "hypothecation", name: "Hypothecation / Loan", emoji: "🏦", blurb: "Add or remove financier entries" },
  { id: "noc", name: "NOC", emoji: "📍", blurb: "Inter-state and inter-RTO movement" },
  { id: "scrapping", name: "Vehicle Scrapping", emoji: "♻️", blurb: "End-of-life vehicle deregistration" },
  { id: "commercial", name: "Commercial Vehicle", emoji: "🚛", blurb: "Permits, fitness and goods carriage" },
];

const idDocs = [
  { name: "Identity Proof", detail: "Aadhaar, Passport, Voter ID or PAN of the applicant (demo requirement)." },
  { name: "Address Proof", detail: "Aadhaar, utility bill or rent agreement showing current address." },
];

export const mockServices: RtoService[] = [
  {
    slug: "vehicle-transfer",
    name: "Vehicle Ownership Transfer",
    category: "vehicle-transfer",
    short: "Transfer the registration of a second-hand vehicle from the seller to the buyer.",
    about:
      "Ownership transfer updates the registered owner details on the vehicle's RC after a sale. Until the transfer is recorded, the seller stays liable for challans, taxes and legal notices linked to the vehicle.",
    whoNeeds: [
      "Buyer of a second-hand vehicle",
      "Seller transferring ownership after sale",
      "Legal heir taking over a vehicle",
    ],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original smart card or paper RC of the vehicle." },
      { name: "Valid Insurance", detail: "Active third-party or comprehensive policy copy." },
      { name: "PUC Certificate", detail: "Valid pollution under control certificate." },
      ...idDocs,
      { name: "Applicable Forms", detail: "Demo forms bundle prepared for you by the assistance partner." },
      { name: "Sale Agreement", detail: "Signed delivery note or sale letter between buyer and seller." },
      { name: "Passport Photos", detail: "Two recent passport-size photographs of the buyer." },
    ],
    steps: [
      "Check eligibility",
      "Prepare documents",
      "Submit application",
      "Pay applicable charges",
      "RTO processing",
      "Receive updated RC",
    ],
    costs: [
      { label: "Government Charges", amount: 500 },
      { label: "Applicable Tax", amount: 1200 },
      { label: "Assistance Fee", amount: 499 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "7–15 working days",
  },
  {
    slug: "duplicate-rc",
    name: "Duplicate RC",
    category: "rc-services",
    short: "Apply for a fresh RC when the original is lost, stolen or badly damaged.",
    about:
      "A duplicate RC is issued against the same registration number when the original card is misplaced. A police intimation is usually attached for lost or stolen cards.",
    whoNeeds: ["Owners who lost the RC card", "Owners with a damaged or unreadable RC"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Police Intimation", detail: "Complaint acknowledgement for the lost or stolen RC." },
      { name: "Valid Insurance", detail: "Active policy copy for the vehicle." },
      { name: "PUC Certificate", detail: "Valid pollution certificate." },
      ...idDocs,
      { name: "Applicable Forms", detail: "Duplicate RC request form bundle (demo)." },
    ],
    steps: [
      "Check eligibility",
      "File police intimation",
      "Prepare documents",
      "Submit application",
      "Pay applicable charges",
      "Receive duplicate RC",
    ],
    costs: [
      { label: "Government Charges", amount: 350 },
      { label: "Assistance Fee", amount: 399 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "10–20 working days",
  },
  {
    slug: "address-change",
    name: "Address Change in RC",
    category: "rc-services",
    short: "Update the owner's address on the RC after shifting home or city.",
    about:
      "An address change keeps RTO records, insurance and challan notices aligned with where you actually live. Moving to a different RTO jurisdiction may also need an NOC.",
    whoNeeds: ["Owners who shifted residence", "Owners moving within the same state"],
    vehicleTypes: ["two-wheeler", "four-wheeler"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card." },
      ...idDocs,
      { name: "Valid Insurance", detail: "Active policy copy." },
      { name: "Applicable Forms", detail: "Address change form bundle (demo)." },
    ],
    steps: ["Check eligibility", "Prepare documents", "Submit application", "Pay charges", "Receive updated RC"],
    costs: [
      { label: "Government Charges", amount: 300 },
      { label: "Assistance Fee", amount: 349 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "7–12 working days",
  },
  {
    slug: "noc",
    name: "No Objection Certificate (NOC)",
    category: "noc",
    short: "Get clearance from your current RTO before moving the vehicle to another RTO or state.",
    about:
      "An NOC confirms there are no pending dues, challans or hypothecation blocks on the vehicle. The destination RTO needs it before re-registering the vehicle.",
    whoNeeds: ["Owners relocating to another state", "Owners selling to a buyer in another RTO"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card." },
      { name: "Valid Insurance", detail: "Active policy copy." },
      { name: "PUC Certificate", detail: "Valid pollution certificate." },
      { name: "Tax Payment Proof", detail: "Latest road tax receipt for the vehicle." },
      ...idDocs,
      { name: "Applicable Forms", detail: "NOC request form bundle (demo)." },
    ],
    steps: [
      "Check pending dues",
      "Prepare documents",
      "Submit application",
      "Pay applicable charges",
      "RTO verification",
      "Receive NOC",
    ],
    costs: [
      { label: "Government Charges", amount: 450 },
      { label: "Assistance Fee", amount: 449 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "15–30 working days",
  },
  {
    slug: "hypothecation-removal",
    name: "Hypothecation Removal",
    category: "hypothecation",
    short: "Remove the financier's name from the RC once the vehicle loan is closed.",
    about:
      "After a vehicle loan is fully repaid, the lender issues a no-dues letter. The RTO then removes the hypothecation entry so the RC shows you as the sole owner.",
    whoNeeds: ["Owners who closed a vehicle loan", "Owners selling a previously financed vehicle"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card with the hypothecation entry." },
      { name: "Loan Closure Letter", detail: "No-objection letter issued by the financier (demo)." },
      { name: "Bank Form 35", detail: "Termination of hypothecation form signed by the lender." },
      { name: "Valid Insurance", detail: "Active policy copy." },
      ...idDocs,
    ],
    steps: [
      "Collect no-dues letter",
      "Prepare documents",
      "Submit application",
      "Pay charges",
      "RTO processing",
      "Receive clean RC",
    ],
    costs: [
      { label: "Government Charges", amount: 400 },
      { label: "Assistance Fee", amount: 399 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "10–18 working days",
  },
  {
    slug: "green-tax",
    name: "Green Tax Payment",
    category: "tax",
    short: "Pay the environment compensation charge applicable to older vehicles.",
    about:
      "Green tax applies to vehicles that cross a defined age threshold, and is usually collected at the time of fitness renewal or re-registration.",
    whoNeeds: ["Owners of vehicles older than 8–15 years", "Commercial operators renewing fitness"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card." },
      { name: "Previous Tax Receipt", detail: "Last paid tax challan or receipt." },
      { name: "Valid Insurance", detail: "Active policy copy." },
      { name: "PUC Certificate", detail: "Valid pollution certificate." },
    ],
    steps: ["Check vehicle age", "Calculate estimate", "Submit application", "Pay green tax", "Receive receipt"],
    costs: [
      { label: "Government Charges", amount: 2000 },
      { label: "Assistance Fee", amount: 299 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "1–3 working days",
  },
  {
    slug: "road-tax",
    name: "Road Tax Payment",
    category: "tax",
    short: "Pay one-time or pending road tax for private and commercial vehicles.",
    about:
      "Road tax is levied by the state on vehicle registration, and again when a vehicle is re-registered in a new state. Rates vary by vehicle value, fuel and usage type.",
    whoNeeds: ["New vehicle owners", "Owners re-registering in a new state", "Owners with pending tax dues"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card or registration slip." },
      { name: "Invoice / Vehicle Value", detail: "Purchase invoice or valuation document." },
      { name: "Valid Insurance", detail: "Active policy copy." },
      ...idDocs,
    ],
    steps: ["Calculate estimate", "Prepare documents", "Submit application", "Pay road tax", "Receive receipt"],
    costs: [
      { label: "Government Charges", amount: 1200 },
      { label: "Assistance Fee", amount: 299 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "1–5 working days",
  },
  {
    slug: "rc-renewal",
    name: "RC Renewal",
    category: "rc-services",
    short: "Renew the registration of a vehicle completing 15 years.",
    about:
      "Private vehicles are registered for 15 years. After that, registration must be renewed every 5 years subject to a fitness check.",
    whoNeeds: ["Owners of vehicles nearing 15 years", "Owners with expired registration validity"],
    vehicleTypes: ["two-wheeler", "four-wheeler"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card." },
      { name: "Valid Insurance", detail: "Active policy copy." },
      { name: "PUC Certificate", detail: "Valid pollution certificate." },
      { name: "Green Tax Receipt", detail: "Proof of paid green tax, if applicable." },
      ...idDocs,
    ],
    steps: [
      "Check eligibility",
      "Prepare documents",
      "Vehicle inspection",
      "Submit application",
      "Pay charges",
      "Receive renewed RC",
    ],
    costs: [
      { label: "Government Charges", amount: 600 },
      { label: "Applicable Tax", amount: 2000 },
      { label: "Assistance Fee", amount: 499 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "12–25 working days",
  },
  {
    slug: "re-registration",
    name: "Vehicle Re-registration",
    category: "vehicle-transfer",
    short: "Register your vehicle in a new state after relocation using an NOC.",
    about:
      "When a vehicle stays in a new state for more than 12 months, it must be re-registered there. This involves an NOC from the old RTO and fresh road tax in the new state.",
    whoNeeds: ["Owners who moved to another state", "Owners with an out-of-state registration"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "NOC from Previous RTO", detail: "Clearance certificate from the original RTO." },
      { name: "Registration Certificate (RC)", detail: "Original RC card." },
      { name: "Valid Insurance", detail: "Active policy copy." },
      { name: "PUC Certificate", detail: "Valid pollution certificate." },
      { name: "Old State Tax Receipt", detail: "Proof of tax paid in the previous state." },
      ...idDocs,
    ],
    steps: [
      "Obtain NOC",
      "Prepare documents",
      "Vehicle inspection",
      "Submit application",
      "Pay new state road tax",
      "Receive new registration",
    ],
    costs: [
      { label: "Government Charges", amount: 700 },
      { label: "Applicable Tax", amount: 8000 },
      { label: "Assistance Fee", amount: 999 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "20–40 working days",
  },
  {
    slug: "vehicle-scrapping",
    name: "Vehicle Scrapping & Deregistration",
    category: "scrapping",
    short: "Deregister an end-of-life vehicle through a registered scrapping facility.",
    about:
      "Scrapping cancels the registration permanently and generates a certificate of deposit, which can offer benefits on a new vehicle purchase.",
    whoNeeds: ["Owners of end-of-life vehicles", "Owners of vehicles beyond economical repair"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card for surrender." },
      { name: "Number Plates", detail: "Both plates must be surrendered at the facility." },
      ...idDocs,
      { name: "Applicable Forms", detail: "Deregistration form bundle (demo)." },
    ],
    steps: [
      "Check eligibility",
      "Choose scrapping facility",
      "Surrender vehicle",
      "Submit application",
      "RTO deregistration",
      "Receive scrap certificate",
    ],
    costs: [
      { label: "Government Charges", amount: 250 },
      { label: "Assistance Fee", amount: 599 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: true,
    processingTime: "10–20 working days",
  },
  {
    slug: "driving-licence-renewal",
    name: "Driving Licence Renewal",
    category: "driving-licence",
    short: "Renew an expiring or expired driving licence with a medical certificate if needed.",
    about:
      "A driving licence is valid for 20 years or until age 50, whichever is earlier. Renewal after 40 usually requires a medical fitness form.",
    whoNeeds: ["Licence holders nearing expiry", "Holders with a recently expired licence"],
    vehicleTypes: ["two-wheeler", "four-wheeler", "commercial"],
    documents: [
      { name: "Existing Driving Licence", detail: "Current licence card or number." },
      ...idDocs,
      { name: "Medical Certificate", detail: "Form 1A, if applicable by age (demo)." },
      { name: "Passport Photos", detail: "Two recent photographs." },
    ],
    steps: ["Check eligibility", "Prepare documents", "Book slot", "Submit application", "Pay charges", "Receive licence"],
    costs: [
      { label: "Government Charges", amount: 450 },
      { label: "Assistance Fee", amount: 349 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: false,
    processingTime: "7–15 working days",
  },
  {
    slug: "commercial-permit",
    name: "Commercial Permit & Fitness",
    category: "commercial",
    short: "Renew goods carriage permits and fitness certificates for commercial vehicles.",
    about:
      "Commercial vehicles need a valid permit and periodic fitness certification. Lapses can attract penalties and detention during checks.",
    whoNeeds: ["Goods carriage operators", "Fleet owners", "Passenger vehicle operators"],
    vehicleTypes: ["commercial"],
    documents: [
      { name: "Registration Certificate (RC)", detail: "Original RC card." },
      { name: "Existing Permit", detail: "Current permit copy." },
      { name: "Fitness Certificate", detail: "Latest fitness certificate, if available." },
      { name: "Valid Insurance", detail: "Active commercial policy copy." },
      { name: "Tax Payment Proof", detail: "Latest tax receipt." },
    ],
    steps: [
      "Check permit validity",
      "Prepare documents",
      "Vehicle inspection",
      "Submit application",
      "Pay charges",
      "Receive permit",
    ],
    costs: [
      { label: "Government Charges", amount: 1500 },
      { label: "Applicable Tax", amount: 2500 },
      { label: "Assistance Fee", amount: 899 },
      { label: "Platform Fee", amount: 49 },
    ],
    popular: false,
    processingTime: "10–20 working days",
  },
];

export const getService = (slug: string) => mockServices.find((s) => s.slug === slug);

export const serviceTotal = (s: RtoService) => s.costs.reduce((a, c) => a + c.amount, 0);

export const governmentTotal = (s: RtoService) =>
  s.costs
    .filter((c) => c.label === "Government Charges" || c.label === "Applicable Tax")
    .reduce((a, c) => a + c.amount, 0);
