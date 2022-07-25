import { BrowserView } from 'electron'

import prompt from './window.prompt'

const patches: string[] = [prompt]

export function patch(view: BrowserView) {
    patches.forEach((code) => view.webContents.executeJavaScript(code))
}
