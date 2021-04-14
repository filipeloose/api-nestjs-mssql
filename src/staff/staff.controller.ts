import { Controller, Get, Param } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  async findAll(): Promise<Staff[]> {
    return this.staffService.findAll();
  }
  @Get(':id')
  getById(@Param() id: number) {
      return this.staffService.getById(id);
    
  }
}
