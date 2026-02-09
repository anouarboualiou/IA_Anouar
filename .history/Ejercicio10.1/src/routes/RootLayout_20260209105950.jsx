import { Outlet, useLoaderData } from "react-router-dom";
import CountryList from "../components/CountryList";

export default function RootLayout() {
  const countries = useLoaderData();

  return (
    <div className="layout">
      <aside>
        <CountryList countries={countries} />
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
