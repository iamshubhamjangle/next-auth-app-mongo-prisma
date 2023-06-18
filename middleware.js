/**
 * What is Middleware
 */
// Middlewares helps to interrupt Request. They can be at root level or at each page route level.
// |-- pages/
// │   ├── auth/
// │   │   ├── index.js
// │   │   └── middlware.js(1)
// │   |
// │   |── index.js
// |   |── middleware.js(2)
// |__________________________

// middleware.js(1) will only run on /auth pages
// middleware.js(2) will run on all routes)

/**
 * SETTING UP HEADERS
 */
// export function middleware(request) {
//     console.log("Next middleware");
//     const requestHeaders = new Headers(request.headers);
//     requestHeaders.set("x-url", request.url);
//     return NextResponse.next({
//         request: {
//             // Apply new request headers
//             headers: requestHeaders,
//         },
//     });
// }

/**
 * MATCHER MIDDLEWARE
 * This protects routes for both server and client components
 * If matcher is not defined, By default all routes will be protected.
 * Learn more at https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
 */
export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/matcher-protected-client", "/matcher-protected-server"],
};

/**
 * USING NextResponse
 */
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export default async function middleware(req) {
//   const path = req.nextUrl.pathname;
//   console.log("middleware()::path:", path);

//   if (path === "/") {
//     return NextResponse.next();
//   }

//   const session = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   if (!session && path === "/matcher-protected-client") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   } else if (session && (path === "/login" || path === "/register")) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }
//   return NextResponse.next();
// }
