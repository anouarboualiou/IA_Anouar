export const POSTS = [
  { 
    id: 1, 
    title: 'Primeros pasos con React', 
    content: 'React es una biblioteca de JavaScript para construir interfaces de usuario. En este post exploraremos cómo crear un proyecto desde cero, entender los componentes, y cómo React facilita la creación de aplicaciones interactivas. Aprenderás a usar JSX, cómo manejar eventos y la importancia de la composición de componentes para mantener tu código limpio y reutilizable.' 
  },
  { 
    id: 2, 
    title: '¿Qué son los Hooks?', 
    content: 'Los Hooks son una adición a React que permiten usar state y otras características sin escribir una clase. Los más comunes son useState, useEffect y useContext. En este post detallaremos cada uno de ellos, ejemplos prácticos de uso, y buenas prácticas para integrarlos en tus componentes funcionales, además de cómo los Hooks pueden simplificar la lógica de tus aplicaciones.' 
  },
  { 
    id: 3, 
    title: 'Entendiendo el State', 
    content: 'El state en React representa los datos que cambian con el tiempo y afectan lo que se renderiza en pantalla. Aquí explicaremos cómo inicializar el state, actualizarlo de manera eficiente y cómo manejar estados complejos utilizando objetos y arrays. También veremos cómo el state se combina con los props para crear aplicaciones dinámicas y reactivas.' 
  },
  { 
    id: 4, 
    title: 'Manejo de Eventos en React', 
    content: 'En React, los eventos se manejan de manera similar al HTML, pero con algunas diferencias clave, como el uso de camelCase y la necesidad de pasar funciones en lugar de strings. Este post cubre cómo capturar eventos como clicks, cambios en inputs y envíos de formularios, además de técnicas para evitar re-renderizados innecesarios y mantener un código limpio.' 
  },
  { 
    id: 5, 
    title: 'Renderizado Condicional', 
    content: 'El renderizado condicional permite mostrar u ocultar elementos en función de ciertas condiciones. Veremos varias estrategias: usando if/else, operadores ternarios y cortocircuitos con &&. Además, discutiremos patrones avanzados para evitar duplicación de código y mantener componentes legibles y fáciles de mantener.' 
  },
  { 
    id: 6, 
    title: 'Listas y Keys en React', 
    content: 'Cuando renderizamos listas en React, es crucial asignar una key única a cada elemento para que React pueda identificar cambios de manera eficiente. Este post explica cómo mapear arrays a componentes, cómo elegir keys adecuadas, y cómo evitar problemas comunes que pueden afectar el rendimiento de tu aplicación.' 
  }
];

export function getPostById(id){

  return POSTS.find((post) => post.id === id)
}
