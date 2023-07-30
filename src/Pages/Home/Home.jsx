import React from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  //here you can declare the products array => 7/
  let products = [
    {
      id: 1,
      name: "product 1",
      description: "write a description here",
      oldPrice: 15,
      newPrice: 10,
      rate: 4.5,
      imgUrl:"https://shorturl.at/bktx4",
      category: "vegetable",
    },
    {
      id : 2,
      name: "product 2",
      description: "write a description here",
      oldPrice: 5,
      newPrice: 1,
      rate: 5,
      imgUrl:"https://shorturl.at/gFGNX",
      category: "fruit",
    },
    {
      id : 3,
      name: "product 3",
      description: "write a description here",
      oldPrice: 5,
      newPrice: 1,
      rate: 5,
      imgUrl:"",
      category: "fruit",
    },
    {
      id :4,
      name: "product 4",
      description: "write a description here",
      oldPrice: 5,
      newPrice: 1,
      rate: 5,
      imgUrl:"",
      category: "fruit",
    },
    {
      id : 5,
      name: "product 5",
      description: "write a description here",
      oldPrice: 5,
      newPrice: 1,
      rate: 5,
      imgUrl:"",
      category: "fruit",
    },
  ];

  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
       {products.map((product)=>(
        <Card product={product}/>
       ))}
        {/*
       code of cards here
       1/ create a folder named Card in the component folder
       2/ create Card.jsx and Card.css in the Card component 
       3/ export the Card component with "export default Card"
       4/ import the Card component in Home.jsx 
       5/ put the Card component in the content 
       6/ in Home.jsx create an array named products of 5 objects each object has  id :string, image :string, name : string , description : string , newPrice : number , oldPrice : number ,category : string , rate : number
       7/ in Home.jsx in the jsx part (html) map the array of products and in each iteration call the Card Component and pass the object as a props 
      */
      }
      </div>
    </div>
  );
}
//This is an example how to map in jsx 
function Products(props) {
  return (
      <>
        <h1>products</h1>
            <div className="cards">
        {props.products.map((product) =>
          <Card key={product.id} value={product} />
        )}
            </div>
      </>
  );
}

export default Home;
