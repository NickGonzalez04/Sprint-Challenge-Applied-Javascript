// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



function Header() {
    // Header
    const header = document.createElement('div');
    //Date
    const date = document.createElement('span');
    //Title
    const title = document.createElement('h1');
    //Temp
    const temp = document.createElement('span');


//Structure Elements

// header.appendChild(headerSection);
header.appendChild(date);
header.appendChild(title);
header.appendChild(temp);

//Class Names
header.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');


//Set Content

date.textContent = "SMARCH 28, 2019";
title.textContent = "Lambda Times";
temp.textContent ="98 Degrees";




return header;
}

const newHeader = document.querySelector('.header-container');

let menuHeader = Header();

newHeader.appendChild(menuHeader);


