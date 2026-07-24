import "./App.css";
import Heading from "./components/heading";
import Display from "./components/display";
import Input from "./components/input";
import StoreitemsProvider from "./store/store";
function App() {
  return (
    <>
    <StoreitemsProvider>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card shadow-lg p-4 text-center"
          style={{ width: "400px", borderRadius: "15px"}} >
            <Heading/>
            <Input/>
            <Display/>
        </div>
      </div>
      </StoreitemsProvider>
    </>
  );
}

export default App;
