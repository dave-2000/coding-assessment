import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { MongoUser, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    // initialize mongodb user model
    constructor(@InjectModel(MongoUser.name) private UserModel: Model<UserDocument>) {}

    async createUser(name:string, email:string): Promise<User>{
        const userModel = new this.UserModel()
        userModel.name = name
        userModel.email = email

        try{
            const newUser = await userModel.save()

            const user = new User()
            user.name = newUser.name
            user.email = newUser.email
            return user
        }catch(e){
            throw new Error(e.message)
        }
    }

    async userByEmail(email:string): Promise<User>{
        try{
            const user = await this.UserModel.findOne({email})
            return user
        }catch(e){
            throw new Error(e.message)
        }
        
    }

    async adoptDog(email:string, dogImage:string): Promise<User>{
        try{
            const user = await this.UserModel.findOne({email})
            console.log('old dogs', user.dogs)
            const dumUser = {name: user.name, email: user.email, dogs: user.dogs.push(dogImage)}
            console.log('dummy user','real user', dumUser, user)
            user.set(dumUser)
            return user
        }catch(e){
            throw new Error(e.message)
        }
    }
}
