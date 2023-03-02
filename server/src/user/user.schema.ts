import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<MongoUser>;

@Schema()
export class MongoUser{

    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    email: string

    @Prop([String])
    dogs: [string]
}

export const UserSchema = SchemaFactory.createForClass(MongoUser);