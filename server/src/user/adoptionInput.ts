import { Field, InputType } from "@nestjs/graphql";
import { IsEmail } from "class-validator";

@InputType()
export  class adoptionInput{
    @Field()
    @IsEmail()
    email: string;

    @Field()
    dogImage:string
}