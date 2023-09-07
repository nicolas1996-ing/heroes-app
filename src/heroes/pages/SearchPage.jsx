import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  // useNavigate(): hook propio de react-router-dom
  const navigate = useNavigate();

  // obtener queryParams de la ruta
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search); // paquete npm
  const heroes = getHeroByName(q);
  const showSearchDiv = q == "";
  const showNoResultDiv = q != "" && heroes.length == 0;
  /*
    - el valor inicial tiene que ser congruente con los input.name de mi form
    - el useForm.hook siempre estará alerta a los cambios de estado de mi form 
    - los valores provenientes del hook se actualizan auto cuando hay cambios en el form 
    - conserver el valor del input gracias a la linea 13
  */
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (ev) => {
    // capturar los valores del form
    ev.preventDefault();


    // procesar valores del form
    // agregar un query param a la ruta actual
    // refrescar pagina actual
    navigate(`?q=${searchText.trim()}`);
  };

  return (
    <div>
      <h1>search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>search a hero</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            {/* 
              input controlado por el hook useForm 
                - input.value = useForm.searchText 
                - input.name = relaciona el input con useForm hook 
                - onChange = cada que ocurre un cambio en el input se dispara la f(x) onInputChange que pertenece al hook 
                - input.name input.value input.onChange estan relacionados con useForm.hook 
            */}
            <input
              type="text"
              placeholder="search a hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>results</h4>
          <hr />

          {showSearchDiv && (
            <div className="alert alert-primary">search heroes</div>
          )}

          {showNoResultDiv && (
            <div className="alert alert-danger">
              there is no result with {q}
            </div>
          )}

          {/* <HeroCard /> */}

          {heroes.length > 0 &&
            heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
        </div>
      </div>
    </div>
  );
};
