import {
  ArrowRight,
  BatteryCharging,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Database,
  HardDriveDownload,
  Laptop,
  LoaderCircle,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  PlugZap,
  Send,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export type IconName =
  | "arrow"
  | "battery"
  | "calendar"
  | "call"
  | "check"
  | "chevron"
  | "clock"
  | "data"
  | "diagnostics"
  | "display"
  | "glass"
  | "laptop"
  | "location"
  | "loading"
  | "menu"
  | "port"
  | "shield"
  | "telegram"
  | "tools"
  | "close";

const icons: Record<IconName, LucideIcon> = {
  arrow: ArrowRight,
  battery: BatteryCharging,
  calendar: CalendarCheck,
  call: Phone,
  check: Check,
  chevron: ChevronRight,
  clock: Clock3,
  data: Database,
  diagnostics: HardDriveDownload,
  display: MonitorSmartphone,
  glass: Smartphone,
  laptop: Laptop,
  location: MapPin,
  loading: LoaderCircle,
  menu: Menu,
  port: PlugZap,
  shield: ShieldCheck,
  telegram: Send,
  tools: Wrench,
  close: X,
};

export function InterfaceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" strokeWidth={1.8} {...props} />;
}
