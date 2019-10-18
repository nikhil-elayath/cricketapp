import React, { Component } from 'react'
import { getUsers, otpVerify, otpSend } from '../actions/Users.js'
import { connect } from 'react-redux'

import './css/Login.css'

export class ResetPassword extends Component {
  // constructor(props) {
  // 	super(props);

  // 	this.onVerify = this.onVerify.bind(this);
  // 	this.userVerify = this.userVerify.bind(this);
  // }
  // componentDidMount() {
  //   this.props.getUsers();
  // }

  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount () {
    if (localStorage.getItem('token')) {
      this.props.history.push('/')
    }
  }

  state = {
    user_email: '',
    user_password: '',
    confirmPassword: '',
    show_otp_field: false,
    otp: '',
    showError: false,
    errorMessage: ''
  }

  // onReset() {
  //   let user = {
  //     user_email: this.state.user_email,
  //     user_password: this.state.user_password
  //   };
  //   console.log(this.state.user_email);

  //   this.props.resetPassword(user);
  //   this.setState({
  //     user_email: "",
  //     user_password: "",
  //     confirmPassword: "",
  //     otp: ""
  //   });
  // }

  onVerify = e => {
    e.preventDefault()
    if (
      !this.state.user_email ||
      !this.state.user_password ||
      !this.state.confirmPassword
    ) {
      this.setState({
        showError: true,
        errorMessage: 'Enter all the fields'
      })
    } else {
      this.setState({
        showError: false,
        errorMessage: ''
      })
      if (this.state.user_password !== this.state.confirmPassword) {
        this.setState({
          showError: true,
          errorMessage: 'Password does not match'
        })
      } else {
        if (this.state.user_email.length < 5) {
          this.setState({
            showError: true,
            errorMessage: 'Invalid Email!'
          })
        } else {
          if (this.state.user_password.length < 5) {
            this.setState({
              showError: true,
              errorMessage: 'Password length should be greater then 5!'
            })
          } else {
            this.setState({
              showError: false,
              errorMessage: ''
            })
            let user = {
              user_email: this.state.user_email
            }
            this.props.otpSend(user)
            this.setState({
              show_otp_field: true
            })
          }
        }
      }
    }
  }

  userVerify = e => {
    e.preventDefault()
    if (!this.state.otp) {
      this.setState({
        showError: true,
        errorMessage: 'Please Enter OTP'
      })
    } else {
      this.setState({
        showError: false,
        errorMessage: ''
      })
      let user = {
        user_email: this.state.user_email,
        user_password: this.state.user_password,
        otp: this.state.otp
      }
      this.props.otpVerify(user)
      this.props.history.push('/login')

      this.setState({
        user_email: '',
        user_password: '',
        confirmPassword: '',
        otp: ''
      })
    }
  }

  render () {
    return (
      <div>
        <form id='msform'>
          <fieldset>
            <h1>Reset Password</h1>
            <input
              type='text'
              name='user_email'
              placeholder='Enter Email'
              onChange={this.OnChange}
              value={this.state.user_email}
            />
            <input
              type='password'
              name='user_password'
              placeholder='Enter Password'
              onChange={this.OnChange}
              value={this.state.user_password}
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={this.OnChange}
              value={this.state.confirmPassword}
            />
            <div
              className='errorMessage'
              style={{
                color: '#c0392b'
              }}
            >
              {/* dispatch error from node */}
              {this.props.error ? (
                <>{this.props.error}</>
              ) : (
                <span
                  className='errorMessage'
                  style={{
                    color: '#c0392b',
                    display: this.state.showError ? 'block' : 'none'
                  }}
                >
                  {this.state.errorMessage}
                </span>
              )}
            </div>
            {/* <button onChange={this.OnChange} onClick={this.onVerify}>
              Send OTP
            </button> */}
            {this.state.show_otp_field === true ? (
              <>
                <span>Check Your Email !</span>
                <input
                  style={{ marginTop: 2.5 + 'em' }}
                  type='password'
                  name='otp'
                  placeholder='Enter OTP'
                  onChange={this.OnChange}
                  value={this.state.otp}
                />
                <div
                  className='errorMessage'
                  style={{
                    color: '#c0392b'
                  }}
                >
                  {/* dispatch error from node */}
                  {this.props.error ? (
                    <>{this.props.error}</>
                  ) : (
                    <span
                      className='errorMessage'
                      style={{
                        color: '#c0392b',
                        display: this.state.showError ? 'block' : 'none'
                      }}
                    >
                      {this.state.errorMessage}
                    </span>
                  )}
                </div>
                <button
                  className='formbutton'
                  onChange={this.OnChange}
                  onClick={this.userVerify}
                >
                  Verify OTP and Reset Password
                </button>
              </>
            ) : (
              <button
                className='formbutton'
                onChange={this.OnChange}
                onClick={this.onVerify}
              >
                Send OTP
              </button>
            )}
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
  error: state.userReducer.error
})

export default connect(
  mapStateToProps,
  { getUsers, otpSend, otpVerify }
)(ResetPassword)
