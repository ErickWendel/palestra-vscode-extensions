import { Disposable, window, StatusBarItem, StatusBarAlignment } from 'vscode'
import { activate } from './extension';

export default class RecorrencyController {
    private _disposable: Disposable;
    private _statusBarItem: StatusBarItem;

    constructor() {
        this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        // subscribe to selection change and editor activation events
        let subscriptions: Disposable[] = [];
        window.onDidChangeTextEditorSelection(this._onEvent, this, subscriptions);
        window.onDidChangeActiveTextEditor(this._onEvent, this, subscriptions);
 
        this.check('Erick');

        // create a combined disposable from both event subscriptions
        this._disposable = Disposable.from(...subscriptions);
    }
    public check(name: string) {
        const editor = window.activeTextEditor;
        if (!editor) {
            this._statusBarItem.hide();
            return;
        }
        editor.edit(builder => {
            const document = editor.document.getText();
            const recorrencies = document.split(name).length -1;
            this._statusBarItem.text = `The word ${name} haves ${recorrencies} recorrencies`;
            this._statusBarItem.show();
        })
    }
    dispose() {
        this._disposable.dispose();
    }

    private _onEvent() {
        this.check('Erick');
    }
}