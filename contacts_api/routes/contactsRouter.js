const express = require('mongoose')
const contactsModel = require('../model/contactschema')

//* Router
const router = express.Router()

router.get('/', async (req, res) =>{
    try {
        const contacts = await contactsModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error)
    }
})

//*Create Todos 
router.post('/', async (req, res) => {
    const todoData = req.body // gets the data from the request

    try {
        const contacts = await contactsModel.create(todoData) // create todo in the db
        // send back the response
        res.status(201).json(contacts)
        // res.status(201).json({data: todo})
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!')
    }
})

//* GET TODO BY ID
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const contacts = await contactsModel.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg:'Id not found'
        })
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newContacts = req.body
     try {
         //* find the todo by the id
         const todo = await contactsModel.findByIdAndUpdate(id, newContacts, {new: true})
         res.status(202).json(todo)
     } catch (error) {
         console.log(error)
     }
})

module.exports = router