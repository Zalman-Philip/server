const jsonfile = require("jsonfile");
const data = "data/productsData.json";

const productsData = async () => {
        try {
                const products = await jsonfile.readFile(data)
                return Promise.resolve(products)  
        } catch (error) {
                return Promise.reject(error)
        }
        
}

const writeProducts = async (product) => {
        try {
                jsonfile.writeFile(data, product)
                return Promise.resolve(product)  
        } catch (error) {
                return Promise.reject(error)
        }
        
}

module.exports = {productsData, writeProducts}