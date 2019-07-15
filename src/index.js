const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// app.use( (req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
    
// })

// app.use( (req, res, next) => {
//     res.status(503).send('Site is under maintenece')
// })

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     // console.log(this)
//     return {}
// }

// console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myFunc = async () => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// const bcrypt = require('bcryptjs')

// const myFunc = async () => {
//     const pass = 'Red12345'
//     const hashPass = await bcrypt.hash(pass, 8)

//     console.log(pass)
//     console.log(hashPass)

//     const isMatch = await bcrypt.compare('Red12345!', hashPass)
//     console.log(isMatch)
// }

// myFunc()

// const Task = require('./models/tasks')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('5d26f3806f12ba1600f55a39')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // const user = await User.findById('5d26f26698f03f1f1c44242a')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)

// }
// main()


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word file'))
//         }   
        
//         cb(undefined, true)
//         // cb(undefined, false)

//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }
// app.post('/upload', upload.single('upload') , (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })