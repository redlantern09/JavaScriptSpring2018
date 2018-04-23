window.onload = function () {
        // Function that will send an alert message to the user 
        function alertMessage(elem) {
            // Show all of the elements properties in the console
            console.log(elem);
            // Create an alert on the page telling user what button was clicked
            alert(elem.srcElement.textContent + " Button was clicked");
        }
        // Retrieve every element with an a tag
        var a = document.getElementsByTagName('a');
        // IMPORTANT - Loop through every element on page to add an event listener to each element
        for (i = 0; i < a.length; i++) {
            // Add a listener that will do the function alertMessage everytime a user clicks on the element
            a[i].addEventListener('click', alertMessage, false);
            //NEED THE FALSE STATEMENT. DOESN'T WORK OTHERWISE. IDK WHY THOUGH.
}