import "./scss/index.css";
import Payload from "./Components/Payload/Payload";
import Response from  "./Components/Response/Response"
import data, {status,payload} from "./data"
import Data from "./data"
import Datatable from "./Components/Datatable/Datatable"

const statusData = [];
function App() {
  
  return (
    <>
      <div className="App">
        <div></div>
        <div>{data.map((item,i)=>{
          return <Datatable data={item.request_body_schema.input_parameters}/>
        })}</div>
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
