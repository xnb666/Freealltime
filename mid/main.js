document.addEventListener('DOMContentLoaded', () => {
    function toggle() {
     
      const elements = document.querySelectorAll('[data-toggle]');
      
      elements.forEach((element) => {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          
          const targetID = element.getAttribute('data-toggle');
          const targetElement = document.getElementById(targetID);
          
        
          targetElement.classList.toggle('toggled');
          
       
          element.classList.toggle('active');
        });
      });
    }
    toggle();
  });
  