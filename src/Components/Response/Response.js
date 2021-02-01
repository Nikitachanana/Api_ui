import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import JSONPretty from "react-json-pretty";

function Response({ data }) {
  const [key, setKey] = useState("200");

  return (
    <>
      <h6>Response</h6>

      <div className="data-container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          {Object.keys(data).map((item, i) => {
            return (
              <Tab style={{ padding: ".5rem" }} eventKey={item} title={item}>
                <JSONPretty id="json-pretty" data={data[item]}></JSONPretty>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
}

export default Response;
