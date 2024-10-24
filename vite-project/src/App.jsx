import React from 'react'
import Nav from "./components/Nav"
import Body from "./components/Body"

function App() {
  let info=[
    {
      name:"aditya",
      phone:123
    },
    {
      name:"ayush",
      phone:456
    },{
      name:"pandey",
      phone:789
    }
  ]
  //objects can't be rendered
  let x=info.map((item,index)=>{
    return(
      <div key={index}>
           <h1>{item.name}</h1>
           <p>{item.phone}</p>
      </div>
    )
  })

  return (
    <h1>
      {x}
    </h1>
  )

}

export default App