import { ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { adoptionInput } from './adoptionInput';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserInput } from './userInput';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService){}

    @Mutation(returns => User)
    async createUser(@Args('user', { type: () => UserInput }, new ValidationPipe()) user:UserInput): Promise<User>{
        try{
            return this.userService.createUser(user.name, user.email)
        }catch(e){
            throw new Error(e.message)
        }
    }

    @Mutation(returns => User)
    async adoptDog(@Args('input', { type: () => adoptionInput }, new ValidationPipe()) input:adoptionInput): Promise<User>{
        try{
            return this.userService.adoptDog(input.email, input.dogImage)
        }catch(e){
            throw new Error(e.message)
        }
    }

    @Query(returns => User)
    async getUserByEmail(@Args('email', {type: ()=> String}) email: string): Promise<User>{
        try{

            return this.userService.userByEmail(email)

        }catch(e){
            throw new Error(e.message)
        }
    }
}
