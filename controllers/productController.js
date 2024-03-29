const db=require('../models')

//create main model
const Product=db.products
const review=db.reviews

//main work

//1.create product

const addProduct=async(req,res)=>{
let info={
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    published:req.body.published?req.body.published:false
    }

    const product=await Product.create(info)
    res.status(200).send(product)
    console.log(product);
}

const getAllProducts=async (req,res)=>{
    let products=await Product.findAll({
        // attributes:[
        //     'title',
        //     'price'
        // ]
    });
    res.status(200).send(products)
}

const getOneProduct=async (req,res)=>{
    let id=req.params.id;
    let product=await Product.findOne({where :{id:id}});
    res.status(200).send(product)
}

const updateProduct=async (req,res)=>{
    let id=req.params.id;
    const product=await Product.update(req.body,{where:{id:id}});
    res.status(200).send(product)
}

const deleteProduct=async (req,res)=>{
    let id=req.params.id;
    await Product.destroy({where :{id:id}});
    res.status(200).send("deleted succesfully...")
}

const publishedProduct=async (req,res)=>{
    const products=await Product.find({where :{published:true}});
    res.status(200).send(products)
}

module.exports={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    publishedProduct
}