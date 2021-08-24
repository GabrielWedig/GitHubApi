import React, { useState } from "react";
import "./estilo.css"

function ReposStarred({ lista }) {
  const mapLista =
    lista.length !== 0 ? lista.data.map((item) => (
      <div className="perfil_repositorios_repositorio">
        <p className="perfil_repositorios_nome">{item.name}</p>
        <p className="perfil_repositorios_descricao">{item.description}</p>
        <div className="perfil_repositorios_caixa">
          <p className="perfil_repositorios_linguagem">{item.language}</p>
          <p className="perfil_repositorios_data">Última atualização: {item.updated_at}</p>
        </div>
      </div>
    )) : console.log("Repositório não encontrado")

    const conteudo = lista.length !== 0 ? <div className="perfil_repositorios">{mapLista}</div> : console.log("Conteúdo não encontrado")

  return (
    <>
      {conteudo}
    </>
  )
}

export default ReposStarred;