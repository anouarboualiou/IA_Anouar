import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./";
import RootLayout from "./routes/RootLayout";
import CountryDetails from "./routes/CountryDetails";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/region/europe"
      );

      if (!res.ok) {
        throw new Error("Error cargando países");
      }

      return res.json();
    },
    children: [
      {
        path: "country/:countryName",
        element: <CountryDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
