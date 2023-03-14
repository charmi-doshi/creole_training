import React from "react"

//using state
  
class Contact extends React.Component{
  state = {
    name:"abc"
  }
  handleChange = (event) =>{
    const value = event.target.value;
    this.setState({name:value});

  };

  render(){

    const {name} = this.state;
    return(
      <div>
        {/* JSX MARKUP */}
        <input placeholder="enter name" onChange={this.handleChange} value={name}/>

        <br></br>
        <h1>Thank you , {name} for contacting</h1>
      </div>
    )
  }
}
  export default Contact;