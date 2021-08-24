import React, { useState } from "react";
import Header from "./components/Cabecalho/cabecalho"
import Formulario from "./components/Formulario/formulario"
import Conteudo from "./components/Conteudo/conteudo"

import axios from "axios"

import "../src/assets/reset.css"
import "../src/assets/app.css"

const App = () => {
  const [user, setUser] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [avatar, setAvatar] = useState("");
  const [id, setId] = useState("");
  const [seguidores, setSeguidores] = useState("");
  const [seguindo, setSeguindo] = useState("");
  const [repositorios, setRepositorios] = useState("");

  const procuraConta = () => {
    console.log("fui clicado")
    axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
      setData(response.data)
    })
  }
  
  const setData = ({avatar_url, name, login, followers, following, public_repos}) => {
    setNomeCompleto(name)
    setAvatar(avatar_url)
    setId(login)
    setSeguidores(followers)
    setSeguindo(following)
    setRepositorios(public_repos)
  }

  return (
    <>
      <Header/>
      <main>
        <Formulario conta={procuraConta} setUser={setUser} user={user} />
        {nomeCompleto !== "" ? (
          <Conteudo nomeCompleto={nomeCompleto} avatar={avatar} id={id}
          seguidores={seguidores} seguindo={seguindo} repositorios={repositorios} user={user}/>
        ) : (
          <></>
        )}
      </main> 
    </>
  )
}

export default App;
