import { Dialog, DialogContext, DialogTurnResult } from "botbuilder-dialogs";
import { commands } from "./commands"

export class HelpDialog extends Dialog {
    constructor(dialogId: string) {
        super(dialogId);
    }

    public async beginDialog(context: DialogContext, options?: any): Promise<DialogTurnResult> {
        const otherCommands = commands.filter(c => c.prefix !== "help")
        await context.context.sendActivity(`Welcome, available commands: ${otherCommands.map(c => c.prefix).join(", ")}`);

        return await context.endDialog();
    }
}

export const helpCommand = {
    dialog: HelpDialog,
    prefix: "help"
  }
  