import React from 'react'
import "./datatable.css"
import Datarow from "./Datarow"

const Datatable = ({data}) => {
    return (
<div class="table-responsive">          
  <table class="table">
    <tbody>
    {data.map((item,i)=>{
                return <Datarow item={item}/>
                })
            }
    </tbody>
  </table>
  </div>
    )
}

export default Datatable
