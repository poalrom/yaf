import { CONFIG } from "../config";
import { IFileParams } from "../interfaces/IFileParams";
import { sep, extname } from "path";
import { existsSync } from "fs";

function parseFilePath(filePath: string): IFileParams {
    const fileParams: IFileParams = {
        name: '',
        tech: '',
        availableTechs: [],
        folderTree: [],
    },
        pathParts = filePath.split(sep),
        fileFullName = pathParts[pathParts.length - 1],
        fileTech = getTech(fileFullName),
        fileName = getName(fileFullName, fileTech),
        // Get not presented techs
        availableTechs = getAvailableTechs(pathParts, fileName);

    fileParams.name = fileName;
    fileParams.tech = fileTech;
    fileParams.availableTechs = availableTechs;
    fileParams.folderTree = pathParts.slice(0, -1);

    return fileParams;
}

function getTech(fullName: string): string {
    // Sort DESC by length. Find complicated tech (test.js) before simple (js)
    return CONFIG.techs.sort((a, b) => b.length - a.length)
        .find((tech) => {
            // Is fullName ends by tech
            return Boolean(fullName.match(`\\.${tech.replace(/\./g, '\\.')}$`))
        }) ||
        // If tech not presented in preconfigured techs - get file extension
        extname(fullName).substr(1);
}

function getName(fullName: string, tech: string): string {
    // Cut fileTech and dot form the end
    return fullName.substr(0, fullName.length - tech.length - 1);
}

function getAvailableTechs(pathParts: string[], name: string): string[] {
    return CONFIG.techs.filter((tech) => {
        return !existsSync(pathParts.slice(0, -1).concat(`${name}.${tech}`).join(sep))
    })
}

export { parseFilePath }