import { Test, TestingModule } from '@nestjs/testing';
import { I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'fr',
          loaderOptions: {
            path: join(__dirname, 'i18n'),
          },
        }),
      ],
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it("retourne le nom de l'organisation en français", async () => {
    expect(await service.getOrgName('fr')).toBe('Label Lecture de Qualité');
  });
});
