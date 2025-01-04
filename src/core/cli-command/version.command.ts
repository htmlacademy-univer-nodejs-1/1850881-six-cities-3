import chalk from 'chalk';
import pkg from '../../../package.json' assert {type: 'json'};
import {CliCommand} from './cli-command.interface.js';

export default class VersionCommand implements CliCommand {
  public readonly name = '--version';

  private readVersion(): string {
    return pkg.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(chalk.blue.bold(version));
  }
}
