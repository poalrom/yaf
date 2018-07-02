import { IFileParams } from "../interfaces/IFileParams";
import { sep } from "path";

function getFilePath(fileParams: IFileParams): string {
    return fileParams.folderTree.concat(`${fileParams.name}.${fileParams.tech}`).join(sep);
}

export { getFilePath };