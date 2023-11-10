const { User } = require('../models');

const userData=[
    {
        id:1,
        name: "Gina",
        email:"Gina@test.com",
        password:"password123"
    },
    {
        id:2,
        name:"Francis",
        email:"francis@test.com",
        password:"password123"
    },
    {
        id:3,
        name:"Charlotte",
        email:"charlie@test.com",
        password:"password123"
    }
]

const seedUser =()=>User.bulkCreate(userData,{
    individualHooks:true,
    returning:true
})

module.exports=seedUser