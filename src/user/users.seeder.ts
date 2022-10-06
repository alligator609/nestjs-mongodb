import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DataFactory, Seeder } from "@rancid/nestjs-seeder";
import { Model } from "mongoose";

import { User } from "./user.schema";
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersSeeder implements Seeder {
  constructor(@InjectModel(User.name) private readonly user: Model<User>) {}

  async seed(): Promise<any> {
    // Generate 10 users.
    const users= [{
       name: 'yourname',
        email: 'admin@example.com',
        password: await this.hashPassword('P@55word'),
        phone: '01670502610',
        userType: 'admin'
    }];

    // Insert into the database.
    return this.user.insertMany(users);
  }

  async drop(): Promise<any> {
    return this.user.deleteMany({});
  }
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
}