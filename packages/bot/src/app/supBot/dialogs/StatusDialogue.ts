import { Dialog, DialogContext, DialogTurnResult } from "botbuilder-dialogs";

export class StatusDialog extends Dialog {
  constructor(dialogId: string) {
    super(dialogId);
  }

  public async beginDialog(context: DialogContext, options?: any): Promise<DialogTurnResult> {
    await context.context.sendActivity(`Your status: x`);
    return await context.endDialog();
  }
}

export const statusCommand = {
  dialog: StatusDialog,
  prefix: "status",
};
