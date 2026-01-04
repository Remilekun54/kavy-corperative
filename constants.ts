
import { User, UserPersona, Grant, MarketItem, VouchRequest } from './types';

export const INITIAL_USER: User = {
  id: 'usr_1',
  name: 'Adeleke Balogun',
  type: UserPersona.ARTISAN,
  trustScore: 780,
  balance: 1250000,
  dividends: 45000,
  verifiedLevel: 2,
  savingsGoal: 5000000,
  currentSavings: 1205000
};

export const MOCK_GRANTS: Grant[] = [
  {
    id: 'g_1',
    title: 'UNDP SME Equipment Fund',
    provider: 'UNDP',
    amount: 250000,
    category: [UserPersona.ARTISAN, UserPersona.ENTREPRENEUR],
    description: 'Grant for purchasing high-grade workshop machinery.',
    matchScore: 95,
    type: 'grant'
  },
  {
    id: 'g_2',
    title: 'State Micro-Business Palliative',
    provider: 'Lagos State Govt',
    amount: 50000,
    category: [UserPersona.ARTISAN, UserPersona.CIVIL_SERVANT, UserPersona.ENTREPRENEUR],
    description: 'Direct cash support for local micro-business owners.',
    matchScore: 100,
    type: 'palliative'
  },
  {
    id: 'g_3',
    title: 'Civil Servant Tech Upgrade',
    provider: 'Federal Ministry',
    amount: 150000,
    category: [UserPersona.CIVIL_SERVANT],
    description: 'Equipment loan for digital skills enhancement.',
    matchScore: 0,
    type: 'grant'
  }
];

export const MOCK_MARKET_ITEMS: MarketItem[] = [
  {
    id: 'm_1',
    name: 'Industrial Sewing Machine (Bulk)',
    originalPrice: 120000,
    bulkPrice: 85000,
    joinedCount: 8,
    targetCount: 15,
    category: 'Textiles',
    image: 'https://picsum.photos/seed/sewing/400/300'
  },
  {
    id: 'm_2',
    name: 'Raw Fabric Bales (Cotton)',
    originalPrice: 45000,
    bulkPrice: 32000,
    joinedCount: 22,
    targetCount: 50,
    category: 'Materials',
    image: 'https://picsum.photos/seed/fabric/400/300'
  }
];

export const MOCK_VOUCH_REQUESTS: VouchRequest[] = [
  { id: 'v_1', requesterName: 'Musa Ibrahim', amount: 100000, status: 'pending' },
  { id: 'v_2', requesterName: 'Blessing Okon', amount: 50000, status: 'pending' }
];
