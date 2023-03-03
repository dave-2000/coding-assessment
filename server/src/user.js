
// taking this array of objects as a simple database of users
const users =[
    {  name: 'John Doe', email: 'john@example.com', dogs: [] },
    {  name: 'ujal', email: 'ujal@example.com', dogs: [] }
]


export const userResolvers = {
    Query:{
        user: (parent, args) =>{
            console.log('running...', args.email)
            const user = users.find(user => user.email === args.email)
            return user
        }
    }
}