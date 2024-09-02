import React from 'react'
class Toggle extends React.Component {
    constructor() {
        super();
        this.state={btn:true}
    }
    toggleBtn = () => {
        this.setState(currState => ({btn : !currState.btn }));
    }
    render() {
        return (
            <>
            <button onClick={this.toggleBtn}>
                {this.state.btn ? 'ON' : 'OFF'}
            </button>
            </>
        )
    }
}
export default Toggle;