import "./scss/index.css";
import Payload from "./Components/Payload/Payload";
import Response from  "./Components/Response/Response"
import data, {status,payload} from "./data"
import Data from "./data"

const statusData = [];
function App() {
  function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}



  return (
    <>
      <div className="App">
        <div></div>
        <div></div>
        <div className="responses">
       {data.map(item=>{
         return  <div>
          <Payload data={item.request_sample} />
          <Response data={item.responses}/>
        </div>
       })}
       </div>
      </div>
    </>
  );
}

export default App;
