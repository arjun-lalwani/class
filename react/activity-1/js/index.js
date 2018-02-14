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
        return (<h1>Hello, my name is {this.props.name} and I am interested in {this.props.interest}</h1>);
    }
}

// Class to represent a group of people
class People extends React.Component {
    render() {
        return (<div>
            {
                this.props.people.map((person, index) => {
                    return <Person key={'item-' + index} name={person.name} interest={person.interest} />
                })
            }
        </div>
        )
    }
}

// Render your component in the `main` section
ReactDOM.render(element, document.getElementById('main'));
