import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUser, UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: MongoUser.name, schema: UserSchema }])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
