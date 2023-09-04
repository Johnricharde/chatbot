// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');


// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
    let html = /*HTML*/ `
    <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
    <p>Type "help" for commands.</p>
    `
    app.innerHTML = html
}

// CONTROLLER ///////////////////////////////////////////////////////////////////////////
// Hardcoded text response based on the user's input
function respond() {
    let userInput = document.getElementById('user-input').value;
    if (userInput == "help") {
        app.innerHTML = /*HTML*/`
        <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
        <ul>
        <li>"hello"</li>
        <li>"how are you?"</li>
        <li>"who are you?"</li>
        <li>"good bye"</li>
        </ul>`
    } else if (userInput == "hello") {
        app.innerHTML = /*HTML*/`
        <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
        <p>Hello.</p>`
    } else if (userInput == "how are you?") {
        app.innerHTML = /*HTML*/`
        <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
        <p>I'm fine, thank you.</p>`
    } else if (userInput == "who are you?") {
        app.innerHTML = /*HTML*/`
        <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
        <p>I'm a chatbot.</p>`
    } else if (userInput == "good bye") {
        app.innerHTML = /*HTML*/`
        <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
        <p>Good bye.</p>`
    } else {
        app.innerHTML = /*HTML*/`
        <input type="text" id="user-input" onchange="setTimeout(respond, 1500)">
        <p>Sorry, I didn't understand.</p>`
        console.log("Error! Invalid user input")
    }
}

