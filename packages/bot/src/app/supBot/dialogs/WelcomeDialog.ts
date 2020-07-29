
export default {
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.2",
  "body": [
    {
      "type": "TextBlock",
      "spacing": "medium",
      "size": "default",
      "weight": "bolder",
      "text": "Welcome to sup-teams-bot",
      "wrap": true,
      "maxLines": 0
    },
    {
      "type": "TextBlock",
      "size": "default",
      "isSubtle": true,
      "text": "Hello, nice to meet you!",
      "wrap": true,
      "maxLines": 0
    }
  ],
  "actions": [
    {
      "type": "Action.OpenUrl",
      "title": "Learn more about Yo Teams",
      "url": "https://aka.ms/yoteams"
    },
    {
      "type": "Action.OpenUrl",
      "title": "sup-teams-bot",
      "url": "https://onesup.azurewebsites.net"
    }
  ]
};