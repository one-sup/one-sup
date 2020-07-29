# One S'up

A Microsoft hackathon 2020 project to meet new people across the company and learn what’s on their mind through randomised diverse virtual standups.

This project is based on Artsy’s similarly named project “[s’up](https://github.com/artsy/sup)”, but built on MS infrastructure and for MS scale.

- **URLs:** [production](https://www.typescriptlang.org)
- **Admin:** Prod: [Resource Group](https://portal.azure.com/?quickstart=true#@msnortatherox.onmicrosoft.com/resource/subscriptions/fde7b4d5-654e-4aa5-8633-fa9c0ade65f2/resourceGroups/one-sup/overview), [Bot Registration](https://portal.azure.com/?quickstart=true#@msnortatherox.onmicrosoft.com/resource/subscriptions/fde7b4d5-654e-4aa5-8633-fa9c0ade65f2/resourceGroups/one-sup/providers/Microsoft.BotService/botServices/sup-bot/overview), [App Insights](https://portal.azure.com/?quickstart=true#@msnortatherox.onmicrosoft.com/resource/subscriptions/fde7b4d5-654e-4aa5-8633-fa9c0ade65f2/resourceGroups/one-sup/providers/microsoft.insights/components/sup-botidcgcc/overview)


## No one is an island.

A human connection is often the first step toward new inspiration and motivation towards changes that truly affect real people and their situation.

For instance, in order to learn about how to best design a new product, one must first learn what people need; or, even more rudimentary, you have to learn that there is a need at all in order to come up with the product. On the other hand, when you have made a product you need to hear from as many people as possible how they use the product and if they have any feedback to offer. Both of these cases do not only require talking to many people, but especially requires you to talk to a diverse set of people.

Work is not always about getting down to business, though. It is a team effort and a team consists of people foremost. Connections do not need to need to directly lead to business opportunities; in principle the human connection itself, the personal support, and the empathy building is the reward. In the end, more often than not, allowing people to thrive as humans means that as a side-effect the company will thrive.

The **One Microsoft** mission–achieving a boundary-less organization–is a noble one, yet can sometimes be hard to organically achieve. As much as we want to, there are still psychological and physical boundaries. However, [especially] in times like these–as we all deal with the pandemic and civil unrest–where we are forced to work remotely and take away some of these boundaries, we should seize the opportunity to rise to the occasion.

“**One S'up**” [pronounced in a mumbling fashion like “what’s up”] aims to connect random sets of people across the company, organisations, and levels for a 15 minute standup. The program does this by keeping track of who have previously been selected to ensure one always meets new people, creates one or more date/time suggestions based on their agendas, and starts a Teams chat with the selected people to introduce them to each other and as a place to have the Teams video meeting.

## This Repo

This repo is a monorepo containing a Teams Bot, an Azure Function app and a core library.

- Run all build processing: `yarn build`
- Run watcher for build processing: `yarn build:watch`
- Run all tests: `yarn test`

#### [`packages/bot`](./packages/bot)

The Teams Bot: A TypeScript express server which leans heavily on [@microsoft/teams-js](https://docs.microsoft.com/en-us/javascript/api/overview/msteams-client) and [botbuilder](https://dev.botframework.com).

 - Start: `yarn workspace bot start`
 - Tests: `yarn workspace bot test`

#### [`packages/core`](./packages/core)

A logic-only TypeScript library used by the other two projects, should be where a lot of the logic lives:

 - Verify: `yarn workspace core build`
 - Tests: `yarn workspace core test`

#### [`packages/funcs`](./packages/funcs)

A logic-only TypeScript library used by the other two projects, should be where a lot of the logic lives:

 - Verify: `yarn workspace core build`
 - Tests: `yarn workspace core test`
