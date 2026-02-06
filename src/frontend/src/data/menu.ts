export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower purée, crispy pancetta, and brown butter',
    price: '$38',
    category: 'Appetizers',
    featured: true,
  },
  {
    id: '2',
    name: 'Wagyu Beef Tartare',
    description: 'Hand-cut wagyu beef with quail egg, truffle aioli, and crispy shallots',
    price: '$42',
    category: 'Appetizers',
  },
  {
    id: '3',
    name: 'Lobster Bisque',
    description: 'Rich lobster bisque with cognac cream and fresh herbs',
    price: '$24',
    category: 'Appetizers',
  },
  {
    id: '4',
    name: 'Dry-Aged Ribeye',
    description: '16oz dry-aged ribeye with roasted bone marrow, truffle fries, and red wine reduction',
    price: '$68',
    category: 'Main Course',
    featured: true,
  },
  {
    id: '5',
    name: 'Pan-Roasted Halibut',
    description: 'Fresh halibut with saffron risotto, asparagus, and lemon beurre blanc',
    price: '$54',
    category: 'Main Course',
  },
  {
    id: '6',
    name: 'Duck Confit',
    description: 'Crispy duck leg confit with cherry gastrique, roasted root vegetables, and potato gratin',
    price: '$48',
    category: 'Main Course',
  },
  {
    id: '7',
    name: 'Wild Mushroom Risotto',
    description: 'Creamy arborio risotto with seasonal wild mushrooms, parmesan, and truffle oil',
    price: '$36',
    category: 'Main Course',
  },
  {
    id: '8',
    name: 'Chocolate Soufflé',
    description: 'Warm dark chocolate soufflé with vanilla bean ice cream and raspberry coulis',
    price: '$18',
    category: 'Desserts',
    featured: true,
  },
  {
    id: '9',
    name: 'Crème Brûlée',
    description: 'Classic vanilla bean crème brûlée with caramelized sugar and fresh berries',
    price: '$14',
    category: 'Desserts',
  },
];
