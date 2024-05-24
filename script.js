
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
        // Show confirmation message
        document.getElementById('confirmation-message').style.display = 'block';
        
        // Clear form fields
        document.getElementById('contact-form').reset();
    }, 500); // Simulate delay for form processing
});
function opentab(tabName) {
    var i;
    var tabContents = document.getElementsByClassName("tab-contents");
    var tabLinks = document.getElementsByClassName("tab-links");

    // Hide all tab contents
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Remove the active class from all tab links
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Show the clicked tab content and add active class to the clicked tab link
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

