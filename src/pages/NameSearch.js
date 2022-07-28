import React, { useEffect, useState } from "react";
import { Card, Row, Col, Input } from "antd";

// import { useGetCharactersQuery } from "../services/CharacterApi";

const NameSearch = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("thor");
  const [count, setCount] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&orderBy=-modified&limit=100&ts=1&apikey=47c728e2933b98677639c9ef3bcbed3c&hash=e926e192b0df9aaff901a57cb66e154a`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.total);
        setCount(data.data.count);
        const Results = data.data.results;
        console.log(Results);

        setCharacters(Results);

        // setLoading(true);
        const filteredData = Results?.filter((character) =>
          character?.name?.toLowerCase()?.includes(searchTerm)
        );
        setCharacters(filteredData);
        console.log(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchTerm]);

  if (isLoading)
    return (
      <h1
        className="display-5 text-warning d-flex align-items-center justify-content-center text-center"
        style={{ height: "80vh" }}
      >
        ...Search Marvel's Database
      </h1>
    );

  return (
    <div className="container text-white" style={{ height: "auto" }}>
      <div className="d-flex justify-content-center text-white my-2 py-2">
        <input
          placeholder="Find A Character"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value?.toLowerCase())}

          // onChange={}
        />
      </div>
      <div className="text-muted text-center h5">Find {searchTerm}</div>
      <div className="text-muted text-center h3">
        Total Characters Found : {count}
      </div>
      <div className="row">
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
                      <h4 className="card-title text-muted">Description </h4>
                      <p className="card-text text-white">{c.description}</p>
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

export default NameSearch;