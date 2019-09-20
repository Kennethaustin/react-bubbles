import React from "react";
import axios from 'axios';
class Login extends React.Component{ // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 
state = {
  cred: {
    username:'',
    password:''
  }
};

handleChange = e => {
  this.setState({
    credentials: {
      ...this.state.cred,
      [e.target.name]: e.target.value
    }
  })
};

login = e => {
  e.preventDefault();
  console.log(this.state.cred);
  axios
    .post('http://localhost:5000/api/login', this.state.cred)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/protected');
    })
    .catch(err => console.log(err.response));
};

render() {

  return (
    <div>
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.cred.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.cred.password}
          onChange={this.handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

}
export default Login;