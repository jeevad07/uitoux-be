const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController')
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


router.get('/getAllProducts',productController.getAllProduct);
router.post('/saveproduct', upload.single('image') , productController.savePostProducts);




module.exports = router;