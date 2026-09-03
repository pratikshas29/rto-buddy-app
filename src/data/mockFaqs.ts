export interface Faq {
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  "Vehicle Transfer",
  "RC",
  "Tax",
  "NOC",
  "Driving Licence",
  "General",
];

export const mockFaqs: Faq[] = [
  {
    category: "Vehicle Transfer",
    question: "How long does an ownership transfer usually take?",
    answer:
      "In this demo we show an indicative window of 7–15 working days after documents are verified. Real timelines depend on the RTO workload and document accuracy.",
  },
  {
    category: "Vehicle Transfer",
    question: "Does the seller need to be present at the RTO?",
    answer:
      "Usually the seller's signed forms are sufficient, but some RTOs ask for physical verification. Our assistance partner tells you upfront what is needed for your case.",
  },
  {
    category: "Vehicle Transfer",
    question: "What if the vehicle still has a loan on it?",
    answer:
      "Hypothecation must be removed before the transfer, using a no-dues letter from the financier. You can start the Hypothecation Removal service first.",
  },
  {
    category: "RC",
    question: "I lost my RC card. What should I do first?",
    answer:
      "File a police intimation about the lost card, then apply for a Duplicate RC with your insurance, PUC and ID proof.",
  },
  {
    category: "RC",
    question: "Can I change my address in the RC online?",
    answer:
      "Many states support online submission followed by document verification. This prototype simulates the full flow with demo data.",
  },
  {
    category: "Tax",
    question: "What is green tax?",
    answer:
      "Green tax is an environment compensation charge on older vehicles, typically collected at fitness renewal or re-registration. Rates vary by state, vehicle age and fuel type.",
  },
  {
    category: "Tax",
    question: "Are the amounts shown on this platform official?",
    answer:
      "No. Every amount in this prototype is a demo estimate for illustration only. Actual charges are determined by the concerned RTO.",
  },
  {
    category: "NOC",
    question: "When do I need an NOC?",
    answer:
      "You need an NOC when the vehicle moves permanently to a different RTO or state, or when the buyer is registered under another RTO.",
  },
  {
    category: "NOC",
    question: "Can I get an NOC with pending challans?",
    answer:
      "Pending challans and tax dues typically must be cleared first. Our checklist flags these before you submit.",
  },
  {
    category: "Driving Licence",
    question: "When should I renew my driving licence?",
    answer:
      "You can usually apply up to a year before expiry. Renewal after age 40 often requires a medical fitness form.",
  },
  {
    category: "General",
    question: "Is this a government website?",
    answer:
      "No. This is an independent information and assistance platform prototype. It is not affiliated with any government department.",
  },
  {
    category: "General",
    question: "Is any real data or payment involved?",
    answer:
      "No. This build is a frontend prototype. Logins, uploads and payments are simulated in the browser only.",
  },
];
