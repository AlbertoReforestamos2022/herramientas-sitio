const responseObj = {
    "hola": "Hola... ¿En que te puedo ayudar? ",
    "Hola": "Hola... ¿En que te puedo ayudar? ",
    "hey" : "¿Cómo estás?",
    1 : 'Reforestación con empresa 🏙',
    2 : 'Marketing con causa 📱',
    3 : 'Voluntariado 🦺',
    4 : 'Donación de árboles 🌳',
    5 : 'Bolsa de Trabajo 👨‍👧',
    6 : 'Servicio Social 👨‍👧',
    7 : 'Centinelas del Tiempo 📗', 
    8 : 'Adopta un árbol 🌱',
    9 : '¿Cómo va mi arbolito? 🌲 (Este no va !)',
  };
  
  
  const tituloInfo = [ 
    'Nuestro horario de atención por este canal es de lunes a viernes de 9 am. a 6 pm. Después de este horario, al siguiente día atenderemos tu petición.',
    '🙅‍♂️ Nunca te voy a pedir información personal, tampoco la escribas ni mandes imágenes. Ej. Números de tarjetas de débito o crédito, contraseñas, NIP, etc. 🚫',
    'Nuestro aviso de privacidad ha sido actualizado, puedes consultarlo en: <a href="#">www.reforestamos.org/aviso-privacidad</a>',
    '¡Hola! ¡Qué bueno que escribes! ¿con qué opción te puedo ayudar?'
  ];
  
  const parrafosTitulos = [
    {numero: 1, parrafo: '🙅‍♂️ Nunca te voy a pedir información personal, tampoco la escribas ni mandes imágenes. Ej. Números de tarjetas de débito o crédito, contraseñas, NIP, etc. 🚫'},
    {numero: 2, parrafo: 'Nuestro aviso de privacidad ha sido actualizado, puedes consultarlo en: www.reforestamos.org/aviso-privacidad'},
    {numero: 3, parrafo: '¡Hola! ¿Con qué opción te puedo ayudar?'},
    {numero: 4, parrafo: 'Instrucciones: Escribe el número de acuerdo al tema de tu interés'}
  ]

  const parrafosTitulosEn = [
    {numero: 1, parrafo: '🙅‍♂️ I will never ask you for personal information, nor will you write it down or send images. E.g. Credit or debit card numbers, passwords, PINs, etc.. 🚫'},
    {numero: 2, parrafo: 'Our privacy notice has been updated, you can consult it at: www.reforestamos.org/aviso-privacidad'},
    {numero: 3, parrafo: 'Hello! What option can I help you with?'},
    {numero: 4, parrafo: 'Instructions: Write the number according to the topic of your interest.'}
  ]
  
  const listaOpciones = [
    {numero: 1, opcion: 'Voluntariado 🦺'},
    {numero: 2, opcion: 'Marketing con causa 📱'},
    {numero: 3, opcion: 'Adopta un árbol 🌱'},
    {numero: 4, opcion: 'Bolsa de trabajo 👨‍👧'},
    {numero: 5, opcion: 'Centinelas del Tiempo 📷'},
    {numero: 6, opcion: 'Compra y/o venta de árboles 🌳'},
    {numero: 7, opcion: 'Donar💰'},
    {numero: 8, opcion: 'Contacto ☎️'},
    {numero: 9, opcion: 'Eventos y convocatorias 📝'}
  ]; 
  
  const listaVoluntariado = [
    {numero: 1.1, opcion: 'Reforestación corporativa'},
    {numero: 1.2, opcion: 'Voluntariado'}
  ];

  const listaVoluntariadoEn = [
    {numero: 1.1, opcion: 'Corporate reforestation'},
    {numero: 1.2, opcion: 'Volunteering'}
  ];
  
  const listaMarketing = [
    {numero: 2.1, opcion: 'Campañas activas'},
    {numero: 2.2, opcion: '¿Cómo realizar una campaña?'}
  ];

  const listaMarketingEn = [
    {numero: 2.1, opcion: 'Active campaigns'},
    {numero: 2.2, opcion: 'How to run a campaign?'}
  ];
  
  const listaAdopta  = [
    {numero: 3.1, opcion: '¿Cómo adoptar?'}
  ];

  const listaAdoptaEn  = [
    {numero: 3.1, opcion: 'How to adopt?'}
  ];
  
  const listaBolsa = [
    {numero: 4.1, opcion: 'Vacantes'},
    {numero: 4.2, opcion: 'Servicio social'}
  ]

  const listaBolsaEn = [
    {numero: 4.1, opcion: 'Vacancies'},
    {numero: 4.2, opcion: 'Social Service'}
  ]
  
  const listaCentinelas = [
    {numero: 5.1, opcion: 'Convocatoria 2023'},
    {numero: 5.2, opcion: 'Fotografías ganadoras edición 2022'},
    {numero: 5.3, opcion: 'Libro Centinelas del Tiempo'}
  ]

  const listaCentinelasEn = [
    {numero: 5.1, opcion: 'Call for proposals 2024'},
    {numero: 5.2, opcion: 'Winning photographs 2022 edition'},
    {numero: 5.3, opcion: 'Book Centinelas del Tiempo'}
  ]
  
  const listaCompra = [
  
  ]
  
  const listaDonar = [
    {numero: 7.1, opcion: '¿Cómo donar?'},
    {numero: 7.2, opcion: '¿Para qué se utilizará mi donativo?'},
    {numero: 7.3, opcion: '¿Cómo obtener mi recibo deducible de impuestos?'}
  ]

  const listaDonarEn = [
    {numero: 7.1, opcion: 'How to donate?'},
    {numero: 7.2, opcion: 'What will my donation be used for?'},
    {numero: 7.3, opcion: 'How do I get my tax-deductible receipt?'}
  ]
  
  const listaContacto = [
    {numero: 8.1, opcion: 'Horario de atención'},
    {numero: 8.2, opcion: 'Número telefónico'},
    {numero: 8.3, opcion: 'Oficinas'},
    {numero: 8.4, opcion: 'Directorio'}
  ]

  const listaContactoEn = [
    {numero: 8.1, opcion: 'Hours of operation'},
    {numero: 8.2, opcion: 'Telephone number'},
    {numero: 8.3, opcion: 'Offices'},
    {numero: 8.4, opcion: 'Directory'}
  ]
  
  const listaEventos = [
    {numero: 9.1, opcion: 'Próximos eventos'},
    {numero: 9.2, opcion: 'Convocatorias activas'}
  ]

  const listaEventosEn = [
    {numero: 9.1, opcion: 'Upcoming events'},
    {numero: 9.2, opcion: 'Active calls for proposals'}
  ]