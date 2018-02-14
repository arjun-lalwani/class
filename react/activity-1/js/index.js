// Main.js file
'use strict';

// Data: a group of people
const people = [
    { name: "Mike", interest: "Music" },
    { name: "Rashmi", interest: "Medicine" }
];

// Class for an individual person
class Person extends React.Component {
    render() {
        return <h1>Hello, my name is {this.props.name} and I am interested in {this.props.interest}</h1>
    }
}

// Class to represent a group of people
class People extends React.Component {
    render() {
        return <div>
            <Person />
        </div>
    }
}

// Render your component in the `main` section
ReactDOM.render(element, document.getElementById('root'));
