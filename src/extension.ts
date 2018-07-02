'use strict';

import * as vscode from 'vscode';
import { commandList } from './commands/index';

export function activate(context: vscode.ExtensionContext) {
    Object.keys(commandList).forEach((command) => {
        vscode.commands.registerCommand(
            `extension.${command}`,
            commandList[command].bind(context)
        );
    });
}

export function deactivate() {
}