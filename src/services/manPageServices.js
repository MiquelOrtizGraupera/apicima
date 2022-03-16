
class ManProducts{
    constructor() {
        this.manProducts = [];
    }

    create(user, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null ||price === null){
                return reject("Faltan datos, único no oblitario és descripción");
            }
            const id = this.manProducts.length + 1
            const fullInfo = {
                id : id,
                user: user,
                product: product,
                description: description,
                price: price
            }

            resolve( this.manProducts.push(fullInfo));
        });
    }

    find(){
        return this.manProducts;
    }

    findOne(id){
        let lista = this.manProducts;
        for (let i = 0; i < lista.length ; i++) {
            if(lista[i].id.toString() === id){
                return lista[i];
            }
        }
    }

    update(id, changes){

    }

    delete(id){
        let lista = this.manProducts;
        console.log("Apunto de entrar")
        for (let i = 0; i < lista.length ; i++) {
            console.log("Uf estoy dentro")
            if(lista[i].id.toString() === id){
                console.log("En el if")
                this.manProducts.splice(lista[i].id);
                console.log("No hablo español")
                return this.manProducts;
            }
        }
    }
}

module.exports = ManProducts;