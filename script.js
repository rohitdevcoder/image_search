 const api_key = "ckGYnV89JOnRplGUIYvZo5rFJq1VBprvlINaXG6Df7I";

const formEl = document.querySelector("form");
const inputEl = document.querySelector(".input_search");
const searchReasult = document.querySelector(".search_result");
const showMore = document.querySelector(".see_more");

let inputData = "";
let page = 1;

async function  searchImages(){
    inputData = inputEl.value;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api_key}`;

    const response = await fetch(URL);
    const data = await response.json();
    const results = data.results;

    if (page === 1){
        searchReasult.innerHTML = "";
    }

    results.map((result)=>{
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("search_div");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.innerText = result.alt_description;


        imageContainer.appendChild(image);
        imageContainer.appendChild(imageLink);
        searchReasult.appendChild(imageContainer);
        //something write later

    })
    page++;
    if(page>1)
    {
       showMore.style.display="block"; 
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})
showMore.addEventListener("click",()=>{
    searchImages();
})