const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// Creating model



// const me = new User({
//     name: '     Ron   Kapoor ',
//     email: 'raunaq@examplE.com ',
//     password: 'PasSword'

// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })



// const task = new Task({
//     description: '    Learnsomething'
// })

// task.save().then( () => {
//     console.log(task)
// }).catch( (error) => {
//     console.log(error)
// })