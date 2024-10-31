const sections = document.querySelectorAll('.section'); 
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');


function pageTransition(){
    //button click active class
    for(let i=0;i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    }
    // sections active class
    allsections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the the button
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active-btn')
            })
            e.target.classList.add('active-btn')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
            }
        }
    })
   // Toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
});

}

    pageTransition();
    const typingText = "A WEB DEVELOPER";

    // Variables to keep track of the current position and state
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Milliseconds per character
    const deletingSpeed = 100; // Milliseconds per character when deleting
    const pauseBetween = 2000; // Pause before starting to delete
    
    // Get the HTML element where the text will be displayed
    const animatedTextElement = document.getElementById('animated-text');
    
    // Function to handle the typing effect
    function typeEffect() {
        if (!isDeleting) {
            // Typing phase
            animatedTextElement.textContent = typingText.substring(0, charIndex + 1);
            charIndex++;
    
            if (charIndex === typingText.length) {
                // Pause before deleting
                isDeleting = true;
                setTimeout(typeEffect, pauseBetween);
                return;
            }
        } else {
            // Deleting phase
            animatedTextElement.textContent = typingText.substring(0, charIndex - 1);
            charIndex--;
    
            if (charIndex === 0) {
                // Pause before typing again
                isDeleting = false;
            }
        }
    
        // Calculate the next timeout
        const timeout = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, timeout);
    }
    
    // Start the typing effect once the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', typeEffect);