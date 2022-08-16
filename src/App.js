import React from 'react';
import './App.css';
import MyImage from './nebli - Copie.jfif'
class App extends React.Component {
  state = {
    Person: {
      fullName: "NebliMohamedAmine",
      profession: "Student",
      bio: "Hi,I'am Mohamed Amine Nebli,a high school student and a future engineer ",
      ImgSrc:MyImage,
    },
    show: false,
    count:0
  };
  
  componentDidMount=()=>{
    setInterval(()=>{
      this.setState(prevState=>({
        count:prevState.count+1,
      }))
    },1000)
  }
  
  handleShowPerson = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render(){
    return (
      <>
      {this.state.show && (
        <>
          <center>
          <h1>{this.state.Person.fullName}</h1>
          <h2>{this.state.Person.profession}</h2>
          <p>{this.state.Person.bio}</p>
          <img src={this.state.Person.ImgSrc} alt="pic"></img>
          </center>
          <br></br>
        </>
      )}
      <center>
      <button onClick={this.handleShowPerson} class="btn-slice" >
      <div className='top'><span>Click here</span></div>
      <div className='bottom'><span>Click here </span></div>
      </button>
      <p>Counter:{this.state.count}</p>
      </center>
      </>
    )
  }
}

export default App;
