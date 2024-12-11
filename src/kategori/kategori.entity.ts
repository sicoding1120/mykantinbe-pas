import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kategori extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
}
