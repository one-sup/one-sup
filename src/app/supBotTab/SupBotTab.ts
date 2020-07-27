import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/supBotTab/index.html")
@PreventIframe("/supBotTab/config.html")
@PreventIframe("/supBotTab/remove.html")
export class SupBotTab {
}
