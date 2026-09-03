export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  body: string[];
}

export const mockBlogPosts: BlogPost[] = [
  {
    slug: "complete-guide-to-vehicle-ownership-transfer",
    title: "Complete Guide to Vehicle Ownership Transfer",
    excerpt:
      "Everything a buyer and a seller should check before and after a second-hand vehicle changes hands.",
    category: "Vehicle Transfer",
    author: "Editorial Desk",
    date: "28 Aug 2026",
    readTime: "8 min read",
    body: [
      "An ownership transfer is the single most important step after buying or selling a used vehicle. Until the RTO records the new owner, the previous owner remains answerable for challans, accidents and tax notices linked to the registration number.",
      "Start by confirming that the vehicle has no active hypothecation. If a loan entry still appears on the RC, the financier's no-dues letter and termination form are needed before the transfer can proceed.",
      "Next, assemble the paperwork: the original RC, an active insurance policy, a valid PUC certificate, identity and address proof for the buyer, and the signed transfer forms. Photographs and a delivery note round out a typical file.",
      "Once submitted, the RTO verifies the documents, collects applicable charges, and issues an updated RC in the buyer's name. In this prototype the whole journey is simulated with demo data so you can see each stage clearly.",
      "A practical tip: the buyer should also update the insurance policy holder name. A transfer of registration alone does not move the policy, and claims can be rejected if the names do not match.",
    ],
  },
  {
    slug: "documents-required-for-rc-transfer",
    title: "Documents Required for RC Transfer",
    excerpt: "A printable checklist of every paper you should carry, and the common reasons files get rejected.",
    category: "RC",
    author: "Editorial Desk",
    date: "21 Aug 2026",
    readTime: "6 min read",
    body: [
      "Most RC transfer rejections come down to small, avoidable gaps: a blurred scan, an expired PUC, or a signature that does not match the RC.",
      "The core set is predictable — RC, insurance, PUC, identity proof, address proof and the applicable forms. Add a police intimation if the RC card is missing, and a no-dues letter if a loan was involved.",
      "Scan everything at a readable resolution and keep file sizes modest. Grey, low-contrast phone photos are the top cause of re-upload requests in our demo dataset.",
      "Finally, keep a copy of every submission. If the RTO raises a query weeks later, having the exact file you submitted saves a second trip.",
    ],
  },
  {
    slug: "what-is-green-tax",
    title: "What is Green Tax?",
    excerpt: "Why older vehicles pay an extra charge, how it is calculated, and when it is collected.",
    category: "Tax",
    author: "Editorial Desk",
    date: "12 Aug 2026",
    readTime: "5 min read",
    body: [
      "Green tax is an environment compensation charge levied on vehicles that cross a defined age threshold — commonly eight years for commercial vehicles and fifteen for private ones.",
      "The amount depends on the state, the vehicle category, and often the fuel type. Diesel vehicles are usually charged more than petrol, and CNG or electric vehicles are frequently exempt.",
      "It is generally collected alongside fitness renewal or re-registration rather than as a standalone visit, which is why many owners only encounter it when their registration is due for renewal.",
      "Our calculator gives a demo estimate so you can plan a rough budget. Treat it as an illustration, not an official quotation.",
    ],
  },
  {
    slug: "understanding-noc-for-vehicle-transfer",
    title: "Understanding NOC for Vehicle Transfer",
    excerpt: "When an NOC is mandatory, what it certifies, and how it fits into inter-state re-registration.",
    category: "NOC",
    author: "Editorial Desk",
    date: "04 Aug 2026",
    readTime: "7 min read",
    body: [
      "A No Objection Certificate is your current RTO confirming it has no objection to the vehicle moving out of its jurisdiction. It effectively certifies that dues, challans and hypothecation blocks are settled.",
      "You need it whenever the vehicle is permanently relocating to another RTO or state, and often when the buyer is registered under a different RTO.",
      "After the NOC is issued, the destination RTO handles re-registration and fresh road tax. Where applicable, a refund of the unused portion of the original state's tax can be claimed separately.",
      "Plan for time. NOC processing is one of the slower RTO workflows, and starting it early avoids a rushed re-registration deadline.",
    ],
  },
  {
    slug: "hypothecation-removal-after-loan-closure",
    title: "Hypothecation Removal After Loan Closure",
    excerpt: "Closing the loan is only half the job — here is how you get the lender's name off your RC.",
    category: "Hypothecation",
    author: "Editorial Desk",
    date: "26 Jul 2026",
    readTime: "5 min read",
    body: [
      "When your last EMI clears, the lender issues a no-objection letter and a termination form. Neither of these updates the RTO's records on its own.",
      "You submit them, along with the RC and insurance, so the RTO can strike the hypothecation entry and issue a clean RC.",
      "Do this promptly. A stale hypothecation entry blocks ownership transfer and can quietly reduce the resale value of an otherwise clean vehicle.",
    ],
  },
  {
    slug: "re-registering-your-vehicle-in-a-new-state",
    title: "Re-registering Your Vehicle in a New State",
    excerpt: "Moved cities? Here is the realistic sequence, the tax implications, and the timeline to expect.",
    category: "Re-registration",
    author: "Editorial Desk",
    date: "15 Jul 2026",
    readTime: "9 min read",
    body: [
      "If your vehicle stays in a new state beyond twelve months, it must be re-registered there. The sequence is NOC first, then re-registration and fresh road tax in the new state.",
      "Road tax in the destination state is calculated on the vehicle's depreciated value, so an older vehicle usually costs far less to re-register than a new one.",
      "Budget for a vehicle inspection, a new registration number, and a few weeks of processing. Our estimator shows an indicative total using demo rules.",
    ],
  },
];

export const getPost = (slug: string) => mockBlogPosts.find((p) => p.slug === slug);
