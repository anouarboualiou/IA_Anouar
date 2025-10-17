export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch Pro X',
    vendedor: { nombre: 'ElectroHub', rating: 4.8 },
    imagenes: [
      'https://www.redlemon.com.mx/cdn/shop/articles/c0e988f39e43c49ce20f20a09c487780.jpg?v=1680128063',
      'https://http2.mlstatic.com/D_NQ_NP_694844-MLA86610477203_062025-O.webp',
    ],
    enStock: true,
    precio: { moneda: '€', valor: 215.50, enOferta: true },
    caracteristicas: ['GPS integrado', 'Monitor de ritmo cardíaco', 'Resistente al agua (5 ATM)']
  },
  {
    id: 2,
    nombre: 'Auriculares Inalámbricos',
    vendedor: { nombre: 'AudioStore', rating: 4.5 },
    imagenes: [
      'https://i.blogs.es/3c944f/auriculares-bluetooth-cabecera/500_333.jpeg'
    ],
    enStock: false,
    precio: { moneda: '€', valor: 79.99, enOferta: false },
    caracteristicas: ['Cancelación de ruido', 'Batería 20h', 'Bluetooth 5.0']
  },
  {
    id: 3,
    nombre: 'Tablet Ultra HD',
    vendedor: { nombre: 'TechWorld', rating: 4.7 },
    imagenes: [
      'https://www.fotografiarte.es/fotoblog/wp-content/uploads/2024/05/xencelbabs-pen-display-oled-03.webp'
    ],
    enStock: true,
    precio: { moneda: '€', valor: 499.99, enOferta: true },
    caracteristicas: ['Pantalla 12.9"', '128GB almacenamiento', 'Soporte para lápiz']
  }
];
