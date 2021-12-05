import React,{useState,useEffect} from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
const [fake,setFake]=useState([]);
useEffect(()=>{
  fakestore();
},[])
const fakestore = async()=>{
  const response= await fetch("https://fakestoreapi.com/products");
  const jsondata=await response.json();
  setFake(jsondata);
}
  return (
    <>
    <h2>Welcome to Fake Store</h2>
    <div className="container">
    {fake.map((values)=>{
      return(
        <>
         <div className="box">
        <div className="content">
      <Card title={values.title} description={values.description} image={values.image}/>
      </div>
      </div>
      </>
      )
    })}
    </div>
</>
)
}
export default App;

