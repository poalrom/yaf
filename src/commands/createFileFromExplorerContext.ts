import { createFile } from "../tools/createFile";
import { ICommand } from "../interfaces/ICommand";
import { Uri } from "vscode";

const createFileFromExplorerContext: ICommand = function (filePath: Uri) {
    createFile(filePath.fsPath);
}

export { createFileFromExplorerContext };