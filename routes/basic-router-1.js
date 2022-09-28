const express = require('express');
const router = express.Router();


router.get('/selective', (req,res)=>{
    const newProducts = products.map(product=>{
        const {id , name , image} = product;
        return {id , name , image};
    })

    res.json(newProducts);
})


router.post('/:price', (req,res)=>{

    const {id , name} = req.body;
    const {price} = req.params;
    res.json({id , name , price});
})

module.exports = router;

