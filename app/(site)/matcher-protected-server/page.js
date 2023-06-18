/**
 * Checkout @/middleware.js
 * matcher: ["/matcher-protected-client", "/matcher-protected-server"]
 * Protects the route.
 */

const Protected = async () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Server Protected Route</h1>
    </div>
  );
};

export default Protected;
