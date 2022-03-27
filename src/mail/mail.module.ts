import { Module } from '@nestjs/common';
import { MailService } from './services/mail.service';
import { MailController } from './controllers/mail.controller';
import { Status, StatusSchema } from 'src/status/schemas/status.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Mail, MailSchema } from './schemas/mail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Status.name,
        schema: StatusSchema,
      },
      {
        name: Mail.name,
        schema: MailSchema,
      },
    ]),
  ],
  providers: [MailService],
  controllers: [MailController],
  // exports: [MailService],
})
export class MailModule {}
