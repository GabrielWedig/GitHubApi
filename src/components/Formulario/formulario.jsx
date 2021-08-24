import React, { useState } from "react";
import "./estilo.css"

function Formulario({ conta, setUser, user }) {
  return (
    <section className="formulario">
      <form onSubmit = { async (evento) => {
        evento.preventDefault()
        await conta(user)
      }}>
        <input onChange={(evento) => {
          evento.preventDefault()
          setUser(evento.target.value)
        }} type="text" className="formulario_input" />
        <button className="botao">Pesquisar</button>
      </form>
    </section>
  )
}

export default Formulario;
