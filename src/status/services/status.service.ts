import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Status } from '../schemas/status.schema';

@Injectable()
export class StatusService {
  // Write the constructor with @Inject for Product.name model as private
  constructor(@InjectModel(Status.name) private productModel: Model<Status>) {}

  // Write the method to get all products
  async getAll(): Promise<Status[]> {
    return await this.productModel.find().exec();
  }
}
