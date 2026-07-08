import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 max-w-sm text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgb(99_102_241_/_0.6)] transition-transform hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </div>
  );
}
