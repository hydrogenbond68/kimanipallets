import { Product, User } from '../types';

export const mockProducts: Product[] = [
  // Beds Category (20 items)
  {
    id: '1',
    name: 'Luxury King Size Bed',
    description: 'Handcrafted solid wood king size bed with intricate headboard design',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beds',
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Modern Queen Platform Bed',
    description: 'Sleek platform bed with built-in nightstands and LED lighting',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beds',
    rating: 4.7,
    inStock: true
  },
  {
    id: '3',
    name: 'Classic Wooden Double Bed',
    description: 'Traditional double bed with carved wooden frame and storage drawers',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beds',
    rating: 4.6,
    inStock: true
  },
  {
    id: '4',
    name: 'Rustic Log Bed Frame',
    description: 'Natural log bed frame with rustic finish and sturdy construction',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    category: 'beds',
    rating: 4.9,
    inStock: true
  },
  {
    id: '5',
    name: 'Contemporary Single Bed',
    description: 'Modern single bed perfect for guest rooms and children',
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
    category: 'beds',
    rating: 4.5,
    inStock: true
  },
  {
    id: '6',
    name: 'Four Poster Bed',
    description: 'Elegant four poster bed with canopy frame and premium finish',
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
    category: 'beds',
    rating: 4.8,
    inStock: true
  },
  {
    id: '7',
    name: 'Storage Bed with Drawers',
    description: 'Practical bed with multiple storage drawers underneath',
    image: 'https://images.pexels.com/photos/1743228/pexels-photo-1743228.jpeg',
    category: 'beds',
    rating: 4.7,
    inStock: true
  },
  {
    id: '8',
    name: 'Upholstered Headboard Bed',
    description: 'Comfortable bed with padded upholstered headboard',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg',
    category: 'beds',
    rating: 4.6,
    inStock: true
  },
  {
    id: '9',
    name: 'Minimalist Bed Frame',
    description: 'Simple and elegant minimalist bed frame in natural wood',
    image: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg',
    category: 'beds',
    rating: 4.5,
    inStock: true
  },
  {
    id: '10',
    name: 'Bunk Bed Set',
    description: 'Space-saving bunk bed perfect for children\'s rooms',
    image: 'https://images.pexels.com/photos/1743230/pexels-photo-1743230.jpeg',
    category: 'beds',
    rating: 4.8,
    inStock: true
  },
  {
    id: '11',
    name: 'Daybed with Trundle',
    description: 'Versatile daybed with pull-out trundle for extra sleeping space',
    image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg',
    category: 'beds',
    rating: 4.7,
    inStock: true
  },
  {
    id: '12',
    name: 'Adjustable Bed Base',
    description: 'Electric adjustable bed base with massage features',
    image: 'https://images.pexels.com/photos/1454807/pexels-photo-1454807.jpeg',
    category: 'beds',
    rating: 4.9,
    inStock: true
  },
  {
    id: '13',
    name: 'Antique Style Bed',
    description: 'Vintage-inspired bed with ornate carvings and brass accents',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    category: 'beds',
    rating: 4.6,
    inStock: true
  },
  {
    id: '14',
    name: 'Murphy Wall Bed',
    description: 'Space-saving wall bed that folds into cabinet when not in use',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    category: 'beds',
    rating: 4.8,
    inStock: true
  },
  {
    id: '15',
    name: 'Loft Bed with Desk',
    description: 'Elevated bed with built-in desk and storage underneath',
    image: 'https://images.pexels.com/photos/1454808/pexels-photo-1454808.jpeg',
    category: 'beds',
    rating: 4.7,
    inStock: true
  },
  {
    id: '16',
    name: 'Sleigh Bed',
    description: 'Classic sleigh bed with curved headboard and footboard',
    image: 'https://images.pexels.com/photos/1743232/pexels-photo-1743232.jpeg',
    category: 'beds',
    rating: 4.5,
    inStock: true
  },
  {
    id: '17',
    name: 'Panel Bed',
    description: 'Traditional panel bed with raised panels and solid construction',
    image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg',
    category: 'beds',
    rating: 4.6,
    inStock: true
  },
  {
    id: '18',
    name: 'Captain\'s Bed',
    description: 'Nautical-inspired captain\'s bed with built-in storage',
    image: 'https://images.pexels.com/photos/1454809/pexels-photo-1454809.jpeg',
    category: 'beds',
    rating: 4.8,
    inStock: true
  },
  {
    id: '19',
    name: 'Canopy Bed',
    description: 'Romantic canopy bed with flowing curtains and elegant design',
    image: 'https://images.pexels.com/photos/1743233/pexels-photo-1743233.jpeg',
    category: 'beds',
    rating: 4.9,
    inStock: true
  },
  {
    id: '20',
    name: 'Low Profile Bed',
    description: 'Modern low profile bed with clean lines and contemporary style',
    image: 'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg',
    category: 'beds',
    rating: 4.7,
    inStock: true
  },

  // Dining Category (20 items)
  {
    id: '21',
    name: 'Executive Dining Table',
    description: '8-seater mahogany dining table perfect for family gatherings',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1395968/pexels-photo-1395968.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1350790/pexels-photo-1350790.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'dining',
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '22',
    name: 'Round Dining Table',
    description: 'Elegant round dining table for intimate dining experiences',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    category: 'dining',
    rating: 4.8,
    inStock: true
  },
  {
    id: '23',
    name: 'Extendable Dining Table',
    description: 'Versatile extendable table that accommodates 6-12 people',
    image: 'https://images.pexels.com/photos/1395968/pexels-photo-1395968.jpeg',
    category: 'dining',
    rating: 4.7,
    inStock: true
  },
  {
    id: '24',
    name: 'Farmhouse Dining Set',
    description: 'Rustic farmhouse dining table with matching bench and chairs',
    image: 'https://images.pexels.com/photos/1350790/pexels-photo-1350790.jpeg',
    category: 'dining',
    rating: 4.9,
    inStock: true
  },
  {
    id: '25',
    name: 'Glass Top Dining Table',
    description: 'Modern glass top dining table with wooden base',
    image: 'https://images.pexels.com/photos/1395969/pexels-photo-1395969.jpeg',
    category: 'dining',
    rating: 4.6,
    inStock: true
  },
  {
    id: '26',
    name: 'Counter Height Dining Set',
    description: 'Contemporary counter height table with bar stools',
    image: 'https://images.pexels.com/photos/1350791/pexels-photo-1350791.jpeg',
    category: 'dining',
    rating: 4.8,
    inStock: true
  },
  {
    id: '27',
    name: 'Marble Top Dining Table',
    description: 'Luxurious marble top dining table with metal legs',
    image: 'https://images.pexels.com/photos/1395970/pexels-photo-1395970.jpeg',
    category: 'dining',
    rating: 4.9,
    inStock: true
  },
  {
    id: '28',
    name: 'Outdoor Dining Set',
    description: 'Weather-resistant outdoor dining set for patio use',
    image: 'https://images.pexels.com/photos/1350792/pexels-photo-1350792.jpeg',
    category: 'dining',
    rating: 4.7,
    inStock: true
  },
  {
    id: '29',
    name: 'Breakfast Nook Set',
    description: 'Cozy breakfast nook with corner bench and table',
    image: 'https://images.pexels.com/photos/1395971/pexels-photo-1395971.jpeg',
    category: 'dining',
    rating: 4.6,
    inStock: true
  },
  {
    id: '30',
    name: 'Pedestal Dining Table',
    description: 'Classic pedestal dining table with single central support',
    image: 'https://images.pexels.com/photos/1350793/pexels-photo-1350793.jpeg',
    category: 'dining',
    rating: 4.8,
    inStock: true
  },
  {
    id: '31',
    name: 'Live Edge Dining Table',
    description: 'Natural live edge dining table showcasing wood grain',
    image: 'https://images.pexels.com/photos/1395972/pexels-photo-1395972.jpeg',
    category: 'dining',
    rating: 4.9,
    inStock: true
  },
  {
    id: '32',
    name: 'Drop Leaf Dining Table',
    description: 'Space-saving drop leaf table perfect for small spaces',
    image: 'https://images.pexels.com/photos/1350794/pexels-photo-1350794.jpeg',
    category: 'dining',
    rating: 4.5,
    inStock: true
  },
  {
    id: '33',
    name: 'Trestle Dining Table',
    description: 'Sturdy trestle dining table with traditional design',
    image: 'https://images.pexels.com/photos/1395973/pexels-photo-1395973.jpeg',
    category: 'dining',
    rating: 4.7,
    inStock: true
  },
  {
    id: '34',
    name: 'Dining Chair Set',
    description: 'Set of 6 upholstered dining chairs with wooden frames',
    image: 'https://images.pexels.com/photos/1350795/pexels-photo-1350795.jpeg',
    category: 'dining',
    rating: 4.8,
    inStock: true
  },
  {
    id: '35',
    name: 'Bar Height Dining Table',
    description: 'Tall bar height dining table for casual dining',
    image: 'https://images.pexels.com/photos/1395974/pexels-photo-1395974.jpeg',
    category: 'dining',
    rating: 4.6,
    inStock: true
  },
  {
    id: '36',
    name: 'Dining Buffet Cabinet',
    description: 'Elegant buffet cabinet for dining room storage and display',
    image: 'https://images.pexels.com/photos/1350796/pexels-photo-1350796.jpeg',
    category: 'dining',
    rating: 4.8,
    inStock: true
  },
  {
    id: '37',
    name: 'Folding Dining Table',
    description: 'Compact folding dining table for small apartments',
    image: 'https://images.pexels.com/photos/1395975/pexels-photo-1395975.jpeg',
    category: 'dining',
    rating: 4.5,
    inStock: true
  },
  {
    id: '38',
    name: 'Dining Bench Set',
    description: 'Modern dining table with matching bench seating',
    image: 'https://images.pexels.com/photos/1350797/pexels-photo-1350797.jpeg',
    category: 'dining',
    rating: 4.7,
    inStock: true
  },
  {
    id: '39',
    name: 'Oval Dining Table',
    description: 'Sophisticated oval dining table with elegant curves',
    image: 'https://images.pexels.com/photos/1395976/pexels-photo-1395976.jpeg',
    category: 'dining',
    rating: 4.8,
    inStock: true
  },
  {
    id: '40',
    name: 'Industrial Dining Set',
    description: 'Industrial style dining set with metal and wood combination',
    image: 'https://images.pexels.com/photos/1350798/pexels-photo-1350798.jpeg',
    category: 'dining',
    rating: 4.9,
    inStock: true
  },

  // Sofas Category (20 items)
  {
    id: '41',
    name: 'Premium Leather Sofa Set',
    description: '3-piece leather sofa set with wooden frame and premium cushioning',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sofas',
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '42',
    name: 'Sectional Sofa',
    description: 'Large sectional sofa perfect for family rooms and entertainment',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    category: 'sofas',
    rating: 4.8,
    inStock: true
  },
  {
    id: '43',
    name: 'Recliner Sofa Set',
    description: 'Comfortable recliner sofa set with electric controls',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    category: 'sofas',
    rating: 4.9,
    inStock: true
  },
  {
    id: '44',
    name: 'Chesterfield Sofa',
    description: 'Classic Chesterfield sofa with button tufting and rolled arms',
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg',
    category: 'sofas',
    rating: 4.6,
    inStock: true
  },
  {
    id: '45',
    name: 'Modular Sofa System',
    description: 'Flexible modular sofa system that can be reconfigured',
    image: 'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg',
    category: 'sofas',
    rating: 4.8,
    inStock: true
  },
  {
    id: '46',
    name: 'Sleeper Sofa',
    description: 'Convertible sleeper sofa with pull-out bed mechanism',
    image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg',
    category: 'sofas',
    rating: 4.7,
    inStock: true
  },
  {
    id: '47',
    name: 'Loveseat',
    description: 'Cozy two-seater loveseat perfect for small spaces',
    image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg',
    category: 'sofas',
    rating: 4.5,
    inStock: true
  },
  {
    id: '48',
    name: 'Ottoman Set',
    description: 'Matching ottoman set for additional seating and storage',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    category: 'sofas',
    rating: 4.6,
    inStock: true
  },
  {
    id: '49',
    name: 'Accent Chair',
    description: 'Stylish accent chair to complement your sofa set',
    image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg',
    category: 'sofas',
    rating: 4.7,
    inStock: true
  },
  {
    id: '50',
    name: 'Corner Sofa',
    description: 'Space-efficient corner sofa that maximizes seating',
    image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg',
    category: 'sofas',
    rating: 4.8,
    inStock: true
  },
  {
    id: '51',
    name: 'Fabric Sofa Set',
    description: 'Comfortable fabric sofa set in various color options',
    image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg',
    category: 'sofas',
    rating: 4.6,
    inStock: true
  },
  {
    id: '52',
    name: 'Vintage Sofa',
    description: 'Restored vintage sofa with classic mid-century design',
    image: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg',
    category: 'sofas',
    rating: 4.9,
    inStock: true
  },
  {
    id: '53',
    name: 'Outdoor Sofa Set',
    description: 'Weather-resistant outdoor sofa set for patio use',
    image: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg',
    category: 'sofas',
    rating: 4.7,
    inStock: true
  },
  {
    id: '54',
    name: 'Sofa Bed',
    description: 'Multi-functional sofa bed for guest rooms',
    image: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
    category: 'sofas',
    rating: 4.5,
    inStock: true
  },
  {
    id: '55',
    name: 'Chaise Lounge',
    description: 'Elegant chaise lounge for relaxation and reading',
    image: 'https://images.pexels.com/photos/1571446/pexels-photo-1571446.jpeg',
    category: 'sofas',
    rating: 4.8,
    inStock: true
  },
  {
    id: '56',
    name: 'Rocking Chair',
    description: 'Traditional wooden rocking chair with cushioned seat',
    image: 'https://images.pexels.com/photos/1571445/pexels-photo-1571445.jpeg',
    category: 'sofas',
    rating: 4.6,
    inStock: true
  },
  {
    id: '57',
    name: 'Swivel Chair',
    description: 'Modern swivel chair with 360-degree rotation',
    image: 'https://images.pexels.com/photos/1571444/pexels-photo-1571444.jpeg',
    category: 'sofas',
    rating: 4.7,
    inStock: true
  },
  {
    id: '58',
    name: 'Bean Bag Chair',
    description: 'Comfortable bean bag chair for casual seating',
    image: 'https://images.pexels.com/photos/1571443/pexels-photo-1571443.jpeg',
    category: 'sofas',
    rating: 4.4,
    inStock: true
  },
  {
    id: '59',
    name: 'Wingback Chair',
    description: 'Classic wingback chair with high back and side wings',
    image: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg',
    category: 'sofas',
    rating: 4.8,
    inStock: true
  },
  {
    id: '60',
    name: 'Sofa Console Table',
    description: 'Narrow console table designed to go behind sofas',
    image: 'https://images.pexels.com/photos/1571441/pexels-photo-1571441.jpeg',
    category: 'sofas',
    rating: 4.5,
    inStock: true
  },

  // Office Category (20 items)
  {
    id: '61',
    name: 'Executive Office Desk',
    description: 'Professional wooden office desk with built-in storage compartments',
    image: 'https://images.pexels.com/photos/7516366/pexels-photo-7516366.jpeg',
    category: 'office',
    rating: 4.6,
    inStock: true
  },
  {
    id: '62',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable ergonomic office chair with lumbar support',
    image: 'https://images.pexels.com/photos/7516367/pexels-photo-7516367.jpeg',
    category: 'office',
    rating: 4.8,
    inStock: true
  },
  {
    id: '63',
    name: 'Standing Desk',
    description: 'Adjustable standing desk for health-conscious professionals',
    image: 'https://images.pexels.com/photos/7516368/pexels-photo-7516368.jpeg',
    category: 'office',
    rating: 4.9,
    inStock: true
  },
  {
    id: '64',
    name: 'Conference Table',
    description: 'Large conference table for meeting rooms and boardrooms',
    image: 'https://images.pexels.com/photos/7516369/pexels-photo-7516369.jpeg',
    category: 'office',
    rating: 4.7,
    inStock: true
  },
  {
    id: '65',
    name: 'Office Bookshelf',
    description: 'Tall office bookshelf for document and book storage',
    image: 'https://images.pexels.com/photos/7516370/pexels-photo-7516370.jpeg',
    category: 'office',
    rating: 4.6,
    inStock: true
  },
  {
    id: '66',
    name: 'Reception Desk',
    description: 'Professional reception desk with customer service counter',
    image: 'https://images.pexels.com/photos/7516371/pexels-photo-7516371.jpeg',
    category: 'office',
    rating: 4.8,
    inStock: true
  },
  {
    id: '67',
    name: 'Filing Cabinet',
    description: 'Secure filing cabinet with multiple drawers and locks',
    image: 'https://images.pexels.com/photos/7516372/pexels-photo-7516372.jpeg',
    category: 'office',
    rating: 4.5,
    inStock: true
  },
  {
    id: '68',
    name: 'Office Partition',
    description: 'Modular office partition for creating private workspaces',
    image: 'https://images.pexels.com/photos/7516373/pexels-photo-7516373.jpeg',
    category: 'office',
    rating: 4.7,
    inStock: true
  },
  {
    id: '69',
    name: 'Computer Desk',
    description: 'Compact computer desk with keyboard tray and cable management',
    image: 'https://images.pexels.com/photos/7516374/pexels-photo-7516374.jpeg',
    category: 'office',
    rating: 4.6,
    inStock: true
  },
  {
    id: '70',
    name: 'Office Storage Cabinet',
    description: 'Multi-purpose storage cabinet for office supplies',
    image: 'https://images.pexels.com/photos/7516375/pexels-photo-7516375.jpeg',
    category: 'office',
    rating: 4.8,
    inStock: true
  },
  {
    id: '71',
    name: 'Visitor Chairs Set',
    description: 'Set of comfortable visitor chairs for office reception',
    image: 'https://images.pexels.com/photos/7516376/pexels-photo-7516376.jpeg',
    category: 'office',
    rating: 4.7,
    inStock: true
  },
  {
    id: '72',
    name: 'Office Credenza',
    description: 'Elegant office credenza for executive offices',
    image: 'https://images.pexels.com/photos/7516377/pexels-photo-7516377.jpeg',
    category: 'office',
    rating: 4.9,
    inStock: true
  },
  {
    id: '73',
    name: 'Mobile Pedestal',
    description: 'Mobile pedestal with drawers that fits under desks',
    image: 'https://images.pexels.com/photos/7516378/pexels-photo-7516378.jpeg',
    category: 'office',
    rating: 4.5,
    inStock: true
  },
  {
    id: '74',
    name: 'Office Sofa Set',
    description: 'Professional office sofa set for waiting areas',
    image: 'https://images.pexels.com/photos/7516379/pexels-photo-7516379.jpeg',
    category: 'office',
    rating: 4.8,
    inStock: true
  },
  {
    id: '75',
    name: 'Drafting Table',
    description: 'Adjustable drafting table for architects and designers',
    image: 'https://images.pexels.com/photos/7516380/pexels-photo-7516380.jpeg',
    category: 'office',
    rating: 4.6,
    inStock: true
  },
  {
    id: '76',
    name: 'Office Coffee Table',
    description: 'Modern coffee table for office break rooms',
    image: 'https://images.pexels.com/photos/7516381/pexels-photo-7516381.jpeg',
    category: 'office',
    rating: 4.7,
    inStock: true
  },
  {
    id: '77',
    name: 'Workstation Desk',
    description: 'Multi-level workstation desk for maximum productivity',
    image: 'https://images.pexels.com/photos/7516382/pexels-photo-7516382.jpeg',
    category: 'office',
    rating: 4.8,
    inStock: true
  },
  {
    id: '78',
    name: 'Office Coat Rack',
    description: 'Wooden coat rack for office entrance areas',
    image: 'https://images.pexels.com/photos/7516383/pexels-photo-7516383.jpeg',
    category: 'office',
    rating: 4.4,
    inStock: true
  },
  {
    id: '79',
    name: 'Executive Leather Chair',
    description: 'Premium leather executive chair with massage features',
    image: 'https://images.pexels.com/photos/7516384/pexels-photo-7516384.jpeg',
    category: 'office',
    rating: 4.9,
    inStock: true
  },
  {
    id: '80',
    name: 'Office Display Cabinet',
    description: 'Glass display cabinet for awards and achievements',
    image: 'https://images.pexels.com/photos/7516385/pexels-photo-7516385.jpeg',
    category: 'office',
    rating: 4.6,
    inStock: true
  },

  // Kitchen Category (20 items)
  {
    id: '81',
    name: 'Modern Kitchen Cabinets',
    description: 'Custom kitchen cabinet installation with soft-close hinges',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    category: 'kitchen',
    rating: 4.9,
    inStock: true
  },
  {
    id: '82',
    name: 'Kitchen Island',
    description: 'Large kitchen island with storage and breakfast bar',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    category: 'kitchen',
    rating: 4.8,
    inStock: true
  },
  {
    id: '83',
    name: 'Pantry Cabinet',
    description: 'Tall pantry cabinet with adjustable shelves',
    image: 'https://images.pexels.com/photos/2724750/pexels-photo-2724750.jpeg',
    category: 'kitchen',
    rating: 4.7,
    inStock: true
  },
  {
    id: '84',
    name: 'Kitchen Countertops',
    description: 'Custom wooden countertops with butcher block finish',
    image: 'https://images.pexels.com/photos/2724751/pexels-photo-2724751.jpeg',
    category: 'kitchen',
    rating: 4.9,
    inStock: true
  },
  {
    id: '85',
    name: 'Spice Rack Cabinet',
    description: 'Pull-out spice rack cabinet for organized cooking',
    image: 'https://images.pexels.com/photos/2724752/pexels-photo-2724752.jpeg',
    category: 'kitchen',
    rating: 4.6,
    inStock: true
  },
  {
    id: '86',
    name: 'Kitchen Bar Stools',
    description: 'Set of adjustable bar stools for kitchen islands',
    image: 'https://images.pexels.com/photos/2724753/pexels-photo-2724753.jpeg',
    category: 'kitchen',
    rating: 4.8,
    inStock: true
  },
  {
    id: '87',
    name: 'Corner Cabinet',
    description: 'Space-saving corner cabinet with lazy susan',
    image: 'https://images.pexels.com/photos/2724754/pexels-photo-2724754.jpeg',
    category: 'kitchen',
    rating: 4.7,
    inStock: true
  },
  {
    id: '88',
    name: 'Kitchen Hutch',
    description: 'Traditional kitchen hutch for display and storage',
    image: 'https://images.pexels.com/photos/2724755/pexels-photo-2724755.jpeg',
    category: 'kitchen',
    rating: 4.5,
    inStock: true
  },
  {
    id: '89',
    name: 'Wine Storage Cabinet',
    description: 'Climate-controlled wine storage cabinet',
    image: 'https://images.pexels.com/photos/2724756/pexels-photo-2724756.jpeg',
    category: 'kitchen',
    rating: 4.9,
    inStock: true
  },
  {
    id: '90',
    name: 'Kitchen Cart',
    description: 'Mobile kitchen cart with cutting board top',
    image: 'https://images.pexels.com/photos/2724757/pexels-photo-2724757.jpeg',
    category: 'kitchen',
    rating: 4.6,
    inStock: true
  },
  {
    id: '91',
    name: 'Microwave Cabinet',
    description: 'Built-in microwave cabinet with ventilation',
    image: 'https://images.pexels.com/photos/2724758/pexels-photo-2724758.jpeg',
    category: 'kitchen',
    rating: 4.8,
    inStock: true
  },
  {
    id: '92',
    name: 'Kitchen Backsplash',
    description: 'Custom wooden backsplash with protective finish',
    image: 'https://images.pexels.com/photos/2724759/pexels-photo-2724759.jpeg',
    category: 'kitchen',
    rating: 4.7,
    inStock: true
  },
  {
    id: '93',
    name: 'Trash Pull-Out Cabinet',
    description: 'Concealed trash pull-out cabinet system',
    image: 'https://images.pexels.com/photos/2724760/pexels-photo-2724760.jpeg',
    category: 'kitchen',
    rating: 4.5,
    inStock: true
  },
  {
    id: '94',
    name: 'Kitchen Sink Cabinet',
    description: 'Under-sink cabinet with plumbing accommodation',
    image: 'https://images.pexels.com/photos/2724761/pexels-photo-2724761.jpeg',
    category: 'kitchen',
    rating: 4.8,
    inStock: true
  },
  {
    id: '95',
    name: 'Appliance Garage',
    description: 'Roll-up door appliance garage for countertop storage',
    image: 'https://images.pexels.com/photos/2724762/pexels-photo-2724762.jpeg',
    category: 'kitchen',
    rating: 4.6,
    inStock: true
  },
  {
    id: '96',
    name: 'Kitchen Open Shelving',
    description: 'Floating open shelves for kitchen display',
    image: 'https://images.pexels.com/photos/2724763/pexels-photo-2724763.jpeg',
    category: 'kitchen',
    rating: 4.7,
    inStock: true
  },
  {
    id: '97',
    name: 'Kitchen Breakfast Nook',
    description: 'Built-in breakfast nook with storage bench',
    image: 'https://images.pexels.com/photos/2724764/pexels-photo-2724764.jpeg',
    category: 'kitchen',
    rating: 4.9,
    inStock: true
  },
  {
    id: '98',
    name: 'Kitchen Plate Rack',
    description: 'Wall-mounted plate rack for dish storage',
    image: 'https://images.pexels.com/photos/2724765/pexels-photo-2724765.jpeg',
    category: 'kitchen',
    rating: 4.4,
    inStock: true
  },
  {
    id: '99',
    name: 'Kitchen Pot Rack',
    description: 'Hanging pot rack for cookware organization',
    image: 'https://images.pexels.com/photos/2724766/pexels-photo-2724766.jpeg',
    category: 'kitchen',
    rating: 4.6,
    inStock: true
  },
  {
    id: '100',
    name: 'Kitchen Cutting Board',
    description: 'Large wooden cutting board with juice groove',
    image: 'https://images.pexels.com/photos/2724767/pexels-photo-2724767.jpeg',
    category: 'kitchen',
    rating: 4.8,
    inStock: true
  },

  // Wardrobes Category (20 items)
  {
    id: '101',
    name: 'Walk-in Wardrobe',
    description: 'Custom walk-in wardrobe with LED lighting and mirror doors',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '102',
    name: 'Sliding Door Wardrobe',
    description: 'Space-saving sliding door wardrobe with multiple compartments',
    image: 'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg',
    category: 'wardrobes',
    rating: 4.9,
    inStock: true
  },
  {
    id: '103',
    name: 'Corner Wardrobe',
    description: 'Corner wardrobe that maximizes space utilization',
    image: 'https://images.pexels.com/photos/1643386/pexels-photo-1643386.jpeg',
    category: 'wardrobes',
    rating: 4.7,
    inStock: true
  },
  {
    id: '104',
    name: 'Mirrored Wardrobe',
    description: 'Full-length mirrored wardrobe doors for bedroom elegance',
    image: 'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '105',
    name: 'Built-in Wardrobe',
    description: 'Custom built-in wardrobe fitted to room dimensions',
    image: 'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg',
    category: 'wardrobes',
    rating: 4.9,
    inStock: true
  },
  {
    id: '106',
    name: 'Armoire Wardrobe',
    description: 'Traditional armoire wardrobe with ornate details',
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
    category: 'wardrobes',
    rating: 4.6,
    inStock: true
  },
  {
    id: '107',
    name: 'Modular Wardrobe System',
    description: 'Flexible modular wardrobe system with interchangeable parts',
    image: 'https://images.pexels.com/photos/1643390/pexels-photo-1643390.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '108',
    name: 'Wardrobe with Drawers',
    description: 'Wardrobe with integrated drawer system for accessories',
    image: 'https://images.pexels.com/photos/1643391/pexels-photo-1643391.jpeg',
    category: 'wardrobes',
    rating: 4.7,
    inStock: true
  },
  {
    id: '109',
    name: 'Open Wardrobe System',
    description: 'Modern open wardrobe system with hanging rods and shelves',
    image: 'https://images.pexels.com/photos/1643392/pexels-photo-1643392.jpeg',
    category: 'wardrobes',
    rating: 4.5,
    inStock: true
  },
  {
    id: '110',
    name: 'Wardrobe Organizer',
    description: 'Internal wardrobe organizer system with compartments',
    image: 'https://images.pexels.com/photos/1643393/pexels-photo-1643393.jpeg',
    category: 'wardrobes',
    rating: 4.6,
    inStock: true
  },
  {
    id: '111',
    name: 'Shoe Storage Wardrobe',
    description: 'Specialized wardrobe with dedicated shoe storage sections',
    image: 'https://images.pexels.com/photos/1643394/pexels-photo-1643394.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '112',
    name: 'Wardrobe with Safe',
    description: 'Security wardrobe with built-in safe compartment',
    image: 'https://images.pexels.com/photos/1643395/pexels-photo-1643395.jpeg',
    category: 'wardrobes',
    rating: 4.9,
    inStock: true
  },
  {
    id: '113',
    name: 'Kids Wardrobe',
    description: 'Child-friendly wardrobe with lower hanging rods',
    image: 'https://images.pexels.com/photos/1643396/pexels-photo-1643396.jpeg',
    category: 'wardrobes',
    rating: 4.7,
    inStock: true
  },
  {
    id: '114',
    name: 'Wardrobe Dressing Table',
    description: 'Wardrobe with integrated dressing table and mirror',
    image: 'https://images.pexels.com/photos/1643397/pexels-photo-1643397.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '115',
    name: 'Vintage Wardrobe',
    description: 'Restored vintage wardrobe with classic design elements',
    image: 'https://images.pexels.com/photos/1643398/pexels-photo-1643398.jpeg',
    category: 'wardrobes',
    rating: 4.6,
    inStock: true
  },
  {
    id: '116',
    name: 'Wardrobe Lighting System',
    description: 'LED lighting system for wardrobe interior illumination',
    image: 'https://images.pexels.com/photos/1643399/pexels-photo-1643399.jpeg',
    category: 'wardrobes',
    rating: 4.5,
    inStock: true
  },
  {
    id: '117',
    name: 'Wardrobe Accessories Kit',
    description: 'Complete accessories kit for wardrobe organization',
    image: 'https://images.pexels.com/photos/1643400/pexels-photo-1643400.jpeg',
    category: 'wardrobes',
    rating: 4.7,
    inStock: true
  },
  {
    id: '118',
    name: 'Wardrobe Handles Set',
    description: 'Premium handle set for wardrobe doors and drawers',
    image: 'https://images.pexels.com/photos/1643401/pexels-photo-1643401.jpeg',
    category: 'wardrobes',
    rating: 4.4,
    inStock: true
  },
  {
    id: '119',
    name: 'Wardrobe Interior Fittings',
    description: 'Complete interior fittings for wardrobe customization',
    image: 'https://images.pexels.com/photos/1643402/pexels-photo-1643402.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '120',
    name: 'Wardrobe Maintenance Kit',
    description: 'Maintenance kit for wardrobe care and upkeep',
    image: 'https://images.pexels.com/photos/1643403/pexels-photo-1643403.jpeg',
    category: 'wardrobes',
    rating: 4.6,
    inStock: true
  },

  // Custom Category (20 items)
  {
    id: '121',
    name: 'Custom Bookshelf',
    description: 'Floor-to-ceiling custom bookshelf with adjustable shelves',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
    category: 'custom',
    rating: 4.7,
    inStock: true
  },
  {
    id: '122',
    name: 'Custom Entertainment Center',
    description: 'Built-in entertainment center with cable management',
    image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
    category: 'custom',
    rating: 4.8,
    inStock: true
  },
  {
    id: '123',
    name: 'Custom Room Divider',
    description: 'Decorative room divider with storage compartments',
    image: 'https://images.pexels.com/photos/1370297/pexels-photo-1370297.jpeg',
    category: 'custom',
    rating: 4.6,
    inStock: true
  },
  {
    id: '124',
    name: 'Custom Staircase',
    description: 'Handcrafted wooden staircase with custom railings',
    image: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg',
    category: 'custom',
    rating: 4.9,
    inStock: true
  },
  {
    id: '125',
    name: 'Custom Window Seat',
    description: 'Built-in window seat with storage underneath',
    image: 'https://images.pexels.com/photos/1370299/pexels-photo-1370299.jpeg',
    category: 'custom',
    rating: 4.7,
    inStock: true
  },
  {
    id: '126',
    name: 'Custom Bar Counter',
    description: 'Home bar counter with built-in wine storage',
    image: 'https://images.pexels.com/photos/1370300/pexels-photo-1370300.jpeg',
    category: 'custom',
    rating: 4.8,
    inStock: true
  },
  {
    id: '127',
    name: 'Custom Fireplace Mantel',
    description: 'Ornate fireplace mantel with custom carvings',
    image: 'https://images.pexels.com/photos/1370301/pexels-photo-1370301.jpeg',
    category: 'custom',
    rating: 4.9,
    inStock: true
  },
  {
    id: '128',
    name: 'Custom Ceiling Beams',
    description: 'Decorative ceiling beams for rustic interior design',
    image: 'https://images.pexels.com/photos/1370302/pexels-photo-1370302.jpeg',
    category: 'custom',
    rating: 4.6,
    inStock: true
  },
  {
    id: '129',
    name: 'Custom Wall Paneling',
    description: 'Elegant wall paneling for sophisticated interiors',
    image: 'https://images.pexels.com/photos/1370303/pexels-photo-1370303.jpeg',
    category: 'custom',
    rating: 4.8,
    inStock: true
  },
  {
    id: '130',
    name: 'Custom Closet System',
    description: 'Complete custom closet organization system',
    image: 'https://images.pexels.com/photos/1370304/pexels-photo-1370304.jpeg',
    category: 'custom',
    rating: 4.7,
    inStock: true
  },
  {
    id: '131',
    name: 'Custom Mudroom Storage',
    description: 'Organized mudroom storage with hooks and cubbies',
    image: 'https://images.pexels.com/photos/1370305/pexels-photo-1370305.jpeg',
    category: 'custom',
    rating: 4.5,
    inStock: true
  },
  {
    id: '132',
    name: 'Custom Garage Storage',
    description: 'Wall-mounted garage storage system for tools',
    image: 'https://images.pexels.com/photos/1370306/pexels-photo-1370306.jpeg',
    category: 'custom',
    rating: 4.6,
    inStock: true
  },
  {
    id: '133',
    name: 'Custom Bathroom Vanity',
    description: 'Custom bathroom vanity with integrated storage',
    image: 'https://images.pexels.com/photos/1370307/pexels-photo-1370307.jpeg',
    category: 'custom',
    rating: 4.8,
    inStock: true
  },
  {
    id: '134',
    name: 'Custom Laundry Room Cabinets',
    description: 'Functional laundry room cabinets with folding station',
    image: 'https://images.pexels.com/photos/1370308/pexels-photo-1370308.jpeg',
    category: 'custom',
    rating: 4.7,
    inStock: true
  },
  {
    id: '135',
    name: 'Custom Playroom Storage',
    description: 'Child-friendly playroom storage with toy organization',
    image: 'https://images.pexels.com/photos/1370309/pexels-photo-1370309.jpeg',
    category: 'custom',
    rating: 4.9,
    inStock: true
  },
  {
    id: '136',
    name: 'Custom Home Office Built-ins',
    description: 'Complete home office built-in furniture solution',
    image: 'https://images.pexels.com/photos/1370310/pexels-photo-1370310.jpeg',
    category: 'custom',
    rating: 4.8,
    inStock: true
  },
  {
    id: '137',
    name: 'Custom Wine Cellar',
    description: 'Temperature-controlled custom wine cellar design',
    image: 'https://images.pexels.com/photos/1370311/pexels-photo-1370311.jpeg',
    category: 'custom',
    rating: 4.9,
    inStock: true
  },
  {
    id: '138',
    name: 'Custom Library Shelving',
    description: 'Floor-to-ceiling library shelving with rolling ladder',
    image: 'https://images.pexels.com/photos/1370312/pexels-photo-1370312.jpeg',
    category: 'custom',
    rating: 4.7,
    inStock: true
  },
  {
    id: '139',
    name: 'Custom Display Cases',
    description: 'Glass display cases for collectibles and artifacts',
    image: 'https://images.pexels.com/photos/1370313/pexels-photo-1370313.jpeg',
    category: 'custom',
    rating: 4.6,
    inStock: true
  },
  {
    id: '140',
    name: 'Custom Furniture Restoration',
    description: 'Professional restoration service for antique furniture',
    image: 'https://images.pexels.com/photos/1370314/pexels-photo-1370314.jpeg',
    category: 'custom',
    rating: 4.8,
    inStock: true
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@furniture.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: '2',
    name: 'John Customer',
    email: 'john@example.com',
    password: 'customer123',
    role: 'customer'
  }
];