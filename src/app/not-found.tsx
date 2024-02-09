import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh]">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <Link
          className="inline-flex h-9 items-center rounded-md border  border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
