document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const filter = document.querySelector('.filter');
  
    let opacity = 0; 
    let isActive = false;
  
    filterButton.addEventListener('click', function() {
      const interval = setInterval(function() {
        if (isActive && opacity > 0) {
          opacity -= 0.1; 
          filter.style.opacity = opacity;
        } else if (!isActive && opacity < 0.9) {
          opacity += 0.1; 
          filter.style.opacity = opacity;
        } else {
          clearInterval(interval);
          if (isActive) {
            filter.classList.remove('active'); 
            filter.style.display = 'none'; 
          } else {
            filter.style.display = 'block'; 
            filter.classList.add('active'); 
          }
          isActive = !isActive; 
        }
      }, 100); 
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton2');
    const filter = document.querySelector('.filter1');
  
    let opacity = 0; 
    let isActive = false;
  
    filterButton.addEventListener('click', function() {
      const interval = setInterval(function() {
        if (isActive && opacity > 0) {
          opacity -= 0.1; 
          filter.style.opacity = opacity;
        } else if (!isActive && opacity < 0.9) {
          opacity += 0.1; 
          filter.style.opacity = opacity;
        } else {
          clearInterval(interval);
          if (isActive) {
            filter.classList.remove('active'); 
            filter.style.display = 'none'; 
          } else {
            filter.style.display = 'block'; 
            filter.classList.add('active'); 
          }
          isActive = !isActive; 
        }
      }, 100); 
    });
  });
