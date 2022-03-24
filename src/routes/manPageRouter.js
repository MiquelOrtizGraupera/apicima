//Import mainPageServices to use it's logic
const express = require("express");
const ManProducts = require("../services/manPageServices");
//Instance AllProducts class
const products = new ManProducts();

//Route to module our API logic
const router = express.Router();

//Get all man products
router.get('/',(request,  response)=>{
    products.find()
        .then(() =>{
            console.log("Hola")
            response.send(products);
        })
        .catch(() =>{
            console.log("WRONG CATCH REQUEST")
        })
});

//Get one man product
router.get('/:id',(request,response)=>{
    products.findOne(request.params.id)
        .then(() =>{
            response.send(products);
        })
        .catch(() =>{
            console.log("Ups algo salio mal!")
        })
});

//Create one man product
router.post('/',(request,response)=>{
    products.create(request.body.user,request.body.product, request.body.description,request.body.price)
        .then(() =>{
            response.json('Creado perfectamente');
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});

//Update one man product
router.patch('/:id',(request,response)=>{
    products.update(request.params.id,request.body.user, request.body.product, request.body.description, request.body.price)
        .then(()=>{
            response.success(products);
        })
        .catch(() =>{
            response.send("Algo salio mal");
        })
});

//Delete one man product
router.delete('/:id',(request,response)=>{
    products.delete(request.url.slice(1))
        .then(() =>{
            response.json("Elemento borrado perfectamente")
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});

module.exports = router;