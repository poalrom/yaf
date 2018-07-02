'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { window } from 'vscode';
import { ICommand } from '../interfaces/ICommand';
import { createFile } from '../tools/createFile';

const createFileFromAnother: ICommand = function () {
    // If not in open editor window - exit
    if (!window.activeTextEditor) {
        return;
    }

    createFile(window.activeTextEditor.document.uri.fsPath);
}

export { createFileFromAnother };