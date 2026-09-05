import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { HealthCheck } from './entities/health-check.entity';
import { User } from './entities/user.entity';

config();

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [HealthCheck, User],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
});
