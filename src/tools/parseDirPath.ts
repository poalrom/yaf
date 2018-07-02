import { CONFIG } from "../config";
import { IFileParams } from "../interfaces/IFileParams";
import { sep } from "path";
import { existsSync } from "fs";
import { workspace } from "vscode";

function parseDirPath(dirPath: string): IFileParams {
    const fileParams: IFileParams = {
        name: '',
        tech: '',
        availableTechs: [],
        folderTree: [],
    },
        pathParts = dirPath.split(sep),
        fileTech = '',
        fileName = getName(dirPath);

    fileParams.name = fileName;
    fileParams.tech = fileTech;
    fileParams.availableTechs = getAvailableTechs(pathParts, fileName);
    fileParams.folderTree = pathParts;

    return fileParams;
}

function getName(dirPath: string): string {
    console.log(dirPath);
    if (!workspace.workspaceFolders) {
        throw new Error('Workspace not exists');
    }
    let dirParts = dirPath.substr(workspace.workspaceFolders[0].uri.fsPath.length + 1).split(sep),
        fileName = '';
    while (dirParts.length > 0){
        fileName = dirParts.pop() + fileName;
        if (fileName[0] !== '_'){
            return fileName;
        }
    }
    throw new Error('Can\'t create entity name');
}

function getAvailableTechs(pathParts: string[], name: string): string[] {
    return CONFIG.techs.filter((tech) => {
        return !existsSync(pathParts.concat(`${name}.${tech}`).join(sep))
    })
}



export { parseDirPath }