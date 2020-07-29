import { Dialog, DialogContext, DialogTurnResult } from "botbuilder-dialogs";

export class JoinDialog extends Dialog {
  constructor(dialogId: string) {
    super(dialogId);
  }

  public async beginDialog(context: DialogContext, options?: any): Promise<DialogTurnResult> {
    await context.context.sendActivity(`Adding you to the S'up list`);
    return await context.endDialog();
  }
}

export const joinCommand = {
  dialog: JoinDialog,
  prefix: "join",
};
