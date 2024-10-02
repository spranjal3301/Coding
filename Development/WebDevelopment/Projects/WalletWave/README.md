# Turborepo Tailwind CSS starter

This is starter Turborepo-BoilerPlate-Code.

## Using this example

Run the following command:

```sh
git clone https://github.com/spranjal3301/Turborepo-Boilerplate-Code
```

```sh
yarn install
```

```sh
yarn run dev
```

# Online Wallet Project

This project is a Venmo-like online wallet system that allows users to add money from their bank accounts, send and receive money online between users and merchants, and track transactions.

## Features

- Add money from bank account to wallet
- Send & Receive Money Online (user-to-user and user-to-merchant)
- Transaction tracking and history
- Multi-application architecture using Turborepo
- PostgreSQL database with Prisma ORM
- Sentry for application monitoring and error tracking

## Applications

### User App (Next.js & TypeScript)

- Login/Signup using NextAuth (OAuth with Google & GitHub)
- Bank to Wallet Transfer (add money)
- User to User Transfer
- User to Merchant transfer
- Recent Transaction or History

### Dummy Bank API (Express.js)

- Transfer balance from user account to wallet account
- Notify webhook for successful money addition

### Webhook (Express.js)

- Update database balance when Bank API request is successful

### Merchant App (Next.js & TypeScript)

- Login/Signup
- Recent Transaction or History
- Profile page (view details + update details)
- Withdraw money to bank

## Project Structure

This project uses Turborepo to manage multiple applications in a monorepo framework.

### Apps and Packages

- `user-app`: Next.js app with Tailwind CSS for user interface
- `merchant-app`: Next.js app with Tailwind CSS for merchant interface
- `ui`: Shared React component library with Tailwind CSS
- `packages/store`: Recoil for state management
- `packages/database`: Prisma for database ORM
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations

All packages and apps are written in TypeScript.

## Utilities

This project is set up with the following tools:

- Yarn for package management
- Tailwind CSS for styles
- TypeScript for static type checking
- ESLint for code linting
- Prettier for code formatting
- Recoil for state management in `packages/store`
- Prisma for database management in `packages/database`

## Getting Started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Set up your PostgreSQL database and update the connection string in `packages/database/.env`
4. Set up Sentry and add your DSN to the relevant configuration files
5. Run the development server: `yarn dev`

