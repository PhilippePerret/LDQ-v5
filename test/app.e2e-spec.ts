import { Test, TestingModule } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();
    app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
    app.setViewEngine('hbs');
    await app.init();
  });

  it("/ (GET) affiche le nom de l'organisation localisé", () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        if (!res.text.includes('Label Lecture de Qualité')) {
          throw new Error('orgName absent de la page d\'accueil');
        }
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
