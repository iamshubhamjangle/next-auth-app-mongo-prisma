## [View the application](https://nextauth-iamshubhamjangle.vercel.app/)

<hr>

## Intro

This is an Next.js 13 application using app directory.

- Authentication supported: credential authentication, Google oAuth, Github oAuth, and many more (check next.js docs).
- Prisma + MongoDB setup.
- Tailwind for easy understanding of code.
- Protected routes.
- Toast notifications.

## Contributions

Are Welcomed!
I am trying to build a base template for Next 13, MongoDB, Primsa, NextAuth. Which can help getting up with new project quick and easy.

1. Create a branch
2. Raise Pull Request with brief description to merge to master.

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

### Client Component Functions

```js
"use client";

import { useRouter } from "next/navigation"; // Programmatically change routes inside Client Components.
import { usePathname } from "next/navigation"; // Read path name like '/blog/hello?v=2' => '/blog/hello'
import { useParams } from "next/navigation"; // Read dynamic params like /shop/[tag]/[item]
import { useSearchParams } from "next/navigation"; // Read query params `/dashboard?search=my-project`
```

### Server Component Functions

```js
// Note: redirect() does not require you to use return redirect() due to using the TypeScript never type.
import { redirect } from "next/navigation"; // redirect('/login'); OR redirect('notFound');
```
