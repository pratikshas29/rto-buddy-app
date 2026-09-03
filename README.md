# RTO Assist Pro

LOVABLE FRONTEND-ONLY PROMPT — RTO SERVICES PLATFORM

Build a complete, polished, responsive RTO Services website and portal UI for India.

VERY IMPORTANT

This is a FRONTEND-ONLY DEMO/PROTOTYPE.

DO NOT BUILD:

Backend

PostgreSQL

Supabase database

APIs

NestJS

Node.js backend

Real authentication

Real OTP

Real payment gateway

Real document storage

Real AWS/S3 integration

Real email/SMS/WhatsApp

Real OCR

Real AI

Real government integrations

Use dummy/mock data only.

All functionality should work visually using frontend state, mock data and localStorage where useful.

The purpose is to create a realistic clickable product prototype that looks like a production RTO platform.

TECHNOLOGY

Use:

React

TypeScript

Tailwind CSS

shadcn/ui

Lucide icons

React Router if needed

Use clean reusable components.

Create mock data files such as:

mockServices.ts

mockRtos.ts

mockVehicles.ts

mockProviders.ts

mockRequests.ts

mockDocuments.ts

mockPayments.ts

mockFaqs.ts

mockBlogPosts.ts

mockUsers.ts

Keep mock data separate from UI components.

BRAND / PRODUCT

Create a professional Indian RTO assistance platform.

Main positioning:

Don’t Know What RTO Work You Need?

Supporting text:

Tell us your vehicle situation. We'll help you understand the process, documents and estimated charges.

Primary CTA:

Find My RTO Work

Secondary CTA:

Get RTO Assistance

Important:

Clearly communicate that this is an independent RTO assistance/information platform, not a government website.

Do not use official government logos or misleading government branding.

DESIGN STYLE

Make the website look premium and trustworthy.

Style:

Modern

Clean

Professional

Minimal

Mobile-first

GovTech/SaaS style

Excellent typography

Rounded cards

Subtle shadows

Clean spacing

Strong visual hierarchy

Professional blue/indigo primary color

Neutral backgrounds

Green success indicators

Amber warning indicators

Red error indicators

Use Lucide icons.

Avoid excessive gradients, animations and decorative graphics.

GLOBAL HEADER

Desktop navigation:

Logo

RTO Services
Vehicle Services
Driving Licence
RTO Calculator
RTO Offices
FAQ

Right side:

Login
Get RTO Assistance

Make the header sticky.

Mobile:

Logo
Menu icon

Open a mobile navigation drawer.

HOMEPAGE

Create a complete homepage.

Hero Section

Large headline:

Don’t Know What RTO Work You Need?

Description:

Tell us your vehicle situation. We'll help you understand the process, required documents and estimated charges.

Buttons:

Find My RTO Work

Browse RTO Services

Add a prominent search box:

🔍 Search “Vehicle Transfer”, “Green Tax”, “RC Lost”...

Search should work with mock service data.

SERVICE CATEGORIES

Create large modern service cards.

Vehicle Transfer

🚗

RC Services

📄

Road Tax & Green Tax

💰

Driving Licence

🪪

Hypothecation / Loan

🏦

NOC

📍

Vehicle Scrapping

♻️

Commercial Vehicle

🚛

Each card should be clickable.

POPULAR SERVICES

Show mock services:

Vehicle Ownership Transfer

Duplicate RC

Address Change

NOC

Hypothecation Removal

Green Tax

Road Tax

RC Renewal

Re-registration

Vehicle Scrapping

Use realistic dummy descriptions.

SERVICE DIRECTORY

Route:

/rto-services

Create:

Search

Category filters

Vehicle type filter

Popular services

Service cards

Each service card:

Service name
Short description
Documents required
Estimated process steps
Estimated cost
View Service button

Use dummy values.

Clearly label costs as:

Estimated

SERVICE DETAIL PAGE

Example route:

/rto-services/vehicle-transfer

Create a reusable service detail layout.

Header

Vehicle Ownership Transfer

Short description.

Buttons:

Start Transfer

Get Assistance

What is this?

Explain the service.

Who needs this?

Example:

Buyer of a second-hand vehicle

Seller transferring ownership

Applicable vehicle owners

Documents Required

Create document checklist:

✓ RC
✓ Insurance
✓ PUC
✓ Identity Proof
✓ Address Proof
✓ Applicable Forms

Each document can have a tooltip/details interaction.

Process

Create a visual stepper:

Check eligibility

Prepare documents

Submit application

Pay applicable charges

RTO processing

Receive updated RC

Estimated Cost

Government Charges
₹500

Applicable Tax
₹1,200

Assistance Fee
₹499

Platform Fee
₹49

Total
₹2,248

These are dummy demo values only.

Show:

Estimated charges for demonstration purposes. Actual charges may vary.

SMART FIND MY RTO WORK WIZARD

This should be one of the best UI experiences on the website.

Route:

/find-my-rto-work

Create a multi-step interactive wizard.

STEP 1

Question:

What vehicle do you have?

Cards:

🚲 Two Wheeler

🚗 Four Wheeler

🚛 Commercial Vehicle

Clicking a card selects it.

STEP 2

Question:

What happened?

Options:

I bought a used vehicle

I sold my vehicle

RC is lost

I moved to another city/state

Vehicle loan is completed

Tax needs to be paid

Vehicle is old

I need NOC

Other

STEP 3

Show dynamic mock questions depending on previous answers.

For example:

State
City
RTO
Vehicle registration number
Vehicle type
Loan status

Use frontend state only.

WIZARD RESULT

After completing the wizard, show:

Your Recommended RTO Service

Vehicle Ownership Transfer

You need:

8 documents

Estimated government charges:

₹1,700

Expected process:

6 steps

Show:

Recommended service

Why this service was recommended

Documents

Process

Estimated charges

Buttons:

Continue

View Service

Get Assistance

Allow:

Change Answers

Start Again

RTO FINDER

Route:

/rto

Create a beautiful RTO directory.

Selection:

State → City → RTO

Use dummy data.

Example:

Maharashtra
↓
Pune
↓
MH12

RTO page:

/rto/maharashtra/pune/mh12

Display:

MH12 Pune RTO

RTO name
Address
Working hours
Contact
Services
Official resources
Map placeholder

Use a map placeholder card instead of real map integration.

RTO DIRECTORY PAGE

Show:

Search RTO

Search by code

Search by city

State filter

Example dummy RTOs:

MH12 Pune
MH14 Pimpri-Chinchwad
MH01 Mumbai Central
MH02 Mumbai West
MH04 Thane

Clearly mark all as demo/mock information where appropriate.

CALCULATORS

Route:

/calculators

Cards:

Road Tax Calculator
Green Tax Calculator
Vehicle Transfer Calculator
Re-registration Calculator

VEHICLE TRANSFER CALCULATOR

Route:

/calculators/vehicle-transfer

Inputs:

State
RTO
Vehicle type
Private/Commercial
Vehicle value
Registration year

Result card:

Government Fee
₹500

Applicable Tax
₹1,200

Other Charges
₹100

Estimated Total
₹1,800

Use simple frontend calculations or predefined mock results.

DO NOT claim these are real government calculations.

GREEN TAX CALCULATOR

Create an attractive calculator UI.

Inputs:

Vehicle type
Registration year
Fuel type
State

Output:

Estimated Green Tax

Use dummy frontend calculation.

Clearly label:

Demo Estimate

ROAD TAX CALCULATOR

Create similar frontend-only calculator.

Use mock calculation rules.

LOGIN PAGE

Create a realistic login UI.

DO NOT implement real authentication.

Fields:

Mobile / Email
Password

Button:

Login

Also:

Continue with OTP

For demo purposes, clicking Login should take the user to the customer dashboard.

Show:

Demo login — no real authentication is connected.

CUSTOMER DASHBOARD

Route:

/dashboard

Create a polished dashboard.

Header:

Welcome back, Asif

Use mock user data.

Stats:

My Vehicles
2

Active RTO Work
1

Pending Documents
2

Upcoming Renewals
3

CUSTOMER SIDEBAR

Dashboard

My Vehicles

RTO Work

Documents

Payments

Notifications

Profile

Support

Logout

Use frontend navigation only.

MY VEHICLES

Route:

/dashboard/vehicles

Vehicle cards.

Example:

MH12AB1234

Hyundai Creta

Document status:

RC ✓
Insurance ⚠
PUC ✓
Tax ✓

Buttons:

View Vehicle
Start RTO Work
Documents

Use mock vehicle data.

VEHICLE DETAIL PAGE

Show:

Registration Number
MH12AB1234

Vehicle
Hyundai Creta

Vehicle Type
Four Wheeler

Fuel
Petrol

Registration Date
15 Mar 2021

RTO
Pune — MH12

Document health:

RC — Valid
Insurance — Expiring Soon
PUC — Valid
Tax — Paid

RTO SERVICE REQUEST

Route:

/dashboard/requests

Example:

RTO-20260903-00125

Ownership Transfer

Vehicle:
MH12AB1234

RTO:
Pune

Create a beautiful status timeline:

✓ Request Created

✓ Documents Uploaded

✓ Documents Verified

✓ Payment Completed

● Application Submitted

○ RTO Processing

○ Completed

Use mock status data.

DOCUMENT MANAGEMENT

Route:

/dashboard/documents

Show document cards:

RC
Insurance
PUC
Aadhaar / ID
Address Proof
NOC
Bank Documents

Statuses:

Uploaded
Under Review
Approved
Re-upload Required

Add an Upload Document button.

For frontend demo:

When clicking upload, show a modal with a fake upload UI.

Do not actually upload files to a server.

You can use local browser state/localStorage to simulate uploaded documents.

ASSISTANCE MARKETPLACE

Route:

/providers

Create provider cards.

Example:

Provider A

⭐ 4.8

Pune

Vehicle Transfer

₹499 assistance

Select

Provider B

⭐ 4.7

Pune

Vehicle Transfer

₹599 assistance

Select

These are dummy providers.

Do not represent them as real businesses.

PROVIDER DASHBOARD

Route:

/provider

Create a separate provider portal.

Stats:

New Requests
12

Active Requests
18

Documents Pending
5

Completed
94

Earnings
₹48,500

All data is mock data.

PROVIDER REQUEST

Show:

Customer
Vehicle
RTO
Service
Documents
Payment Status

Actions:

Accept
Reject
Request Document
Update Status
Complete

Buttons should work visually using frontend state.

ADMIN DASHBOARD

Route:

/admin

Create a professional admin interface.

Stats:

Users
25,430

Vehicles
31,200

Requests
4,820

Active Providers
180

Completed
3,910

Revenue
₹24,80,000

Pending
₹4,20,000

All values are dummy/demo data.

ADMIN SIDEBAR

Dashboard

Users

Vehicles

RTOs

Services

Documents

Questions

Rules

Fees

Providers

Service Requests

Payments

Refunds

Complaints

Reviews

FAQs

Blog

SEO

Notifications

Settings

ADMIN SERVICES

Create a service management table.

Columns:

Service
Category
Status
Documents
Updated
Actions

Actions:

View
Edit
Duplicate
Disable

Use mock data.

ADMIN RTO MANAGEMENT

Create RTO management table.

Columns:

RTO Code
RTO Name
City
State
Status
Actions

Add RTO button should open a frontend modal.

No backend persistence required.

ADMIN RULES / FEES UI

Create a visually strong interface for managing mock rules.

Show:

Rule Name
Service
State
Vehicle Type
Condition
Amount
Status

Example:

Vehicle Transfer Fee
Maharashtra
Private
Demo rule
₹500
Active

Allow frontend editing using local state.

PAYMENT UI

Create:

/payment

Payment summary:

Government Charges
₹1,700

Assistance Fee
₹499

Platform Fee
₹49

Total
₹2,248

Button:

Pay Now

Clicking Pay Now should show a simulated payment processing animation/state.

Then show:

✓ Payment Successful

Transaction ID:

TXN-DEMO-98231

Download Receipt

Important:

This is a simulated payment only.

Do not integrate Razorpay, Cashfree or any real payment gateway.

RECEIPT PAGE

Create a professional receipt.

Show:

RTO Service Platform

Payment Receipt

Transaction ID
TXN-DEMO-98231

Service
Vehicle Ownership Transfer

Vehicle
MH12AB1234

Government Charges
₹1,700

Assistance
₹499

Platform
₹49

Total
₹2,248

Status
PAID — DEMO

Add:

Download Receipt

Use frontend/browser print functionality if useful.

FAQ

Route:

/faq

Create searchable FAQ.

Categories:

Vehicle Transfer
RC
Tax
NOC
Driving Licence
General

Use accordion components.

BLOG

Route:

/blog

Create a blog listing using dummy articles.

Example:

“Complete Guide to Vehicle Ownership Transfer”

“Documents Required for RC Transfer”

“What is Green Tax?”

“Understanding NOC for Vehicle Transfer”

Create article detail pages.

Use dummy content.

SEO-FRIENDLY FRONTEND ROUTES

Create these routes:

/

/rto-services

/rto-services/vehicle-transfer

/rto-services/green-tax

/rto-services/duplicate-rc

/rto-services/noc

/rto/maharashtra

/rto/maharashtra/pune

/rto/maharashtra/pune/mh12

/calculators

/calculators/road-tax

/calculators/green-tax

/calculators/vehicle-transfer

/driving-licence

/vehicle-services

/commercial-vehicle

/faq

/blog

/login

/dashboard

/dashboard/vehicles

/dashboard/requests

/dashboard/documents

/dashboard/payments

/providers

/provider

/admin

FOOTER

Create a complete footer.

RTO Services

Vehicle Transfer
Duplicate RC
NOC
Green Tax
Road Tax
Hypothecation Removal
Vehicle Scrapping

RTO Directory

Maharashtra
Pune

Calculators

Road Tax
Green Tax
Vehicle Transfer
Re-registration

Resources

FAQ
Blog
Official Resources

Company

About
Contact
Privacy Policy
Terms
Disclaimer

Footer disclaimer:

“This is an independent information and assistance platform and is not a government website or government department.”

MOCK DATA

Create realistic but clearly fictional demo data.

Example user:

Name:
Asif

Vehicles:

MH12AB1234 — Hyundai Creta
MH12XY5678 — Honda Activa

Requests:

RTO-20260903-00125
Ownership Transfer
In Progress

Documents:

RC — Approved
Insurance — Re-upload Required
PUC — Approved
Address Proof — Under Review

Providers:

Provider A
Provider B
Provider C

Use mock data consistently throughout the application.

INTERACTIONS

Everything should feel clickable.

Implement frontend interactions for:

Navigation

Search

Filters

Tabs

Dropdowns

Modals

Forms

Wizard steps

Calculator inputs

Provider selection

Document upload simulation

Status updates

Payment simulation

Notifications

Sidebar

Mobile navigation

FAQ accordion

Use React state/localStorage.

No backend is required.

RESPONSIVE REQUIREMENTS

The website must work properly on:

375px mobile

390px mobile

768px tablet

1024px laptop

1440px desktop

Pay special attention to mobile.

Dashboard tables should become cards or horizontally scrollable where appropriate.

EMPTY / LOADING / ERROR STATES

Create polished:

Loading skeletons

Empty states

Error states

Success states

Examples:

“No vehicles added yet”

“No active RTO requests”

“No documents uploaded”

“No notifications”

FINAL REQUIREMENT

Build this as a high-fidelity frontend prototype.

The user should be able to navigate through the entire product:

Homepage
→ Find My RTO Work
→ Recommended Service
→ Service Details
→ Get Assistance
→ Select Provider
→ Payment
→ Customer Dashboard
→ Documents
→ Service Tracking

Also allow:

Homepage
→ RTO Finder
→ RTO Details

Homepage
→ Calculator
→ Calculator Result

Homepage
→ Login
→ Customer Dashboard

Provider Login
→ Provider Dashboard

Admin
→ Admin Dashboard

Everything should use frontend dummy data.

Do not create a backend.

Do not connect a database.

Do not use Supabase.

Do not implement real authentication.

Do not implement real payments.

Do not implement real file uploads.

Do not call external APIs.

The priority is:

Beautiful UI + complete navigation + realistic interactions + reusable components + responsive design + realistic mock data.

Make the final application look like a real launch-ready product prototype rather than a collection of basic demo screens.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rto-buddy-app.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b8c85d95-f88e-40f1-9df5-b128a1f5e32e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
