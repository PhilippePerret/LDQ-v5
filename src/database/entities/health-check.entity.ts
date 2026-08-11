import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HealthCheck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'ok' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
