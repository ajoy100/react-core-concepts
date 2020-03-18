import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person={name:"Dr. M" , job:"Singer"}
  var person1={name:"Dr. Ttttt" , job:"Singer"}

  var style={
    color:'red' ,
    backgroundColor:'yellow'
  }

  const nayoks=['Anwar','Salman','Jasim','Alomgir'];

  const products=[{name:'Photoshop',  price:'$88.80'},
  {name:'Illustrator',  price:'$48.10'},
  {name:'Pdf Reader',  price:'$5.88'},
  {name:'Premium Plugins',  price:'$555.88'}
]
  

  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        
        <h1 className="" style={style}>{person.name+ " "+ person.job} </h1>
        <h1 style={{backgroundColor:'cyan' , color:'orange'}}>{person1.name+ " "+ person.job} </h1>
        <h2>My heading : {2+3}</h2>

        <p>My First React App</p>
        <Counter></Counter>
        <Users></Users>
        {
          nayoks.map(nayok=><li>{nayok}</li>)
        }
        {
          products.map(product=><li>{product.name}</li>)
        }
        

        {
          products.map(product=><Product product={product}></Product>)
        }
        <Person name={nayoks[3]} nayika="Moushomi"></Person>   {/*array theke  read korar jonno*/}
        <Person name="Ferdous" nayika="Moushomi"></Person>
        <Person name="Ferdous" nayika="Moushomi"></Person>
        <Person name="Ferdous" nayika="Moushomi"></Person>
        <Person name="Ferdous" nayika="Moushomi"></Person>
        {/* <Person></Person>  */}
        
        <Product product={products[0]}> </Product>
        {/* <Product name={products[0].name} price={products[0].price}> </Product> */}

      </header>
    </div>
  );
}
function Person(props){
  return (
      <div style={{border:"2px solid red",margin:"10px" ,padding:'10px'}}><h1>Nayok: {props.name} </h1> 
          <h3>Hero of {props.nayika}</h3>
      </div>
  )
}

function Product(props){

  const productStyles={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'orange',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }

  //console.log(props);
  const {name,price}=props.product;     // Distructure Kora Hoiyese 
  //console.log(name,price);
  return ( 
  <div style={productStyles}>
    <h3>{name}</h3>
    <h4>{price}</h4>
    <button>Buy Now</button>
  </div> )
}

function Counter(){
  const [count , setCount]=useState(11);
  const handleIncrease=()=> setCount(count+1);
  
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
     

        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}
export default App;
