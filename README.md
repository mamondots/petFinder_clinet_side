### PetFinder App

This is a Pet Adoption Platform project that I am using TypeScript, Express.js and Object Relation Modeling (ORM) Prisma with PostgreSQL.

![HomePage Screenshot](https://i.ibb.co/fNC00MH/pet-app.png)

### Project Features

#### Admin
- **User Management:**
  - [x] Retrieve all users
  - Change user roles
  - Delete users
- **Pet Management:**
  - [x] Add a Pet
  - [x] Update Pet profile
  - [x] Update Adoption Request Status

#### User
- **Pet Maintenance:**
  - [x] Get Paginated and Filtered all Pets
  - [x] Submit Adoption Request
  - [x] Get Adoption Requests

- **User common features:**
  - [x] User Registration or Create a User
  - [x] Login a User
  - [x] Get User Information
  - [x] Update User Information

- **Project Setup:**
  - [x] Create a Node.js Express project.
  - [x] Use TypeScript for development.
- [x] Database Integration:
  - [x] Set up Prisma with PostgreSQL.
- [x] Data Models:
  - [x] Define Prisma Schema table for User, Pet, buyerManagement, Adoption Request.
  - [x] Implement data types and validations based on the provided structure.
  - [x] Implement user authentication, authorization, and user-related information.
- [x] Validation:
  - [x] Use Zod for enforcing data validation rules.
- [x] Error Handling:
  - [x] Handling Global Error Handler
  - [x] Handle better way to error for using AppError.
  - [x] Handling mongoose error and duplicate error.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#### frontend-deployed-url: https://pet-adoption-frontend-henna.vercel.app/
#### project_overview-url: https://drive.google.com/file/d/1aW1HimDua63aFMcRbdHdWiJL2zqnvdCv/view?usp=sharing