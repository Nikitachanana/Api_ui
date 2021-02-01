import React, { useState ,useEffect} from 'react'
import {Tabs,Tab} from "react-bootstrap"
import JSONPretty from "react-json-pretty";



const Payload = ({data}) => {
    const [key, setKey] = useState('payload');
    return (
        <>
        <h6>Request Samples</h6>
        <div className="data-container">
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
      {Object.keys(data).map((item,i)=>{
                return <Tab style={{padding:".5rem "}} eventKey={item} title={item.charAt(0).toUpperCase() + item.slice(1)}> <JSONPretty id="json-pretty" data={data[item]}></JSONPretty></Tab>
            })}
      </Tabs>
        
            
        </div>
        </>
    )
}

export default Payload
