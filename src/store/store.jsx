import { createContext, useEffect } from "react";
import { useReducer } from "react";

export const StoreItems = createContext();
const initialValue =  null;
const weatherReducer=(state,action)=>{
if(action.type==="SET_WEATHER"){
  return action.payload;
}
return state;
}
const StoreitemsProvider = ({children})=>{
const [weather,dispatchweather]=useReducer(weatherReducer,initialValue)
const fetchWeather=async (city)=>{
  if(city===""){
    alert("Enter city!");
  }
  try{
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
  const res= await fetch(URL);
  const data= await res.json();
  if(!res.ok){
    alert("Enter valid city");
  }
  console.log(data);
  dispatchweather({type:"SET_WEATHER",payload:{
    city:data.name,
    temperature:Math.round(data.main.temp),
    image:data.weather[0].icon,
    wind:data.wind.speed,
    comment:data.weather[0].description,
    humidity:data.main.humidity

  }})
  }
  catch(error){

  }
}
// useEffect(()=>{
// fetchWeather("London");
// },[])

return(<StoreItems.Provider value={{weather,fetchWeather}}>{children}</StoreItems.Provider>)


}
export default StoreitemsProvider;