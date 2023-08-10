import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Com from "./components/Com";

function App() {
//   const [hobby, setHobby] = useState([])

//   const [getUpdateData, setGetUpdateData] = useState()



//   const handleOnChange = (e) => {
//     const {value,checked}= e.target 
//     // console.log('first',value,checked)
//     if(checked){
//       setHobby(pre => [...pre,value])
//     }else{
//       return setHobby(pre => [...pre.filter( i => i !== value)])
//     }
//   }
// console.log(hobby)
//   useEffect(() => {
//     const getUpdateData = async() => {
//       axios.get('http://localhost:8000/api/user/ch/64d12b23c741223d0131f2b4').then(response => {
//         setGetUpdateData(response.data)
//         setHobby(response.data.hobby || []); 
//       })
//     }
//     getUpdateData()
//   }, [])
  
  // console.log(hobby)
  // console.log(getUpdateData)
  return (
    <>
      <div className="App">
        {/* <input type="checkbox" id="vehicle1" name="vehicle1" checked={hobby.includes('Bike')} value="Bike" onChange={handleOnChange} />
        <label for="vehicle1"> I have a bike</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" checked={hobby.includes('Car')} value="Car" onChange={handleOnChange} />
        <label for="vehicle2"> I have a car</label>
        <br /> */}
        {/* <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={handleOnChange} />
        <label for="vehicle3"> I have a boat</label>
        <br /> */}
        <Com/>
      </div>
    </>
  );
}

export default App;
