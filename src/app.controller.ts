import { Controller, Get, Render } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async home(@I18n() i18n: I18nContext) {
    return { orgName: await this.appService.getOrgName(i18n.lang) };
  }
}
