import React from 'react';
import axios from 'axios';

const testData = [];

const CardList = (props) =>{
  return(
    <div>
      {/* <Card {...testData[0]}/>
      <Card {...testData[1]}/> */}

      {props.profiles.map(profile => <Card {...profile} key={profile.id}/>)}
    </div>
  );
}

class Card extends React.Component{
  render(){
    const profile = this.props;
    return(
      <div>
        <br/>
        <br/>
        <img src={profile.avatar_url} alt={profile.name}/>
        <div>
          <div>{profile.name}</div>
          <div>{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component{

  state= {
    userName: ''
  }

  handleSubmit = async (event) =>{
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName: ''});
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          value={this.state.userName} 
          placeholder="Github Username"
          onChange={event=>this.setState({userName:event.target.value})}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

class GitHubCardsApp extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   }
  // };
  state = {
    profiles: testData,
  }

  addNewProfile =(profileDataFetched)=>{
    console.log(profileDataFetched);
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profileDataFetched]
    }))
  };

  render(){
    return(
      <div>
        {this.props.title}
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default GitHubCardsApp;
