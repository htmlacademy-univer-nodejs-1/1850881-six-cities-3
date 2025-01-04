import {Config} from './config.interface.js';
import {LoggerInterface} from '../logger/logger.interface.js';
import {config} from 'dotenv';
import {restSchemaConfig, RestSchema} from './rest.schema.js';
import {inject, injectable} from 'inversify';
import {AppComponent} from '../../types/app-component.enum.js';

@injectable()
export default class ConfigService implements Config<RestSchema> {
  private readonly config: RestSchema;

  constructor(@inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface) {
    const parsedOutput = config();
    if (parsedOutput.error) {
      throw new Error('Can\'t read .env file');
    }
    restSchemaConfig.load({});
    restSchemaConfig.validate({allowed: 'strict', output: this.logger.info});
    this.config = restSchemaConfig.getProperties();
    this.logger.info('.env file found and successfully parsed');
  }

  public get<T extends keyof RestSchema>(key: T): RestSchema[T] {
    return this.config[key];
  }
}
