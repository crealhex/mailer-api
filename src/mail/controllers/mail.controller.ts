import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateMailDTO } from '../dtos/mail.dto';
import { Mail } from '../schemas/mail.schema';
import { MailService } from '../services/mail.service';

@Controller('mails')
export class MailController {
  constructor(private mailService: MailService) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.mailService.getAll();
  }

  @Post()
  async create(@Body() mail: CreateMailDTO): Promise<Mail> {
    return await this.mailService.create(mail);
  }
}
