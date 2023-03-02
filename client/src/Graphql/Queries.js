import { gql } from "@apollo/client";



export const LOAD_USER = (email)=>{
    const userQuery = gql`
    query{
        getUserByEmail(email:"${email}"){
            name,
            email
        }
    }
`
    return userQuery
}

export const LOAD_DOGS = (breed)=>{
    const dogQuery = gql`
    query{
        dogbreed(name:"${breed}"){
            dogImages
        }
    }
`
    return dogQuery
}