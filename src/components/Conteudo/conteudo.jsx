import React, { useState } from "react";
import ReposStarred from "../ReposStarred/reposStarred";

import axios from "axios"
import "./estilo.css"

function Conteudo({ nomeCompleto, avatar, id, seguidores, seguindo, repositorios, user }) {
  const [lista, setLista] = useState([]);

  const handleRepos = async () => {
    try {
      const resultRepos = await axios.get(`https://api.github.com/users/${user}/repos`)
      setLista(resultRepos)
    }
    catch {
      console.log("Não foi possível achar os repositórios")
    }
  }

  const handleStarred = async () => {
    try {
      const resultStarred = await axios.get(`https://api.github.com/users/${user}/starred`)
      setLista(resultStarred)
    }
    catch {
      console.log("Não foi possível achar os repositórios")
    }
  }

  return (
    <section className="conteudo">
      <div className="perfil">
        <div className="perfil_card">
          <img src={avatar} className="perfil_imagem" alt="imagem de perfil" />
          <h2 className="perfil_nome">{nomeCompleto}</h2>
          <p className="perfil_arroba">{id}</p>
          <ul>
            <li className="perfil_item">{seguidores} seguidores</li>
            <li className="perfil_item">{seguindo} seguindo</li>
            <li className="perfil_item">{repositorios} repositórios</li>
          </ul>
        </div>
        <div className="perfil_botoes">
          <button className="botao_repos" onClick={handleRepos}>Repositórios</button>
          <button className="botao_starred" onClick={handleStarred}>Starred</button>
        </div>
        <ReposStarred lista={lista} />
      </div>
    </section>
  )
}

export default Conteudo;