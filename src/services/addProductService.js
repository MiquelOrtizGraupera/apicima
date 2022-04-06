const Model = require("../BBDD/model");

class addProductService{
    constructor(){
        this.Products = [];
    }

    create(file, user,gender, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null|| price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }

            let fileURL ="";
            if(file){
                fileURL = "http://localhost:3000/src/public/uploads/" + file.filename;
                //" https://api.imgbb.com/1/upload?key=" + "027d1d77723a43090b29521d5ea14fa9";
                //    API KEY 027d1d77723a43090b29521d5ea14fa9
            }
            console.log(file)
            const fullInfo = {
                file: fileURL,
                user: user,
                gender:gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.Products.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }
}

module.exports = addProductService;