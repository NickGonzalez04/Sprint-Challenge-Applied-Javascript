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

function Header(headerinfo) {
    // Header
    const header =document.createElement('div');
    //Date
    const headerDate = document.createElement('span');
    //Title
    const headerTitle = document.createElement('h1');
    //Temp
    const headerTemp = document.createElement('span');


//Structure Elements

header.appendChild(headerSection);
headerDate.appendChild(date);
headerTitle.appendChild(title);
headerTemp.appendChild(temp);

//Class Names
header.classList.add('header');
headerDate.classList.add('date');
headerTemp/classList.add('temp');


//Set Content

headerSection.textContent = headerinfo
}
