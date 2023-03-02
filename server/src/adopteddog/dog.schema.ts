import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type DogDocument = HydratedDocument<MongoDog>;

@Schema()
export class MongoDog{

    @Prop({ required: true })
    imageUrl: string;
}

export const dogSchema = SchemaFactory.createForClass(MongoDog);