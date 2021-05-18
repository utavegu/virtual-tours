import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {

const declarationStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "40px",
}

  return (
    <div style={declarationStyle}>
      Несуществующая страница! Вернитесь <Link to="/" style={{textDecoration: "underline"}}>в галерею</Link>
    </div>
  )
}
