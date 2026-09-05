import { MigrationInterface, QueryRunner } from "typeorm";

export class InitHealthCheck1786462703717 implements MigrationInterface {
    name = 'InitHealthCheck1786462703717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "health_check" ("id" SERIAL NOT NULL, "status" character varying NOT NULL DEFAULT 'ok', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bb6ae6b7bca4235bf4563eaeaad" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "health_check"`);
    }

}
