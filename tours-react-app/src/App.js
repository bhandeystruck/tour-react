import React, {useState, useEffect} from "react";
import './App.css';
import Loading from './Loading';
import Tours from './Tours'



const url = 'https://course-api.com/react-tours-project'

function App() {
 //this is a boolean state to know if we are loading the data or not
 const [loading, setLoading] = useState(true);

//state to store the tours
 const [tours, setTours] = useState([]);




 //we will look at the id
 //if the filter id dosnt match remove it
 //and dont put it in the new array
 const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours)
}


//fetching the data
//this function will be called at the start with useEffect
const fetchTours = async () =>{
  //when we fetch we set the loading to true
  setLoading(true);
  
  //try catch block for error handling
  try{

    //fetching the data from the url here
    const response = await fetch(url);
    //need to convert it into json objects and store it
    const tours = await response.json();
    setLoading(false);
    setTours(tours);

  }
  catch (error){

    setLoading(false);
    console.log(error);


  }

};

//need this to run in the initial render
useEffect(() => {
  //calling the fetchTours function to get the data
  fetchTours();
 
}, []);


















 //condition to see loading
 //if true load the loading component
 if(loading){
    return( <main>
    <Loading/>

    </main>
    );
 }

 if(tours.length === 0){
   return <main>
     <div className="title">
       <h2>No More Tours Left</h2>
       <button onClick={fetchTours}></button>
     </div>
     <button className="submitButton" onClick={fetchTours}>Refresh</button>
   </main>
 }

 //else
  return (
    <main>

    <Tours tours={tours} removeTour={removeTour}/>
     

    </main>
    
  );
}

export default App;
