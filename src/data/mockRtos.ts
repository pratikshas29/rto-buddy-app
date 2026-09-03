export interface RtoOffice {
  code: string;
  name: string;
  city: string;
  citySlug: string;
  state: string;
  stateSlug: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  services: string[];
  status: "active" | "limited";
}

export const mockStates = [
  { slug: "maharashtra", name: "Maharashtra", rtoCount: 5 },
  { slug: "karnataka", name: "Karnataka", rtoCount: 2 },
  { slug: "gujarat", name: "Gujarat", rtoCount: 2 },
  { slug: "delhi", name: "Delhi", rtoCount: 1 },
];

const common = [
  "Ownership Transfer",
  "Duplicate RC",
  "Address Change",
  "NOC",
  "Hypothecation Removal",
  "Road Tax",
  "Green Tax",
  "Driving Licence",
];

export const mockRtos: RtoOffice[] = [
  {
    code: "MH12",
    name: "Pune RTO",
    city: "Pune",
    citySlug: "pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    address: "Demo Address, Sangam Bridge Road, Pune, Maharashtra 411001",
    hours: "Mon–Fri, 10:00 AM – 5:30 PM",
    phone: "+91 20 0000 0000 (demo)",
    email: "demo.mh12@example.com",
    services: common,
    status: "active",
  },
  {
    code: "MH14",
    name: "Pimpri-Chinchwad RTO",
    city: "Pimpri-Chinchwad",
    citySlug: "pimpri-chinchwad",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    address: "Demo Address, Mumbai-Pune Highway, Pimpri-Chinchwad, Maharashtra 411018",
    hours: "Mon–Fri, 10:00 AM – 5:30 PM",
    phone: "+91 20 0000 0001 (demo)",
    email: "demo.mh14@example.com",
    services: common,
    status: "active",
  },
  {
    code: "MH01",
    name: "Mumbai Central RTO",
    city: "Mumbai",
    citySlug: "mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    address: "Demo Address, Tardeo, Mumbai, Maharashtra 400034",
    hours: "Mon–Fri, 10:00 AM – 5:00 PM",
    phone: "+91 22 0000 0002 (demo)",
    email: "demo.mh01@example.com",
    services: common,
    status: "active",
  },
  {
    code: "MH02",
    name: "Mumbai West RTO",
    city: "Mumbai",
    citySlug: "mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    address: "Demo Address, Andheri West, Mumbai, Maharashtra 400058",
    hours: "Mon–Fri, 10:00 AM – 5:00 PM",
    phone: "+91 22 0000 0003 (demo)",
    email: "demo.mh02@example.com",
    services: common,
    status: "limited",
  },
  {
    code: "MH04",
    name: "Thane RTO",
    city: "Thane",
    citySlug: "thane",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    address: "Demo Address, Wagle Estate, Thane, Maharashtra 400604",
    hours: "Mon–Fri, 10:00 AM – 5:30 PM",
    phone: "+91 22 0000 0004 (demo)",
    email: "demo.mh04@example.com",
    services: common,
    status: "active",
  },
  {
    code: "KA01",
    name: "Bengaluru Central RTO",
    city: "Bengaluru",
    citySlug: "bengaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    address: "Demo Address, Koramangala, Bengaluru, Karnataka 560034",
    hours: "Mon–Fri, 10:00 AM – 5:30 PM",
    phone: "+91 80 0000 0005 (demo)",
    email: "demo.ka01@example.com",
    services: common,
    status: "active",
  },
  {
    code: "KA05",
    name: "Jayanagar RTO",
    city: "Bengaluru",
    citySlug: "bengaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    address: "Demo Address, Jayanagar, Bengaluru, Karnataka 560041",
    hours: "Mon–Fri, 10:00 AM – 5:30 PM",
    phone: "+91 80 0000 0006 (demo)",
    email: "demo.ka05@example.com",
    services: common,
    status: "active",
  },
  {
    code: "GJ01",
    name: "Ahmedabad RTO",
    city: "Ahmedabad",
    citySlug: "ahmedabad",
    state: "Gujarat",
    stateSlug: "gujarat",
    address: "Demo Address, Subhash Bridge, Ahmedabad, Gujarat 380027",
    hours: "Mon–Fri, 10:30 AM – 5:30 PM",
    phone: "+91 79 0000 0007 (demo)",
    email: "demo.gj01@example.com",
    services: common,
    status: "active",
  },
  {
    code: "GJ05",
    name: "Surat RTO",
    city: "Surat",
    citySlug: "surat",
    state: "Gujarat",
    stateSlug: "gujarat",
    address: "Demo Address, Ring Road, Surat, Gujarat 395002",
    hours: "Mon–Fri, 10:30 AM – 5:30 PM",
    phone: "+91 261 000 0008 (demo)",
    email: "demo.gj05@example.com",
    services: common,
    status: "limited",
  },
  {
    code: "DL01",
    name: "Delhi Central RTO",
    city: "New Delhi",
    citySlug: "new-delhi",
    state: "Delhi",
    stateSlug: "delhi",
    address: "Demo Address, Rajpura Road, New Delhi 110007",
    hours: "Mon–Fri, 09:30 AM – 5:00 PM",
    phone: "+91 11 0000 0009 (demo)",
    email: "demo.dl01@example.com",
    services: common,
    status: "active",
  },
];

export const rtosByState = (stateSlug: string) => mockRtos.filter((r) => r.stateSlug === stateSlug);

export const citiesByState = (stateSlug: string) => {
  const map = new Map<string, { slug: string; name: string; count: number }>();
  rtosByState(stateSlug).forEach((r) => {
    const e = map.get(r.citySlug);
    if (e) e.count += 1;
    else map.set(r.citySlug, { slug: r.citySlug, name: r.city, count: 1 });
  });
  return [...map.values()];
};

export const getRto = (code: string) => mockRtos.find((r) => r.code.toLowerCase() === code.toLowerCase());
