import React, { useMemo } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formData, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formData;
  const resultHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h3>Buscar</h3>
          <hr />
          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del personaje..."
                autoComplete="off"
                name="searchText"
                value={searchText}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-primary mt-3">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div className="col-7">
          <h3>Resultados</h3>
          <hr />
          {q === "" ? (
            <p className="alert alert-info">Ningun heroe a buscar!!</p>
          ) : (
            resultHeroes.length === 0 && (
              <p className="alert alert-danger">
                Sin coincidencias para <strong>{q}</strong>
              </p>
            )
          )}
          {resultHeroes.map((heroes) => (
            <HeroCard key={heroes.id} {...heroes} />
          ))}
        </div>
      </div>
    </div>
  );
};
