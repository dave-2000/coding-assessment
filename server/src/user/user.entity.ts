import { Field, ObjectType } from "@nestjs/graphql";
import { MinLength, IsEmail } from "class-validator";

@ObjectType()
export class User{
    @Field()
    @MinLength(3)
    name: string;

    @Field()
    @IsEmail()
    email: string

    @Field(type => [String], {nullable: true})
    dogs?: string[]
}