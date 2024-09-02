import React from "react";
class Statetoggle extends React.Component {
    state = {
        username: "Divya",
        batch: "10",
        greet: "Hello!"
    }
    greeting = () => {
        this.setState(prevState => ({
            greet: prevState.greet === "Hello!" ? "Welcome!" : "Hello!"
        }));
    }
    render() {
        return (
            <>
                <h1>{this.state.greet} {this.state.username} from batch {this.state.batch}</h1>
                <button onClick={this.greeting}>Toggle Greeting</button>
            </>
        )
    }
}
export default Statetoggle;
