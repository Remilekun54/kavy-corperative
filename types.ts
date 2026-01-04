
export enum UserPersona {
  ARTISAN = 'Artisan',
  CIVIL_SERVANT = 'Civil Servant',
  ENTREPRENEUR = 'Entrepreneur'
}

export interface User {
  id: string;
  name: string;
  type: UserPersona;
  trustScore: number;
  balance: number;
  dividends: number;
  verifiedLevel: 1 | 2 | 3;
  savingsGoal: number;
  currentSavings: number;
}

export interface Grant {
  id: string;
  title: string;
  provider: string;
  amount: number;
  category: UserPersona[];
  description: string;
  matchScore: number;
  type: 'grant' | 'palliative';
}

export interface VouchRequest {
  id: string;
  requesterName: string;
  amount: number;
  status: 'pending' | 'vouched' | 'declined';
}

export interface MarketItem {
  id: string;
  name: string;
  originalPrice: number;
  bulkPrice: number;
  joinedCount: number;
  targetCount: number;
  category: string;
  image: string;
}
