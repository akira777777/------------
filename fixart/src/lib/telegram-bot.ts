export type TelegramOwnerCommand = "start" | "status" | "help";

export type BookingBotStatus = {
  database: "neon" | "pglite";
  total: number;
  lastCreatedAt: string | Date | null;
  lastService: string | null;
  lastDeviceFamily: string | null;
  lastDelivery: string | null;
};

export function parseTelegramOwnerCommand(text: string): TelegramOwnerCommand | null {
  const match = text.trim().match(/^\/(start|status|help)(?:@[a-z0-9_]+)?(?:\s|$)/i);
  return (match?.[1]?.toLowerCase() as TelegramOwnerCommand | undefined) ?? null;
}

export function telegramStartMessage(): string {
  return [
    "FixArt Bot подключён ✅",
    "",
    "Новые заявки с сайта будут автоматически приходить в этот чат со всеми контактными данными.",
    "",
    "Команды:",
    "/status — состояние бота и базы",
    "/help — краткая справка",
  ].join("\n");
}

export function telegramHelpMessage(): string {
  return [
    "FixArt Bot — приватные уведомления о заявках.",
    "",
    "/status — проверить Telegram и Neon",
    "/start — показать приветствие",
    "",
    "Имя, телефон, устройство и комментарий клиента приходят только сюда. В Neon сохраняется обезличенная история для статистики.",
  ].join("\n");
}

export function telegramStatusMessage(status: BookingBotStatus): string {
  const databaseName = status.database === "neon" ? "Neon PostgreSQL" : "локальная PGLite";
  const lastTime = status.lastCreatedAt
    ? new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Europe/Prague",
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(status.lastCreatedAt))
    : "заявок пока нет";

  const lines = [
    "FixArt работает ✅",
    `База: ${databaseName}`,
    `Всего заявок: ${status.total}`,
    `Последняя: ${lastTime}`,
  ];

  if (status.lastCreatedAt) {
    lines.push(
      `Категория: ${status.lastDeviceFamily ?? "other"} · ${status.lastService ?? "other"}`,
      `Доставка: ${status.lastDelivery ?? "unknown"}`,
    );
  }

  return lines.join("\n");
}
