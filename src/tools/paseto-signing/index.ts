import { Key } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Paseto Signing/Verifier',
  path: '/paseto-signing',
  description: 'Generate keys and sign/verify payload',
  keywords: ['paseto', 'signing', 'verify', 'paserk', 'payload'],
  component: () => import('./paseto-signing.vue'),
  icon: Key,
  createdAt: new Date('2025-04-21'),
  category: 'Crypto',
});
