import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Donut } from "../models/Donut";
import { getSingleDonut } from "../services/donutService";
import "./Details.css";

import { Link } from "react-router-dom";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [donut, setDonut] = useState<Donut | null>(null);

  useEffect(() => {
    getSingleDonut(id!).then((res) => setDonut(res));
  }, [id]);

  return (
    <div className="Details">
      <section>
        <p>{donut?.name}</p>
        <div className="donutImage">
          <img src={donut?.photo} alt={donut?.name} width={200} height={200} />
        </div>
        <p>Details:</p>
        <ul>
          <li>Calories : {donut?.calories}</li>
          {donut?.extras.map((extra) => (
            <li key={extra}>{extra}</li>
          ))}
        </ul>
      </section>

      <Link to="/">Go back</Link>
    </div>
  );
};

export default Details;
