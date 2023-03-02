import { Module } from '@nestjs/common';
import { AdopteddogService } from './adopteddog.service';
import { AdopteddogResolver } from './adopteddog.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDog, dogSchema } from './dog.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: MongoDog.name, schema: dogSchema }])],
    providers: [AdopteddogService, AdopteddogResolver]
})
export class AdopteddogModule {}
