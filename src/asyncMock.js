
const products = [
    {id: 1,
     name: "Campera 1", 
     category: "campera", 
     stock: 10, 
     price: 1200, 
     talle: "L",
     img: "../assets/img/camperas.jpg"},
    

    {id: 3, 
    name: "Campera 3", 
    category: "campera", 
    stock: 10, 
    price: 1200, 
    talle: "M",
    img: "../assets/img/camperas.jpg"},

    {id: 4, 
    name: "Campera 4", 
    category: "campera", 
    stock: 10, 
    price: 1400, 
    talle: "M",
    img: "../assets/img/camperas.jpg"},

    {id: 2, 
    name: "Campera 2", 
    category: "campera", 
    stock: 10, 
    price: 1100, 
    talle: "L",
    img: "../assets/img/camperas.jpg"},

    {id: 5, 
    name: "Campera 5", 
    category: "campera", 
    stock: 10, 
    price: 1200, 
    talle: "S",
    img: "../assets/img/camperas.jpg"},

    {id: 6, 
    name: "Campera 6", 
    category: "campera", 
    stock: 10, 
    price: 1500, 
    talle: "S",
    img: "../assets/img/camperas.jpg"},

    {id: 7, 
    name: "Remera 1", 
    category: "remera", 
    stock: 10, 
    price: 500, 
    talle: "L",
    img: "../assets/img/remeras.jpg"},

    {id: 8, 
    name: "Remera 2", 
    category: "remera", 
    stock: 10, 
    price: 500, 
    talle: "L",
    img: "../assets/img/remeras.jpg"},

    {id: 9, 
    name: "Remera 3", 
    category: "remera", 
    stock: 10,   
    price: 500, 
    talle: "M",
    img: "../assets/img/remeras.jpg"},

    {id: 10, 
    name: "Remera 4", 
    category: "remera", 
    stock: 10, 
    price: 700, 
    talle: "M",
    img: "../assets/img/remeras.jpg"},

    {id: 11, 
    name: "Remera 5", 
    category: "remera", 
    stock: 10, 
    price: 700, 
    talle: "S",
    img: "../assets/img/remeras.jpg"},

    {id: 12, 
    name: "Remera 6", 
    category: "remera", 
    stock: 10, 
    price: 700, 
    talle: "S",
    img: "../assets/img/remeras.jpg"},

    {id: 13, 
    name: "Camisa 1", 
   category: "camisa", 
    stock: 10, 
    price: 900, 
    talle: "L",
    img: "../assets/img/remeras.jpg"},

    {id: 14, 
    name: "Camisa 2", 
    category: "camisa", 
    stock: 10, 
    price: 1400, 
    talle: "S",
    img: "../assets/img/remeras.jpg"},

    {id: 15, 
    name: "Camisa 3", 
    category: "camisa", 
    stock: 100, 
    price: 7000, 
    talle: "L",
    img: "../assets/img/remeras.jpg"},

    {id: 16, 
    name: "Camisa 4", 
    category: "camisa", 
    stock: 10, 
    price: 777, 
    talle: "S",
    img: "../assets/img/remeras.jpg"},

    {id: 17, 
    name: "Camisa 5", 
    category: "camisa", 
    stock: 10, 
    price: 234, 
    talle: "S",
    img: "../assets/img/remeras.jpg"},

    {id: 18, 
    name: "Camisa 6", 
    category: "camisa", 
    stock: 10, 
    price: 155600, 
    talle: "M",
    img: "../assets/img/remeras.jpg"},

    {id: 19, 
    name: "Pantalon 1", 
    category: "pantalon", 
    stock: 10, 
    price: 1600, 
    talle: "L",
    img: "../assets/img/pantalones.png"},

    {id: 20, 
    name: "Pantalon 2", 
    category: "pantalon", 
    stock: 10, 
    price: 3200, 
    talle: "L",
    img: "../assets/img/pantalones.png"},
    
    {id: 21, 
    name: "Pantalon 3", 
    category: "pantalon", 
    stock: 10, 
    price: 2300, 
    talle: "M",
    img: "../assets/img/pantalones.png"},

    {id: 22, 
    name: "Pantalon 4", 
    category: "pantalon", 
    stock: 10, 
    price: 5600, 
    talle: "M",
    img: "../assets/img/pantalones.png"},

    {id: 23, 
    name: "Pantalon 5", 
    category: "pantalon", 
    stock: 10, 
    price: 1700, 
    talle: "S",
    img: "../assets/img/pantalones.png"},

    {id: 24, 
    name: "Pantalon 6", 
    category: "pantalon", 
    stock: 10, 
    price: 800, 
    talle: "S",
    img: "../assets/img/pantalones.png"}
]
export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById= (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.find(gato => gato.id===productId))
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(product => product.category===categoryId))
        }, 500);
    })

 
}