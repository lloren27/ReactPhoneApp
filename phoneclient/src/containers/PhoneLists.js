import React, { Component } from 'react';
import PhoneList from '../components/PhoneList';
import styled from 'styled-components'; //styled-components, el objeto que importamos (styled) nos permite crear componentes que rendericen etiquetas HTML con estilos
import { getPhones } from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #82F4F6;
`;

class PhoneLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      loading: true,
    };
  }

componentDidMount() {
  getPhones()
      .then((res) => {
        this.setState({
          phones: res.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

renderPhones = () => {
    const { phones } = this.state;

    return phones.map((phone,i)=> {
      const { brand, name,image,color,price } = phone;

      return (
        <PhoneList
          key={i}
          name ={name}
          brand ={brand}
          image ={image}
          color ={color}
          price ={price}
        />
      );
    });
  }

render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading ? 'loading...' : this.renderPhones()}
      </Container>
    );
  }
}

export default PhoneLists;