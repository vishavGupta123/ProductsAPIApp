const express=require('express');
const router=express.Router();
const productApi=require('../../controller/api/products_api_controller');

router.post('/create',productApi.create);
router.get('/',productApi.index);
router.delete('/:id',productApi.destroy);
router.post('/:id/update_quantity',productApi.update);

module.exports=router;