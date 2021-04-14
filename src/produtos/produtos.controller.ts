import { ProdutosService } from './produtos.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Produtos } from './Produtos.entity';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) {}

    
  @Get()
  async findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }
  @Get(':id')
  getById(@Param() id: number) {
      return this.produtosService.getById(id);
    
  }
}
