// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// [X] Stduy the response data you get back, closely.
// [X]You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let card = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((articleData) =>{
    console.log('articleData.data ', articleData);
        let articles = articleData.data.articles
    for(topic in articles){
        articles[topic].forEach(article=>
        card.append(articleCard(article)))
}
})

.catch((err) => {
    console.log('error', err)
})



function articleCard(data){
    //DOM Component
    const card = document.createElement('card');
    const cardHead = document.createElement('dvi');
    const author = document.createElement('div');
    const cardImg = document.createElement('div');
    const Img = document.createElement('img');
    const authorName = document.createElement('span');


    //Structure Elements
    card.appendChild(cardHead);
    card.appendChild(author);

    author.appendChild(cardImg);
    author.appendChild(authorName);

    cardImg.appendChild(Img);
    console.log(Img);

    // author.appendChild(authorName);

    //Class Names 
    card.classList.add('card');
    cardHead.classList.add('headline');
    author.classList.add('author');
    cardImg.classList.add('img-container');


    //Set Content
    Img.src = data.authorPhoto;
    authorName.textContent = `By: ${data.authorName}`;
    cardHead.textContent = data.headline;


 return card
}
