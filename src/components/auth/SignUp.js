import React, { Component } from 'react'

class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }
    
    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Firstname</label>
                        <input type="text" id="firstName" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Lastname</label>
                        <input type="text" id="lastName" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
