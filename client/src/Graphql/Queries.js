import { gql } from "@apollo/client";



export const LOAD_USER = (email)=>{
    const userQuery = gql`
    query{
        user(email:"${email}"){
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
        dogbreed(breed:"${breed}"){
            dogImages
        }
    }
`
    return dogQuery
}