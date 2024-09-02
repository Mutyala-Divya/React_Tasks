import React from "react";
class State extends React.Component {
    state = {
        username : "Divya",
        batch : "A",
        greet : "Hello!"
    }
    greeting = () => {
        this.setState ({
            greet:"Welcome!",
        })
    }
    render () {
        return (
            <>
            <h1>{this.state.greet} {this.state.username} from batch {this.state.batch}</h1>
            <button onClick={this.greeting}>change greeting</button>
            </>
        )
    }

}

export default State;