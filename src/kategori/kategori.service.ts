import { Injectable } from '@nestjs/common';
import { Kategori } from './kategori.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KategoriService {
  constructor(
    @InjectRepository(Kategori) private readonly bookRepository: Repository<Kategori>,
  ) {}
}


