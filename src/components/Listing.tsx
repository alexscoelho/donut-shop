import { useEffect, useState } from "react";
import { DonutsResponse } from "../models/DonutsResponse";
import { getDonuts } from "../services/donutService";
import "./Listing.css";

import { Link } from "react-router-dom";

const Listing = () => {
  const [donutsResponse, setDonutsResponse] = useState<DonutsResponse | null>(
    null
  );

  useEffect(() => {
    getDonuts().then((res) => setDonutsResponse(res));
  }, []);

  return (
    <div className="Listing">
      <header>
        <h1>Donut Shop</h1>
      </header>
      <main>
        <h3>Total Donuts: {donutsResponse?.count}</h3>
        <ul>
          {donutsResponse?.results.map((donut) => (
            <li key={donut.id}>
              <Link to={`/donut/${donut.id}`}>{donut.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Listing;
