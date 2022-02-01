//const API_JOKE_URL = 'https://icanhazdadjoke.com/';
const API_CRIPTO_URL = "https://api.coincap.io/v2/assets/";

const fetchJoke = (url, title) => {
  const container = document.getElementById("section-frames");
  const hTitle = document.getElementById('title');
  hTitle.innerText = title;

  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

/* 
  const promisse = fetch(url);
  const formatJson = promisse.then((response)=> response.json());
  formatJson.then((object) => joke.innerText = object.data.id);
*/
  
    fetch(url)
    .then((response)=> response.json())
    .then((result)=> {

      result.data.map((bit, index) => {

        const valorBit = parseFloat(bit.priceUsd).toFixed(2)

        if(index <= 11){
          const div = document.createElement('div');
          div.classList.add('box');

          const symbol = document.createElement('h2');
          symbol.innerText =`${bit.name} (${bit.symbol})`;
          
          const price = document.createElement('p');
          price.innerText = `$ ${valorBit}`;
                
          div.appendChild(symbol);  
          div.appendChild(price);
          container.appendChild(div);
          
        }

       
              
      }) 

    })


  /*  
    try {
    const response = await fetch(url);  
    const result = await response.json();  
    joke.innerHTML = result.data.id;
               
  } catch (error) {
    console.log('Error')    
  } */
};

window.onload = () => fetchJoke(API_CRIPTO_URL, 'As 10 maiores Criptmoedas');
