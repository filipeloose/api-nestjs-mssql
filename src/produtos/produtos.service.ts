import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtos } from './Produtos.entity';

@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(Produtos)
        private readonly produtosRepository: Repository<Produtos>,
      ) {}
    
    async findAll(): Promise<Produtos[]> {
      //return await this.produtosRepository.find();
      return await this.produtosRepository.createQueryBuilder("Produtos").select(["Produtos.cDProd, Produtos.nomeProduto"]).getMany();
    }
    
}
