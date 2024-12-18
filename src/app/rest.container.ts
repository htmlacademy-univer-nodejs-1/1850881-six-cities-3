import Application from './rest.js';
import {AppComponent} from '../types/app-component.enum.js';
import {LoggerInterface} from '../core/logger/logger.interface.js';
import PinoService from '../core/logger/pino.service.js';
import {ConfigInterface} from '../core/config/config.interface.js';
import {RestSchema} from '../core/config/rest.schema.js';
import ConfigService from '../core/config/config.service.js';
import {DatabaseClientInterface} from '../core/db-client/db-client.interface.js';
import MongoClientService from '../core/db-client/mongo-client.service.js';
import {Container} from 'inversify';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();
  restApplicationContainer.bind<Application>(AppComponent.Application).to(Application).inSingletonScope();
  restApplicationContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();
  restApplicationContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  restApplicationContainer.bind<DatabaseClientInterface>(AppComponent.DatabaseClientInterface).to(MongoClientService).inSingletonScope();
  return restApplicationContainer;
}
