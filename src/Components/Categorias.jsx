

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Categorias = ({ nombre, imagen }) => {
  return (
    <div className="bg-[#fdfeff] rounded-xl flex flex-col items-center gap-2 p-2 m-2">
      <img src={imagen} className="w-40 h-[220px] bg-cover rounded-xl" style={{ backgroundSize: 'contain' }} alt={nombre} />
      <h1 className="text-center text-2xl">{nombre}</h1>
    </div>
  );
};

const App = () => {
  const cate = [
    {
        nombre: "Organizacion",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/05/305.jpg?1600230401",
      },
      {
        nombre: "Calmante",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/10/310.jpg?1612393087",
      },
      {
        nombre: "Matematicas",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/73/373.jpg?1655640033",
      },
      {
        nombre: "Tarjetas flash",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/09/309.jpg?1612393325",
      },
      {
        nombre: "Estar inquieto",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/94/194.jpg?1612393238",
      },
      {
        nombre: "Motor fino",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/95/195.jpg?1612393297",
      },
      {
        nombre: "Fuerza de la mano",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/97/197.jpg?1613736650",
      },
      {
        nombre: "Juguetes para bebes",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/99/199.jpg?1612393521",
      },
      {
        nombre: "Juego imaginativo",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/98/198.jpg?1613736964",
      },
      {
        nombre: "Chewing",
        imagen: "https://www.thetherapystore.com.au/assets/webshop/cms/02/202.jpg?1612393264",
      },
      {
        nombre: "Tubos",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/92419.jpg?20220203103956",
      },
      {
        nombre: "Kanoodle",
        imagen: "https://www.thetherapystore.com.au/assets/thumb/2978.jpg?20220202123132",
      },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-24">NUESTRAS CATEGORIAS</h1>
      <hr className="my-4 border-t-2 w-1/4 border-blue-500 mx-auto" />
      <Slider {...settings}>
        {cate.map((producto, index) => (
          <Categorias key={index} {...producto} />
        ))}
      </Slider>
    </div>
  );
};

export default App;
