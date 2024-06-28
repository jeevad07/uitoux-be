const productModel = require('../Models/product')
const fs = require('fs');

const productController ={   
    getAllProduct:async(req,res)=>{
        try{
            const result = await productModel.find({});
            return res.status(200).send(result);
        }catch(err){
            return res.status(404).json({ message: "Error in getting the data" });
        }
    },
    savePostProducts:async(req,res)=>{
        try{
            const imgPath = req.file.path;
            const imgData = fs.readFileSync(imgPath);
            const imgBase64 = imgData.toString('base64');
            console.log("imgPath",imgBase64);
            const {productName,productCode,cost,review,ratingproductimgbase64} = req.body;
            const result = await productModel.create(req.body);
            return res.status(200).send(result);
        }catch(err){
            return res.status(404).json({ message: "Error in getting the data" });
        }
    },



}


module.exports =productController;
