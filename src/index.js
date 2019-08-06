import React from 'react';
import ReactDOM from 'react-dom';

class Dog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: <button type="button" onClick={() => this.changeDog()}>Dog</button>,
            cat: <button type="button" onClick={() => this.changeCat()}>Cat</button>
        }

    }

    changeDog() {
        this.setState({dog: <h1>Woof woof</h1>})

    }

        changeCat() {
        this.setState({cat: <h1>Meow</h1>})
    }
        render() {
            return (
            <div>
             {this.state.dog}
            <br></br>
             {this.state.cat}
            </div>
            
            );
        }


    }  

ReactDOM.render(
    <Dog />,
    document.getElementById('root')
);