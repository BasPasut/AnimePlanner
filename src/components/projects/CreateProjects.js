import React, { Component } from 'react'

class CreateProjects extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            content: ''
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
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Content</label>
                        <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.onChangeHandler}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProjects
