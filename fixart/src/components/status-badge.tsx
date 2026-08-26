import { getTranslation } from "@/lib/i18n";
import type { Language } from "@/lib/store";

export function StatusBadge({ status, lang }: { status: string; lang: Language }) {
  const t = getTranslation(lang);

  // Map status to translation keys
  const getStatusKey = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "status.pending";
      case "in_progress":
        return "status.in_progress";
      case "completed":
        return "status.completed";
      default:
        return "status.unknown";
    }
  };

  const statusText = t(getStatusKey(status));

  // Determine color based on status
  let bgColor = "bg-gray-500";
  if (status.toLowerCase() === "completed") {
    bgColor = "bg-green-500";
  } else if (status.toLowerCase() === "in_progress") {
    bgColor = "bg-blue-500";
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bgColor} text-white`}>
      {statusText}
    </span>
  );
}
