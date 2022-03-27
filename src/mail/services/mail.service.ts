import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateMailDTO } from '../dtos/mail.dto';
import { Mail } from '../schemas/mail.schema';

@Injectable()
export class MailService {
  // Write the constructor with @Inject for Mail.name model as private
  constructor(@InjectModel('Mail') private mailModel: Model<Mail>) {}

  // Write the method to get all mails
  async getAll(): Promise<Mail[]> {
    return await this.mailModel.find().populate('from').populate('to').exec();
  }

  // Write the method to create a new mail
  async create(mail: CreateMailDTO): Promise<Mail> {
    const createdMail = new this.mailModel(mail);
    return await createdMail.save();
  }
}
