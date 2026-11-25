export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-600">
        LOADING PRODUCTS...
      </h1>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-lg bg-gray-300"
          />
        ))}
      </div>
    </div>
  );
}