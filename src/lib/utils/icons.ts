import {
  // Navigation & UI
  Rocket, Wrench, BookOpen, Code, Globe, Key, Shield,
  Monitor, Smartphone, Database, Lock, Users, FileText, Zap,
  ClipboardList, Bot, Terminal, ExternalLink, Copy, CheckCircle,
  AlertCircle, XCircle, Heart, ThumbsUp, PartyPopper, Radio,
  Sparkles, Hammer, Target, Settings, Package, Link, Download,
  Layers, Activity, GitBranch, Server, Circle, Cpu,
  // Additional icons
  Clock, AlertTriangle
} from 'lucide-svelte';

export const iconMap = {
  // Navigation & UI
  rocket: Rocket,
  wrench: Wrench,
  book: BookOpen,
  code: Code,
  globe: Globe,
  key: Key,
  shield: Shield,
  monitor: Monitor,
  smartphone: Smartphone,
  database: Database,
  lock: Lock,
  users: Users,
  fileText: FileText,
  zap: Zap,
  clipboard: ClipboardList,
  bot: Bot,
  terminal: Terminal,
  externalLink: ExternalLink,
  copy: Copy,
  checkCircle: CheckCircle,
  alertCircle: AlertCircle,
  xCircle: XCircle,
  heart: Heart,
  thumbsUp: ThumbsUp,
  partyPopper: PartyPopper,
  radio: Radio,
  sparkles: Sparkles,
  hammer: Hammer,
  target: Target,
  settings: Settings,
  package: Package,
  link: Link,
  download: Download,
  layers: Layers,
  activity: Activity,
  gitBranch: GitBranch,
  server: Server,

  circle: Circle,
  cpu: Cpu,
  // Additional icons
  clock: Clock,
  alertTriangle: AlertTriangle
};

export function getIcon(iconName: string) {
  const normalizedName = iconName.toLowerCase();
  return iconMap[normalizedName] || Code; // Default to Code icon if not found
}

export function getIconComponent(iconName: string) {
  return getIcon(iconName);
}
