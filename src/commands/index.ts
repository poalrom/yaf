import { createFileFromAnother } from "./createFileFromAnother";
import { createFileFromExplorerContext } from './createFileFromExplorerContext';
import { createFileInDir } from './createFileInDir';
import { ICommandList } from "../interfaces/ICommandList";

const commandList: ICommandList = {
    createFileFromAnother,
    createFileFromExplorerContext,
    createFileInDir
};

export { commandList };