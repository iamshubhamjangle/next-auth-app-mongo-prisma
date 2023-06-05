This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies

```
npm i
```

Edit the .env file

```
DATABASE_URL="mongodb+srv://username:password@cluster0.abcdefg.mongodb.net/test"
NEXTAUTH_SECRET="anyrandomvalue"

GITHUB_ID="..."
GITHUB_SECRET="..."

GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

Push the prisma.schema to Mongo Atlas

```
npx prisma db push
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
