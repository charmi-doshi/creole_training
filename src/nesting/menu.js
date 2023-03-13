import React from "react";

function Card(props) {
    
    const { title, body } = props
    return (
      <div className="card-container">
        <h2>{title}</h2>
         <div>{body}</div>
      </div>
    )
  }
  
export default  function Menu() {
    return (
      <div>
        <Card title={title} body={body} />
      </div>
     );
  }