import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { Status } from '../schemas/status.schema';
import { StatusService } from '../services/status.service';

@Controller('status')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  @ApiOperation({ summary: 'Get all statuses' })
  async getAll(): Promise<Status[]> {
    return await this.statusService.getAll();
  }
}
