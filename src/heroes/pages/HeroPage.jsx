import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  // hook react-router-dom
  const { id } = useParams();

  // cada vez que hay un cambio de state
  // el componente vuevle y llama esta f(x)
  // por ende es mejor memorizar esta f(x)
  // useMemo: memorizar valores
  // useCallback: memorizar funciones

  // cuando el id cambie se dispara la f(x), si el valor no cambia no se llama a la f(x)
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  // verificar si el heroe existe
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // navegar a la ruta anterior
  const onReturn = () => navigate(-1);

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft ">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="imt-thumbnail w-75"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ol className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ol>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onReturn}>
          back...
        </button>
      </div>
    </div>
  );
};
