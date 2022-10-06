
import { MongooseModule } from "@nestjs/mongoose";
import { seeder } from "@rancid/nestjs-seeder";
import { User, UserSchema } from "./user/user.schema";
import { UsersSeeder } from "./user/users.seeder";

seeder({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/amazon"),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
}).run([UsersSeeder]);