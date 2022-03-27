import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Status, StatusSchema } from './schemas/status.schema';
import { StatusService } from './services/status.service';
import { StatusController } from './controllers/status.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Status.name,
        schema: StatusSchema,
      },
    ]),
  ],
  providers: [StatusService],
  controllers: [StatusController],
  // exports: [StatusService],
})
export class StatusModule {}
