import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DogBreed{

    @Field(type => [String])
    dogImages: string[];
}