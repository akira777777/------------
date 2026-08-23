# FixArt

Prague electronics repair site. Apple first, then Samsung, Xiaomi, Pixel, Huawei.

Czech is the default language (`/`). English lives at `/en`, Russian at `/ru`.

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and put in the shop phone, address, and Telegram. Quote form posts to `/api/quote`, which forwards to Telegram when `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set.

```bash
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```
