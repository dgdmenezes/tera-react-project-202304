import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Loading from "../atoms/Loading";

export default function Home(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setisLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        defaultValue={props.currentUser}
        onChange={(event) => props.setCurrenUser(event.target.value)}
        className="home__select-users"
      >
        <option value="">Selecione um usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn)) // ordem alfabética
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!props.currentUser && ( //condicional para aparecer o botao de navegação quando algum item for selecionado
        <button
          onClick={() => navigate(`/users/${props.currentUser}`)}
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}
