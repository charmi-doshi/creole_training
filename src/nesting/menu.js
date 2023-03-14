import React from "react";

//using props
function Card(props) {
    
    const { title, body } = props
    return (
      <div className="card-container">
        <h2>{title}</h2>
         <div>{body}</div>
      </div>
    )
  }
  
  //nesting card in menu
export default  function Menu() {
    return (
      <div>
        <Card title="This is Nested component" body="Hello!!" />
      </div>
     );
  }