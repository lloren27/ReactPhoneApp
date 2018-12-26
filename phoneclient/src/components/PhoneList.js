import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #333;
  box-sizing: border-box;
  margin: 10px;
  min-width: 280px;
  padding: 0 20px;
  width: 30%;
  background-color: #fff;
`;
const imgStyle = {
  width:'200px',
};
const detailStyle = {
  margin:'25px',
  size:'100px',
};

const Phone = ({ brand, name,image,color,price }) => {
  return (
    <Container>
      <h1>Modelo: {name}</h1>
      <p>Marca:{brand}</p>
      <img  style={imgStyle} src = {image} alt="phone description"/>
      <p>Color: {color}</p>
      <h2>Precio: {price}</h2>
      <a href="#" style={detailStyle} >Ver más Detalle</a>
    </Container>
  );
};

export default Phone;
