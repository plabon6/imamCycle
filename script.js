fetch('Data/product.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        renderCategories(data.categories);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });


    // Function to render categories in the DOM
    function renderCategories(categories) {
      const container = document.getElementById("category");
      const mobContainer = document.getElementById('mobCategory');

      //Off Canvas Loop Category
    categories.forEach(mobCat => {
        const mobCatLi = document.createElement("li");
        mobCatLi.className = "mainCat";
        mobCatLi.innerHTML = `<div>${mobCat.name}<i class="fa-solid fa-angle-down downArrow"></i></div>`;

        const subcategoryList = document.createElement("ul");
        subcategoryList.className = "mobSubCat";

        mobCat.subcategories.forEach(subcategory => {
            const mobSubCatItem = document.createElement("li");
            mobSubCatItem.innerHTML = `<a href="#">${subcategory}</a>`;
            subcategoryList.appendChild(mobSubCatItem);
          });
          mobCatLi.appendChild(subcategoryList);
          mobContainer.appendChild(mobCatLi);


    });

      // Loop through each category
      categories.forEach(category => {
        const categoryLi = document.createElement("li");
        categoryLi.className = "mainCat";
        categoryLi.textContent = category.name;

    // Create the subcategories list
        const subcategoryList = document.createElement("ul");
        subcategoryList.className = "subcategory";

        category.subcategories.forEach(subcategory => {
          const subcategoryItem = document.createElement("li");
          subcategoryItem.textContent = subcategory;
          subcategoryList.appendChild(subcategoryItem);
        });

        categoryLi.appendChild(subcategoryList);
        container.appendChild(categoryLi);
      });

    const mobSubCat = document.getElementsByClassName('mobSubCat')
    const downArrow = document.getElementsByClassName('downArrow')

for (let i = 0; i < mobSubCat.length; i++) {
    downArrow[i].addEventListener('click', function () {
        if (mobSubCat[i].classList.contains('showSub')) {
            mobSubCat[i].classList.remove('showSub');  
            downArrow[i].style.transform = 'none';
        }
        else{
            mobSubCat[i].classList.add('showSub');
            downArrow[i].style.transform = 'rotate(-180deg)';
        }
    })
    
};
    }

const offCanvas = document.getElementById("offCanvas")
const overlay = document.getElementById('overlay');

function showMenu() {
    offCanvas.style.left = 0;
    overlay.style.display = 'block';
};

function hideMenu() {
    offCanvas.style.left = '-280px';
    overlay.style.display = 'none';
};

const mobSubCat = document.getElementsByClassName('mobSubCat')
const downArrow = document.getElementsByClassName('downArrow')

for (let i = 0; i < mobSubCat.length; i++) {
    downArrow[i].addEventListener('click', function () {
        mobSubCat[i].classList.add('showSub');  
    })
    
};