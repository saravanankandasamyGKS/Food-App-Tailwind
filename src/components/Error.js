import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 p-6">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg font-semibold text-red-700 mb-2">
        Something went wrong.
      </p>
      <p className="text-red-600 text-center max-w-md">
        {error.statusText || error.message || "Unknown error"}
      </p>
      <button
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
};

export default Error;
