import React, { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";

const Thanos = () => {
  const [characters, setCharacters] = useState([]);

  const [count, setCount] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=thanos&orderBy=-modified&limit=100&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        console.log(data.data.total);
        setCharacters(data.data.results);
        // setGlobal(data.data.total);
        setCount(data.data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (isLoading)
    return (
      <h1
        className="display-1 text-warning d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        ...Thanos Loading
      </h1>
    );

  return (
    <div className="container bg-dark text-white">
      <div className="container-fluid h1 py-3 mt-4 bg-black border text-center text-uppercase">
        Thanos Collection
      </div>

      <div className="container mt-2 py-3 bg-dark ">
        <h4 className="text-muted">
          Total Displayed <b className="mx-2 text-warning">{count}</b>
        </h4>
      </div>

      <div className=" row">
        {characters.map((c) => {
          return (
            <div key={c.id} className="col-lg-4 col-md-6 col-xs-6">
              <div className="border border-warning card my-3 bg-dark">
                <div className="p-2 my-3">
                  <h4 className="card-header text-center text-warning py-3">
                    {c.name}
                  </h4>
                  <img
                    src={c.thumbnail.path + "/standard_fantastic.jpg"}
                    className="card-img-top"
                    alt="...img"
                  />
                  <div className="card-body my-2">
                    <span className="border-bottom border-white">
                      <p className="card-text ">
                        {HTMLReactParser(c.description)}
                      </p>
                    </span>
                  </div>

                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-dark text-muted">
                      ID : {c.id}
                    </li>

                    <li className="list-group-item bg-dark text-white">
                      Modified : {c.modified}
                    </li>

                    <li className="list-group-item bg-dark text-white">
                      Stories : {c.stories["available"]}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      Series : {c.series["available"]}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      Comics : {c.comics["available"]}
                    </li>

                    <li className="list-group-item bg-dark text-white">
                      Events : {c.events["available"]}
                    </li>
                    <li className="list-group-item bg-dark text-warning text-capitalize d-flex justify-content-between pt-4">
                      <a
                        href={c.urls[1].url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-warning text-capitalize"
                      >
                        {c.urls[1].type}
                      </a>

                      <a
                        href={c.urls[0].url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-warning"
                      >
                        {c.urls[0].type}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Thanos;

// data.data.results[0];
