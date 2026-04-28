<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven for Activepieces</h1>

<p align="center">
  Official seven piece for <a href="https://www.activepieces.com/">Activepieces</a> - the open-source, self-hosted Zapier alternative. Send SMS, run TTS calls, perform lookups and listen for inbound messages.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <a href="https://www.npmjs.com/package/@seven.io/activepieces"><img src="https://img.shields.io/npm/v/@seven.io/activepieces" alt="npm" /></a>
  <img src="https://img.shields.io/badge/Activepieces-piece-9333ea" alt="Activepieces piece" />
  <img src="https://img.shields.io/badge/Node.js-18%2B-brightgreen" alt="Node.js 18+" />
</p>

---

## Actions

- **Send SMS**
- **Text-to-Speech Call**
- **Lookup** (HLR / MNP / CNAM / Format)

## Triggers

- **Inbound SMS** - Webhook trigger that fires on every incoming SMS

## Prerequisites

- A self-hosted [Activepieces](https://www.activepieces.com/) instance
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))

## Installation

### Activepieces dashboard

Go to **Settings > My Pieces > Install Piece** and enter `seven`.

### Package manager

```bash
npm install @seven.io/activepieces
```

## Configuration

In any flow step that uses the seven piece, click **Connect** and paste your seven API key. The connection becomes reusable across all subsequent flow steps.

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/activepieces/issues).

## License

[MIT](LICENSE)
