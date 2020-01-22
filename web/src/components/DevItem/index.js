import React from "react";
import "./styles.css";
import api from "./../../services/api";

function DevItem({ dev, x }) {
  function removeDev(data) {
    api.delete(`/devs/${data}`);
  }
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar Perfil No GitHub
      </a>
      <button onClick={() => removeDev(dev.github_username)}>
        Click Para Detelar
      </button>
    </li>
  );
}
export default DevItem;
