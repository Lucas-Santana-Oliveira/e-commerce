const Cart = require('../../models/Cart')

const CartController ={

    async createCart(req,res){

        const bodyData = req.bodyData
        const {user_id} = req.params

        try{
            const createCart = await Cart.create({...bodyData,username:user_id})
            await createCart.populate('products').execPopulate()
            return res.status(200).json(createCart)
        }
        catch (err){
            return res.status(400).json(err)
        }

    },
    async getUserCarts(req,res){
        
        const {user_id} = req.params
        
        try{
            const userCarts = await Cart.find({user_id}).populate('products')
            return res.status(200).json(userCarts)
        }
        catch (err){
            return res.status(400).json(err)
        }

    },
    async getCart(req,res){

        const {user_id, cart_id} = req.params
        try{

            const cart = await Cart.findById(cart_id).populate('products')
            return res.status(200).json(cart)

        }
        catch (err){
            return res.status(400).json(err)
        }

    }



}


module.exports = CartController