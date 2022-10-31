const asyncWrapper = require("../middlewares/asycWrapper");
const productsModel = require("../models/productsModel");

const url = 'https://course-api.com/react-store-products';


// const getAllProducts = asyncWrapper(async (req, res) => {
//     const response = await fetch(url);
//     const jsonData = await response.json();
//     const filterData = jsonData.map((item) => {
//         const { id, name, price, image } = item;
//         return { id, name, price, image };
//     })
//     return res.status(200).json(filterData)
// })

const getAllProducts = asyncWrapper(async(req,res,next)=>{
    const {featured , company ,name , sort , fields , numericFilters} = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = {$regex:name,$options:'i'};
    }
    if (numericFilters) {
        const operatorMap ={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(regEx,match=>`-${operatorMap[match]}-`)
        const options = ['price','rating'];
        filters = filters.split(',').forEach(element => {
            const [field,operator,value] = element.split('-');
            if (options.includes(field)) {
                queryObject[field] = {[operator]:Number(value)}
            }
        });
    }
    // console.log(queryObject);
    //apply all query at once to geyt filtered data
    let result = productsModel.find(queryObject);

    //sorting data
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }

    //selection of fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList)
    }

    //pagination on data and set the limit at once 
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page -1) * limit;
    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).json({products:products,nbHits:products.length});
})



const getAllProductsStatic = asyncWrapper(async (req,res)=>{
    const products = await productsModel.find({});
    res.status(200).json({products});
})

module.exports = {
    getAllProducts,
    getAllProductsStatic
}