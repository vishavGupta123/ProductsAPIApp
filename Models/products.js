const mongoose=require('mongoose');

//creating product collection
const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name :{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        reqired:true
    }
});

const Product=mongoose.model('Product',productSchema);

module.exports=Product;