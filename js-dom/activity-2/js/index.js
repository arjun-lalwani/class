// Main JavaScript File
'use strict';

let state = {
    text: 'Here is some text.'
};

// Wait for you page (entire body) to load to assign events to the elements created in your index.html File
// This is required as the script tag is in the head so we need the body html to execute before you start manipualting the DOM
$(function () {
    // Select all svgs and change their attr "height" to 200
    $('svg').attr('height', 200);

    // Select your first svg and change it's width attribute to 10
    $('svg:first').attr('width', 10); // default is px. 

    // Select the input and set the attribute "placeholder" to "start typing"
    $('input').attr('placeholder', 'start typing');

    // Set the input val to state.text
    $('input').val(state.text);

    // Select elements with class "italics" and set their css "font-style", to "italic"
    $('.italics').css('font-style', 'italic');

    // Select even rows in the table and set their css "background" to "lightgray"
    $('tr:even').css('background', 'lightgray');

    // Assign an event handler to the <input> element that updates state.text
    let input = $('input');
    input.on('input', function () {
        state.text = input.val();
    });

    // Create a new paragraph, add some text, and add it as the *first* element in the <main> tag
    $('button').on('click', function () {
        $('#change').text(state.text);
        input.val('');
    });

    // Assign an click event to the <button> element that changes the text of 
    // element with id "change" to the state.text, and resets the input
    let p = $('<p>').text('This is new');
    $('main').prepend(p);
});
