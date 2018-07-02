import { workspace } from 'vscode';
import { IConfig } from './interfaces/IConfig';

let userConfig = workspace.getConfiguration('yaf');

const CONFIG: IConfig = {
    techs: userConfig.techs.split(',')
};

export { CONFIG };