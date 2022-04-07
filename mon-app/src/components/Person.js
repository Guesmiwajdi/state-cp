import React from 'react';

class Person extends React.Component {
constructor(){
  super();
   this.state = {
   fullName: "Wajdi Guesmi",
   bio: " learning the web developement",
   photo: "./pic.jpg",
   job : "Full Stack JS student",
   show: true,
 };
}
  render() {
    return (
      <div className='Person'>
        <h1> {this.state.fullName}</h1>
        <h3>{this.state.job}</h3>
        <p>{this.state.bio}</p>
        <img 
          src={this.state.photo}
          alt='djoko'
          style={{ width: 350, height: 350, borderRadius: "50%" }}/>
      
      </div>
    )
  }
}

export default Person;