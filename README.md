This is an Next.js 13 application using app directory.

- Authentication supported: credential authentication, Google oAuth, Github oAuth, and many more (check next.js docs).
- Prisma + MongoDB setup.
- Tailwind for easy understanding of code.
- Protected routes.
- Toast notifications.

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
