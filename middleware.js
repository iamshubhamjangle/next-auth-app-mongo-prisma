// Next Auth Middleware to have protected routes.
export { default } from "next-auth/middleware";
export const config = { matcher: ["/matcher"] };

/*
Helps to interrupt Request
|-- pages/
│   ├── auth/
│   │   ├── index.js
│   │   └── middlware.js(1)
│   |
│   |── index.js
|   |── middleware.js(2)
|__________________________

middleware.js(1) will only run on /auth pages
middleware.js(2) will run on all routes)
*/

import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log("Next middleware");
//   // const requestHeaders = new Headers(request.headers);
//   // requestHeaders.set("x-url", request.url);
//   // return NextResponse.next({
//   //   request: {
//   //     // Apply new request headers
//   //     headers: requestHeaders,
//   //   },
//   // });
// }
