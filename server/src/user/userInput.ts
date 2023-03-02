import { Field, InputType } from "@nestjs/graphql";
import { MinLength, IsEmail } from "class-validator";

@InputType()
export  class UserInput{
    @Field()
    @MinLength(3)
    name: string;

    @Field()
    @IsEmail()
    email:string
}