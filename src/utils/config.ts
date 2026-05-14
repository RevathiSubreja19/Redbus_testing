export interface FrameworkConfig {
  baseUrl: string;
  source: string;
  destination: string;
  nthBus: number;
}

export const Config: FrameworkConfig = {
  baseUrl: 'https://www.redbus.in/',
  source:  'Chennai',
  destination:  'Coimbatore',
  nthBus:  2,
};
