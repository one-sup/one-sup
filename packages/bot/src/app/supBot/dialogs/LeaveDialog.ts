import { Dialog, DialogContext, DialogTurnResult } from "botbuilder-dialogs";

export class LeaveDialog extends Dialog {
  constructor(dialogId: string) {
    super(dialogId);
  }

  public async beginDialog(context: DialogContext, options?: any): Promise<DialogTurnResult> {
    await context.context.sendActivity(`leaving...`);
    return await context.endDialog();
  }
}

export const leaveCommand = {
  dialog: LeaveDialog,
  prefix: "leave",
};
