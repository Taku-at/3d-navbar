/**
 * Create function to select eleements
 * element allow us to create a type of selector over and over again
 */
const selectElement = (element) => document.querySelector(element);


/**
 * Call selectElement function then values into variables
 * header pass in to the selectElement
 */
const header = selectElement('header');
const mainContent = selectElement('main');

/**
 * Click event hamburger menu to trigger the .active state
 */
selectElement('.hamburger').addEventListener('click', () => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
});


/**
 * Close sidebar-menu when clicking outside of it
 */
window.onclick = (event) => {
    /**
     * If click the event active is current
     */
    if(event.target.matches('.active')) {
        if(header.classList.contains('active')) {
            header.classList.remove('active');
            mainContent.classList.remove('active');
            console.log(selectElement);
        }
    }
};