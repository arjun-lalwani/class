'use strict';


let url = "https://www.merriam-webster.com/news-trend-watch/in-a-time-of-uncertainty-a-divided-nation-searches-for-puppies-20161202";

// Class Puppy
class Puppy {
    // Constructor: takes in an img url, and a sound
    constructor(img = url, sound = "bark") {
        this.img = img;
        this.sound = sound;
    }
    // Method for "speaking" using responsiveVoice
    bark() {
        responsive.speak(this.sound);
    }

    // Render a Div that you can click on to bark
    render() {
        let puppyCard = $('<div>');
        puppyCard.css('background-image', `url(${this.img})`);
        puppyCard.attr('class', 'puppyCard col-sm-4');
        puppyCard.click(() =>  // they take on the context of this from the broader scope
            this.bark()
        );
        return puppyCard;
    }
}

let myPuppy = new Puppy(url, 'woof');

// Class Form
class PuppyForm {
    // Contructor: takes in a callback function you can do
    constructor(callback) {
        this.callback = callback;
    }

    // Render: build the form with submit event
    render() {
        // Build form and input elements
        let form = $('<form>');
        let urlInput = $('<input class="url">');
        urlInput.attr({
            type: "text",
            placeholder: "Puppy URL...",
            class: "form-control"
        });
        let soundInput = $('<input class="sound">');
        soundInput.attr({
            type: "text",
            placeholder: "Sound to make...",
            class: "form-control"
        });
        form.append(urlInput);
        form.append(soundInput);
        form.append($('<button class="btn btn-primary mb-3" type="submit">Add a puppy!</button>'));

        // On submit, do the callback function
        form.on('submit', (event) => {
            event.preventDefault();
            this.callback(urlInput.val(), soundInput.val());
            return false;
        });
        return form;
    }
}

// Class for the app
class PuppyApp {
    // Constructor: takes in a parent element and list of puppies
    constructor(parentElement, puppyList = []) {
        this.parentElement = parentElement;
        this.puppyList = puppyList;
    }

    // Add puppy: pushes new data into list of puppies and re-renders the app
    addPuppy(img, sound) {
        this.puppyList.push({ url: img, sound: sound });
        this.render();
    }

    // Render;
    render() {
        // Empty parent element
        this.parentElement.empty();

        // Create and render a new form
        let form = new PuppyForm(this.addPuppy.bind(this)); // the reason we do bind this is because when you do PuppyForm 
        let renderedForm = myForm.render();

        // Append puppy list element to parent (in a wrapper div)
        let puppyWrapper = $('<div class="row">');
        this.parentElement.append(puppyWrapper);
        this.puppyList.map((puppyInfo) => {
            let newPuppy = new Puppy(puppyInfo.url, puppyInfo.sound);
            puppyWrapper.append(newPuppy.render());
        })
    }
}

// Create a new app with a single puppy


// Render the app
