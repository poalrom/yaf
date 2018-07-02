import { createFile } from "../tools/createFile";
import { ICommand } from "../interfaces/ICommand";
import * as vscode from "vscode";

const createFileInDir: ICommand = function (dirPath: vscode.Uri) {
    createFile(dirPath.fsPath);
}

export { createFileInDir };