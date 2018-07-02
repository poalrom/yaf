import { parseFilePath } from "./parseFilePath";
import { window, workspace } from "vscode";
import { getFilePath } from "./getFilePath";
import { writeFileSync, lstatSync } from "fs";
import { parseDirPath } from "./parseDirPath";

function createFile(filePath: string): void {
    const fileParams = lstatSync(filePath).isFile() ? parseFilePath(filePath) : parseDirPath(filePath);

    // Sort ASC by length. Simple techs ('js') should be higher then complicated ('test.js')
    window.showQuickPick(fileParams.availableTechs.sort((a, b) => a.length - b.length), {
        placeHolder: 'Choose tech for new file'
    }).then((tech) => {
        if (tech) {
            const filePath = getFilePath({ ...fileParams, tech });
            writeFileSync(filePath, '');
            workspace.openTextDocument(filePath)
                .then((doc) => window.showTextDocument(doc));
        }
    });
}

export { createFile };