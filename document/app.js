const cardsArray = [
  {
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "image": "https://pngimg.com/d/jacket_PNG8054.png"  
  },
  {
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "image": "https://pngimg.com/d/jacket_PNG8048.png"  
  },
  {
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "image": "https://freepngdownload.com/image/thumb/jacket-png-free-download-7.png"  
  },
  {
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "image": "https://www.pngplay.com/wp-content/uploads/4/Jacket-PNG-Pic-Background.png" 
  }
]

const container = document.querySelector(".container")


cardsArray.forEach((e) => {

  const box = document.createElement("div")
  box.className = "box"

  const img = document.createElement("img")
  img.src = e.image

  const title = document.createElement("h3")
  title.innerHTML = e.title

  const p = document.createElement("p")
  p.innerHTML = e.description

  const price = document.createElement("div")
  price.className = "price"
  price.innerHTML = e.price + "$"


  box.appendChild(img)
  box.appendChild(title)
  box.appendChild(p)
  box.appendChild(price)

  container.appendChild(box)

})
