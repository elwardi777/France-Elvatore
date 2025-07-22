import { Product, Category } from '../types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Moteurs',
    icon: '⚙️',
    description: 'Moteurs électriques pour ascenseurs'
  },
  {
    id: '2',
    name: 'Cartes Électroniques',
    icon: '🔌',
    description: 'Cartes de contrôle et circuits électroniques'
  },
  {
    id: '3',
    name: 'Câbles',
    icon: '🔗',
    description: 'Câbles de traction et électriques'
  },
  {
    id: '4',
    name: 'Boutons',
    icon: '🔘',
    description: 'Boutons d\'appel et de commande'
  },
  {
    id: '5',
    name: 'Variateurs',
    icon: '📊',
    description: 'Variateurs de fréquence'
  },
  {
    id: '6',
    name: 'Galets',
    icon: '⚪',
    description: 'Galets et poulies'
  },
  {
    id: '7',
    name: 'Coulisseaux',
    icon: '🔧',
    description: 'Coulisseaux cabine et contrepoids'
  },
  {
    id: '8',
    name: 'Afficheurs',
    icon: '📺',
    description: 'Afficheurs et indicateurs'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Moteur Électrique 5.5kW',
    description: 'Moteur électrique haute performance pour ascenseurs résidentiels et commerciaux. Compatible avec la plupart des marques d\'ascenseurs.',
    price: 2500,
    originalPrice: 3000,
    images: ['/Untitled-3.fw_sr1_c1.jpg', '/ca-img-034.jpg'],
    category: '1',
    brand: 'Universal',
    reference: 'MOT-5.5KW-001',
    compatibility: ['Otis', 'Schindler', 'KONE', 'ThyssenKrupp'],
    stock: 15,
    isPromo: true,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Carte de Contrôle Principale',
    description: 'Carte électronique de contrôle principal pour ascenseurs modernes. Programmable et compatible multi-marques.',
    price: 850,
    images: ['/Mhtool-Elevator-Escalator-Spare.jpg'],
    category: '2',
    brand: 'TechLift',
    reference: 'CTRL-MAIN-002',
    compatibility: ['Otis', 'Schindler', 'KONE'],
    stock: 8,
    isNew: true,
    createdAt: new Date('2024-02-01')
  },
  {
    id: '3',
    name: 'Câble de Traction Acier 8mm',
    description: 'Câble de traction en acier galvanisé haute résistance. Longueur 100m, diamètre 8mm.',
    price: 450,
    images: ['/Vente-en-gros-de-pi-ces-de-recha.jpg'],
    category: '3',
    brand: 'SteelCable',
    reference: 'CAB-8MM-100M',
    compatibility: ['Tous types'],
    stock: 25,
    createdAt: new Date('2024-01-20')
  },
  {
    id: '4',
    name: 'Bouton d\'Appel Lumineux',
    description: 'Bouton d\'appel avec éclairage LED intégré. Design moderne et résistant.',
    price: 75,
    images: ['/ca-img-034.jpg'],
    category: '4',
    brand: 'LiftButton',
    reference: 'BTN-LED-004',
    compatibility: ['Universal'],
    stock: 50,
    createdAt: new Date('2024-01-10')
  },
  {
    id: '5',
    name: 'Variateur de Fréquence 7.5kW',
    description: 'Variateur de fréquence pour contrôle précis de la vitesse. Économie d\'énergie garantie.',
    price: 1200,
    originalPrice: 1400,
    images: ['/Untitled-3.fw_sr1_c1.jpg'],
    category: '5',
    brand: 'FreqControl',
    reference: 'VAR-7.5KW-005',
    compatibility: ['Otis', 'KONE', 'ThyssenKrupp'],
    stock: 12,
    isPromo: true,
    createdAt: new Date('2024-01-25')
  },
  {
    id: '6',
    name: 'Galet de Guidage Premium',
    description: 'Galet de guidage haute qualité avec roulement à billes. Longue durée de vie.',
    price: 180,
    images: ['/Mhtool-Elevator-Escalator-Spare.jpg'],
    category: '6',
    brand: 'GuideRoll',
    reference: 'GAL-PREM-006',
    compatibility: ['Schindler', 'KONE', 'Otis'],
    stock: 30,
    createdAt: new Date('2024-02-05')
  }
];