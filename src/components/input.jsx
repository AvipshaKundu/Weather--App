import { useContext } from "react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { StoreItems } from "../store/store";

const Input = ()=>{
  const placeelement = useRef();
  const {fetchWeather}=useContext(StoreItems);
  const handleOnclick=(event)=>{
    console.log("clicked");
    const place=placeelement.current.value;
    placeelement.current.value="";
    fetchWeather(place);

  }
return(
   <div className="input-group mb-3">
          
            <input
              type="text"
              className="form-control"
              placeholder="Enter city here..."
              ref={placeelement}
            />
            <button className="btn btn-success"
            onClick={handleOnclick}>
              
             <FaSearch />
            </button>
          </div>
)
}
export default Input;