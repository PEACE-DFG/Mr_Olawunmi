fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{
  // console.log(data)
  // check if data is an array or an object with a single key
  if(!Array.isArray(data)){
    // if data is an object with a single key extract the data from the array
    if(data && Array.isArray(data.products)){
      data = data.products;
    }
    else{
      console.log(data)
    }
  }
  // Get the container of the html element to display the products
  const productContainer= document.getElementById('product-container');

  // Iterate over the Products using forEach method

  data.forEach(product => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4','mb-3');
    console.log(product);

    cardDiv.innerHTML =`
    <div class='card' style='width:250px;height:370px;box-shadow:10px 10px 15px grey'>
      <img src="${product.images[0]}" class="img-fluid img-top" style="height:150px" alt="${product.title}" />
      <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
   
  </div>
    </div>
    `;

    productContainer.appendChild(cardDiv);
    
  });
  
});