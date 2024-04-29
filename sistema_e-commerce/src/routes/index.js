const { Router } = require('express')
const UserController = require('../controllers/UserController')
const sessionsController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')
const {authenticate} = require('../middlewares/index.js')
const routes= Router()



routes.get('/',(req,res)=>{
    res.send('ola mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users',UserController.getUsers)

routes.get('/users/:user_id',UserController.getUserById)
routes.post('/sessions',sessionsController.createSession)

routes.get('/:user_id/products', authenticate, ProductController.createProduct)
routes.post('/products/:user_id', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product-id',authenticate, ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id',authenticate, ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id',ProductController.getProductById)

routes.post('/cart/:user_id',authenticate, CartController.createCart)
routes.get('/cart/:user_id',authenticate, CartController.getUserCarts)

routes.get('/cart/:user_id/:cart_id',authenticate, CartController.getCart)

module.exports = routes