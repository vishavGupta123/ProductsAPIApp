const Product=require('../../Models/products');

//add new product to database
module.exports.create= async function(req,res){
    console.log(req.body);
   try{
   let product= await  Product.create({
       id:req.body.id,
        name:req.body.name,
        quantity:req.body.quantity
    });
    
    
    return res.json(200,{
        data:{
            product:{
                name:product.name,
                quantity:product.quantity
            }
        }
        
    })
   }catch(err){
       console.log(err);
       return res.json(500,{
           message:"cannot create a product"
       });
   }
}

//displaying all products present inside the database in the form of Api
module.exports.index=async function(req,res){
    let product=await Product.find({});
    return res.json(200,{
        product:product
    });
}


//deleting the product with given product id
module.exports.destroy=async function(req,res){
    try{
        let product=await Product.findById(req.params.id);
        product.remove();
        return res.json(200,{
            message:"Product is deleted successfully"
        })
    }catch(err){
        return res.json(500,{
            message:"Cannot able to create a product"
        });
    }
}

//update the quantity of the product
module.exports.update=async function(req,res){
    try{
        let product=await Product.findById(req.params.id);
        product.quantity=req.query.number;
        return res.json(200,{
            product:{
                id:product.id,
                name:product.name,
                quantity:product.quantity
            },
            message:"Product updated successfully"
        })
    }catch(err){
        return res.json(500,{
            message:"Internal server error"
        })
    }
}