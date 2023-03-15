import React from "react";

//using props
function Card(props) {
    
    const { title, body } = props
    return (
      <div className="card">
        <div className="card-body">
        <h2>{title}</h2>
        </div>
         <div className="card-text">{body}</div>
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