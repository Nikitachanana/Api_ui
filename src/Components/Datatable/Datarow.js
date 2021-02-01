import React from 'react'

const Datarow = ({ item }) => {
    return (
        <>
            <tr>
                <td>
                    <div className="name">
                    {/* <span className="vertical"></span> */}
                    {item.name}</div>
                    <div className="required">{item.required? "required": ""}</div>
                </td>
                <td>
                    <div>{item.type}</div>
                    <div>{item.description}</div>
                </td>
            </tr>
        </>
    )
}

export default Datarow
