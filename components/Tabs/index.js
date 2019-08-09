// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let tabSection = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((axiosData) =>{
    console.log('axiosData.data ', axiosData);

    let tabinfo = axiosData.data.topics;
     tabinfo.forEach((item)=>{
tabSection.appendChild(tab(item));
     })
})


function tab(data){
// Tab
    const tab = document.createElement('div');

// Class name
    tab.classList.add('tab');
// Set Content
    tab.textContent = data;


    return tab;
}