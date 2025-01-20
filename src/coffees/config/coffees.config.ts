import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  defaultSize: 'medium',
  availableTypes: ['espresso', 'latte', 'cappuccino', 'americano'],

  addons: ['milk', 'sugar', 'cream', 'honey'],
  maxOrderQuantity: 10,
  specialOffers: {
    espresso: 'Buy 1 Get 1 Free',
    cappuccino: '20% off on weekends',
  },
}));

