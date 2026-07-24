import { useContext } from "react";
import { StoreItems } from "../store/store";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
const Display = ()=>{
  const {weather}=useContext(StoreItems);
return (
  weather ? (
    <div>
      <h4 className="fw-bold">{weather.city}</h4> 
      <h2>{weather.temperature}°C</h2>
      <img 
        src={`https://openweathermap.org/img/wn/${weather.image}@2x.png`} 
        alt={weather.comment}
      />
      
      <div className="extra">
        <div className="wind">
          <p>Wind Speed</p>
          <FaWind className="windicon" /> {weather.wind} Km/h
        </div>
        
        <div className="precipitation">
          <p>Humidity</p>
          <WiHumidity /> {weather.humidity}%
        </div>
      </div>
    </div>
  ) : (
    <p>Enter city to view weather!</p>
  )
);

}
export default Display;