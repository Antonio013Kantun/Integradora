import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCelulares = ({ nombre, imagen, precio }) => {
  return (
    <div className="bg-[#fdfeff] rounded-xl flex flex-col items-center gap-2 p-2 m-4 overflow-hidden">
      <img
        src={imagen}
        className="w-full h-55 bg-cover rounded-xl"
        style={{ backgroundSize: 'contain' }}
        alt={nombre}
      />
      <h1 className="text-center text-lg mt-2 font-semibold"v>{nombre}</h1>
      <h2>${precio}</h2>
      <button className="bg-blue-500 text-white px-4 py-1 rounded text-center mt-2">Agregar</button>
    </div>
  );
};

const App = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Breakpoint para dispositivos móviles
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const productos = [
    {
        nombre: "Tubos",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/92419.jpg?20220203103956",
        precio: 19.99,
      },
      {
        nombre: "Kanoodle",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/2978.jpg?20220202123132",
        precio: 29.99,
      },
      {
        nombre: "Moorphe zen",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/MORP-AUDIMZ-0012.jpg?20230417112521",
        precio: 24.99,
      },
      {
        nombre: "mi persona",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/9780646802770.jpg?20230522112310",
        precio: 24.99,
      },
      {
        nombre: "Producto 3",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/9780646802770.jpg?20230522112310",
        precio: 24.99,
      },
      {
        nombre: "Producto 3",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/9780646802770.jpg?20230522112310",
        precio: 24.99,
      },
      {
        nombre: "Producto 3",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/9780646802770.jpg?20230522112310",
        precio: 24.99,
      },
     
  ];

  return (
    <div >
      <h1 className="text-center font-semibold text-2xl">PRODUCTOS DESTACADOS</h1>
      <hr className="my-4 border-t-2 w-1/4 border-blue-500 mx-auto" />
      <Slider {...settings}>
        {productos.map((producto, index) => (
          <CardCelulares key={index} {...producto} />
        ))}
      </Slider>
    </div>
  );
};

export default App;

    

