import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelado() {
  return (
    <div>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>
          Compra Cancelada{" "}
          <span role="img" aria-label="emojisadface">
            🙁
          </span>
        </h2>
        <p>Sentimos que no hayas comprado tu nuevo swag.</p>
        <p>Recuerda que aqui seguira por si decides volver</p>
        <span role="img" aria-label="emojiheart">
          💚
        </span>
        <Link to="/">
          <Button>Volver al Catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
