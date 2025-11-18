export enum View {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD',
  BROWSER = 'BROWSER',
  FILE_SCANNER = 'FILE_SCANNER',
  ARCHITECTURE = 'ARCHITECTURE',
  LOGS = 'LOGS'
}

export interface Metric {
  name: string;
  value: number | string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  unit?: string;
}

export interface SessionLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  status: 'blocked' | 'allowed' | 'isolated';
  details: string;
}