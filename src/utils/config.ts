export interface FrameworkConfig {
  baseUrl: string;
  source: string;
  destination: string;
  date: string;
  nthBus: number;
}

export const config: FrameworkConfig = {
  baseUrl: 'https://www.redbus.in/',
  source:  'Bangalore',
  destination:  'Mysore',
  date: '16/06/2026',
  nthBus:  2,
};
