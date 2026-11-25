export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-600">
        LOADING PRODUCTS...
      </h1>

      <div className="">
          <div
            className="h-64 animate-pulse rounded-lg bg-gray-300"
          />
      </div>
    </div>
  );
}