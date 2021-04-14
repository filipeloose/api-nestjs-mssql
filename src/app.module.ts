import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StaffModule } from 'staff/staff.module';
import { ProdutosModule } from './produtos/produtos.module';


@Module({
  imports: [TypeOrmModule.forRoot(), StaffModule, ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
