import * as React from 'react'
import '../styles/style.scss'

export class Login extends React.Component<LoginProps, LoginState>{
  constructor(props: LoginProps) {
    super(props)
  }
  render() { return (
    <form className="col-md-4 form-container">
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
      </div>
      <div className="checkbox form-group">
        <label>
          <input id="rem" type="checkbox" />Remember Me
        </label>
      </div>
      <button type="submit" className="btn btn-success btn-block">Submit</button>
    </form>
  )}
}

interface LoginProps {

}

interface LoginState {

}