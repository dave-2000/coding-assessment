import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class adopteddog{
    @Field()
    imageUrl: string;
}