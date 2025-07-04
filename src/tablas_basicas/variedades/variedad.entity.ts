import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'variedad_tbl', schema: 'tablas_basicas', synchronize: false })
export class Variedad {
  @PrimaryGeneratedColumn()
  id_variedad: number;

  @Column()
  nombre_variedad: string;
}
