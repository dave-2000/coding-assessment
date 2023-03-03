const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')

const axios = require('axios');
const cors = require("cors");

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

const users = [
    {name:'john', email:'abc@xyz.com', dogs:[]},
    {name:'johnd', email:'abcd@xyz.com', dogs:['fdjfjdfjjdfj']}
]



// defining types

const UserType = new GraphQLObjectType({
    name:'user',
    description: 'a user object',
    fields: () =>({
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        dogs: {type: new GraphQLList(GraphQLString)}
    })
})

const DogBreedType = new GraphQLObjectType({
    name:'dogbreed',
    description: 'represnts the breed of dogs as returned by the dog.ceo public api',
    fields: ()=>({
        dogImages: {type: new GraphQLList(GraphQLString)}
    })
})

const getDogs =async (breed)=>{
    // fetch dog images from dog.ceo
    const url = `https://dog.ceo/api/breed/${breed}/images`
    try{
        const res = await axios.get(url)
        return {dogImages: res.data.message}
    }catch(e){
        throw new Error(e.message)
    }
}

const validateEmail =(email)=>{
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const handleCreateUser =(name, email)=>{
    // email must be email
    // name must be more than three characters
    if (validateEmail(email)){
        if (name.length >= 3){
            const user = {name, email, dogs:[]}
            users.push(user)
            return user
        } else{
            throw new Error('name must be at least 3 characters')
        }
        
    } else{
        throw new Error('email must be an email')
    }
    
}

const handleAdoption =(email, dogImage)=>{
    let user = {name:'no', email:'show'}

    for(i=0; i<users.length; i++){
        if (users[i].email === email){
            if (users[i].dogs === undefined){
                users[i].dogs=[dogImage]
            }else{
                users[i].dogs.push(dogImage)
            }
            user = users[i]
            return user
        }
    }
    return user
}

// define the root query
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    user:{
        type: UserType,
        description: 'returns a user by email',
        args:{
            email: {type: GraphQLString}
        },
        resolve: (parent, args) => users.find(user => user.email === args.email)
    },
    dogbreed:{
        type: DogBreedType,
        description: 'returns a dog breed from dog.ceo',
        args:{
            breed: {type: GraphQLString}
        },
        resolve: (parent, args)=>(getDogs(args.breed))
    }
  })
})


// specify the mutations
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addUser:{
        type: UserType,
        description: 'create a new user',
        args: {
            name: {type: new GraphQLNonNull(GraphQLString)},
            email: {type: new GraphQLNonNull(GraphQLString)}
        },
        resolve:(parent, args) =>(handleCreateUser(args.name, args.email))
    },
    adoptDog:{
        type: UserType,
        description: 'add a dog image to users array',
        args:{
            email:{type: new GraphQLNonNull(GraphQLString)},
            dogImage: {type: new GraphQLNonNull(GraphQLString) }
        },
        resolve:(parent, args) => (handleAdoption(args.email, args.dogImage))
    }
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}), )
app.listen(3000, () => console.log('Server Running'))