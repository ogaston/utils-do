const regions = {
  cibao: {
    name: "Cibao",
    norte: {
      id: 1,
      name: "Cibao Norte"
    },
    sur: {
      id: 2,
      name: "Cibao Sur"
    },
    nordeste: {
      id: 3,
      name: "Cibao Nordeste"
    },
    noroeste: {
      id: 4,
      name: "Cibao Noroeste"
    },
  },
  sur: {
    name: "Sur",
    valdesia: {
      id: 5,
      name: "Valdesia"
    },
    elValle: {
      id: 6,
      name: "El Valle"
    },
    enriquillo: {
      id: 7,
      name: "Enriquillo"
    }
  },
  este: {
    name: "Este",
    yuma: {
      id: 8,
      name: "Yuma"
    },
    higuamo: {
      id: 9,
      name: "Higuamo"
    },
    ozama: {
      id: 10,
      name: "Ozama"
    }

  }
}


const provinces = {
  Azua: {
    region: {
      id: regions.sur.valdesia.id,
      name: regions.sur.name,
      zone: regions.sur.valdesia.name
    },
    municipality: {
      "Azua de Compostela": [
        "Barreras",
        "Barro Arriba",
        "Clavellina",
        "Emma Balaguer Viuda Vallejo",
        "Las Barías-La Estancia",
        "Las Lomas",
        "Los Jovillos",
        "Puerto Viejo"
      ],
      Estebanía: [],
      Guayabal: [],
      "Las Charcas": ["Hatillo", "Palmar de Ocoa"],
      "Las Yayas de Viajama": ["Villarpando", "Hato Nuevo-Cortés"],
      "Padre Las Casas": ["La Siembra", "Las Lagunas", "Los Fríos"],
      Peralta: [],
      "Pueblo Viejo": ["El Rosario"],
      "Sabana Yegua": ["Proyecto 4", "Ganadero", "Proyecto 2-C"],
      "Tábara Arriba": ["Amiama Gómez", "Los Toros", "Tábara Abajo"]
    }
  },
  Bahoruco: {
    region: {
      id: regions.sur.enriquillo.id,
      name: regions.sur.name,
      zone: regions.sur.enriquillo.name
    },
    municipality: {
      Neiba: ["El Palmar"],
      Galván: ["El Salado"],
      "Los Ríos": ["Las Clavellinas"],
      Tamayo: [
        "Cabeza de Toro",
        "Mena",
        "Monserrat",
        "Santa Bárbara-El 6 ",
        "Santana ",
        "Uvilla"
      ]
    }
  },
  Barahona: {
    region: {
      id: regions.sur.enriquillo.id,
      name: regions.sur.name,
      zone: regions.sur.enriquillo.name
    },
    municipality: {
      Barahona: ["El Cachón", "La Guázara", "Villa Central"],
      Cabral: [],
      "El Peñón": [],
      Enriquillo: ["Arroyo Dulce"],
      Fundación: ["Pescadería"],
      Jaquimeyes: ["Palo Alto"],
      "La Ciénaga": ["Bahoruco"],
      "Las Salinas": [],
      Paraíso: ["Los Patos"],
      Polo: [],
      "Vicente Noble": ["Canoa", "Fondo Negro", "Quita Coraza"]
    }
  },
  "Dajabón": {
    region: {
      id: regions.cibao.noroeste.id,
      name: regions.cibao.name,
      zone: regions.cibao.noroeste.name
    },
    municipality: {
      Dajabón: ["Cañongo"],
      "El Pino": ["Manuel Bueno"],
      "Loma de Cabrera": ["Capotillo", "Santiago de la Cruz"],
      Partido: [],
      Restauración: []
    }
  },
  Duarte: {
    region: {
      id: regions.cibao.nordeste.id,
      name: regions.cibao.name,
      zone: regions.cibao.nordeste.name
    },
    municipality: {
      "San Francisco de Macorís": [
        "Cenoví",
        "Jaya",
        "La Peña",
        "Presidente Don Antonio Guzmán Fernández"
      ],
      Arenoso: ["El Aguacate", "Los Coles"],
      Castillo: [],
      "Eugenio María de Hostos": ["Sabana Grande"],
      "Las Guáranas": [],
      Pimentel: [],
      "Villa Riva": [
        "Agua Santa del Yuna",
        "Barraquito",
        "Cristo Rey de Guaraguao",
        "Las Táranas"
      ]
    }
  },
  "El Seibo": {
    region: {
      id: regions.este.yuma.id,
      name: regions.este.name,
      zone: regions.este.yuma.name
    },
    municipality: {
      "El Seibo": ["Pedro Sánchez", "San Francisco-Vicentillo", "Santa Lucía"],
      Miches: ["El Cedro", "La Gina"]
    }
  },
  "Elías Piña": {
    region: {
      id: regions.sur.elValle.id,
      name: regions.sur.name,
      zone: regions.sur.elValle.name
    },
    municipality: {
      Comendador: ["Guayabo", "Sabana Larga"],
      Bánica: ["Sabana Cruz", "Sabana Higuero"],
      "El Llano": ["Guanito"],
      "Hondo Valle": ["Rancho de la Guardia"],
      "Juan Santiago": [],
      "Pedro Santana": ["Río Limpio"]
    }
  },
  Espaillat: {
    region: {
      id: regions.cibao.norte.id,
      name: regions.cibao.name,
      zone: regions.cibao.norte.name
    },
    municipality: {
      Moca: [
        "Canca La Reina",
        "El Higüerito",
        "José Contreras",
        "Juan López",
        "La Ortega",
        "Las Lagunas",
        "Monte de la Jagua",
        "San Víctor"
      ],
      "Cayetano Germosén": [],
      "Gaspar Hernández": ["Joba Arriba", "Veragua", "Villa Magante"],
      "Jamao al Norte": []
    }
  },
  "Hato Mayor": {
    region: {
      id: regions.este.higuamo.id,
      name: regions.este.name,
      zone: regions.este.higuamo.name
    },
    municipality: {
      "Hato Mayor del Rey": ["Guayabo Dulce", "Mata Palacio", "Yerba Buena"],
      "El Valle": [],
      "Sabana de la Mar": ["Elupina Cordero de Las Cañitas"]
    }
  },
  "Hermanas Mirabal": {
    region: {
      id: regions.cibao.nordeste.id,
      name: regions.cibao.name,
      zone: regions.cibao.nordeste.name
    },
    municipality: {
      Salcedo: ["Jamao Afuera"],
      Tenares: ["Blanco"],
      "Villa Tapia": []
    }
  },
  Independencia: {
    region: {
      id: regions.sur.enriquillo.id,
      name: regions.sur.name,
      zone: regions.sur.enriquillo.name
    },
    municipality: {
      Jimaní: ["Boca de Cachón", "El Limón"],
      Cristóbal: ["El Batey 8"],
      Duvergé: ["Vengan a Ver"],
      "La Descubierta": [],
      Mella: ["La Colonia"],
      "Postrer Río": ["Guayabal"]
    }
  },
  "La Altagracia": {
    region: {
      id: regions.este.yuma.id,
      name: regions.este.name,
      zone: regions.este.yuma.name
    },
    municipality: {
      Higüey: ["La Otra Banda", "Lagunas de Nisibón", "Verón-Punta Cana"],
      "San Rafael del Yuma": ["Bayahibe", "Boca de Yuma"]
    }
  },
  "La Romana": {
    region: {
      id: regions.este.yuma.id,
      name: regions.este.name,
      zone: regions.este.yuma.name
    },
    municipality: {
      "La Romana": ["Caleta"],
      Guaymate: [],
      "Villa Hermosa": ["Cumayasa"]
    }
  },
  "La Vega": {
    region: {
      id: regions.cibao.sur.id,
      name: regions.cibao.name,
      zone: regions.cibao.sur.name
    },
    municipality: {
      "La Concepción de La Vega": ["El Ranchito", "Río Verde Arriba"],
      Constanza: ["La Sabina", "Tireo"],
      Jarabacoa: ["Buena Vista", "Manabao"],
      "Jima Abajo": ["Rincón"]
    }
  },
  "María Trinidad Sánchez": {
    region: {
      id: regions.cibao.nordeste.id,
      name: regions.cibao.name,
      zone: regions.cibao.nordeste.name
    },
    municipality: {
      Nagua: ["Arroyo al Medio ", "Las Gordas ", "San José de Matanzas"],
      Cabrera: ["Arroyo Salado ", "La Entrada"],
      "El Factor": ["El Pozo"],
      "Río San Juan": []
    }
  },
  "Monseñor Nouel": {
    region: {
      id: regions.cibao.sur.id,
      name: regions.cibao.name,
      zone: regions.cibao.sur.name
    },
    municipality: {
      Bonao: [
        "Arroyo Toro-Masipedro ",
        "La Salvia-Los Quemados ",
        "Jayaco ",
        "Juma Bejucal ",
        "Sabana del Puerto"
      ],
      Maimón: [],
      "Piedra Blanca": ["Juan Adrián ", "Villa Sonador"]
    }
  },
  Montecristi: {
    region: {
      id: regions.cibao.noroeste.id,
      name: regions.cibao.name,
      zone: regions.cibao.noroeste.name
    },
    municipality: {
      Montecristi: [],
      Castañuela: ["Palo Verde"],
      Guayubín: ["Cana Chapetón ", "Hatillo Palma ", "Villa Elisa"],
      "Las Matas de Santa Cruz": [],
      "Pepillo Salcedo": [],
      "Villa Vásquez": []
    }
  },
  "Monte Plata": {
    region: {
      id: regions.este.higuamo.id,
      name: regions.este.name,
      zone: regions.este.higuamo.name
    },
    municipality: {
      "Monte Plata": ["Boyá ", "Chirino ", "Don Juan"],
      Bayaguana: [],
      Peralvillo: [],
      "Sabana Grande de Boyá": ["Gonzalo ", "Majagual"],
      Yamasá: ["Los Botados"]
    }
  },
  Pedernales: {
    region: {
      id: regions.sur.enriquillo.id,
      name: regions.sur.name,
      zone: regions.sur.enriquillo.name
    },
    municipality: {
      Pedernales: ["José Francisco Peña Gómez ", "Juancho"],
      Oviedo: []
    }
  },
  Peravia: {
    region: {
      id: regions.sur.valdesia.id,
      name: regions.sur.name,
      zone: regions.sur.valdesia.name
    },
    municipality: {
      Baní: [
        "Catalina ",
        "El Carretón ",
        "El Limonal ",
        "Las Barías ",
        "Matanzas ",
        "Paya ",
        "Sabana Buey ",
        "Villa Fundación ",
        "Villa Sombrero"
      ],
      Nizao: ["Pizarrete ", "Santana"]
    }
  },
  "Puerto Plata": {
    region: {
      id: regions.cibao.norte.id,
      name: regions.cibao.name,
      zone: regions.cibao.norte.name
    },
    municipality: {
      "Puerto Plata": ["Maimón ", "Yásica Arriba"],
      Altamira: ["Río Grande"],
      Guananico: [],
      Imbert: [],
      "Los Hidalgos": ["Navas"],
      Luperón: ["Belloso ", "Estrecho ", "La Isabela"],
      Sosúa: ["Cabarete", "Sabaneta de Yásica"],
      "Villa Isabela": ["Estero Hondo ", "Gualete ", "La Jaiba"],
      "Villa Montellano": []
    }
  },
  "Samamá": {
    region: {
      id: regions.cibao.nordeste.id,
      name: regions.cibao.name,
      zone: regions.cibao.nordeste.name
    },
    municipality: {
      Samaná: ["Arroyo Barril ", "El Limón ", "Las Galeras"],
      "Las Terrenas": [],
      Sánchez: []
    }
  },
  "San Cristóbal": {
    region: {
      id: regions.sur.valdesia.id,
      name: regions.sur.name,
      zone: regions.sur.valdesia.name
    },
    municipality: {
      "San Cristóbal": ["Hato Damas"],
      "Bajos de Haina": ["El Carril"],
      "Cambita Garabito": ["Cambita El Pueblecito"],
      "Los Cacaos": [],
      "Sabana Grande de Palenque": [],
      "San Gregorio de Nigua": [],
      "Villa Altagracia": ["La Cuchilla ", "Medina ", "San José del Puerto"],
      Yaguate: []
    },
  },
    "San José de Ocoa": {
      region: {
        id: regions.sur.valdesia.id,
        name: regions.sur.name,
        zone: regions.sur.valdesia.name
      },
      municipality: {
        "San José de Ocoa": [
          "El Naranjal ",
          "El Pinar ",
          "La Ciénaga ",
          "Nizao-Las Auyamas"
        ],
        "Rancho Arriba": [],
        "Sabana Larga": []
      }
    },
    "San Juan": {
      region: {
        id: regions.sur.elValle.id,
        name: regions.sur.name,
        zone: regions.sur.elValle.name
      },
      municipality: {
        "San Juan de la Maguana": [
          "El Rosario ",
          "Guanito ",
          "Hato del Padre ",
          "Hato Nuevo ",
          "La Jagua ",
          "Las Charcas de María Nova ",
          "Pedro Corto ",
          "Sabana Alta ",
          "Sabaneta"
        ],
        Bohechío: ["Arroyo Cano ", "Yaque"],
        "El Cercado": ["Batista ", "Derrumbadero"],
        "Juan de Herrera": ["Jínova"],
        "Las Matas de Farfán": ["Carrera de Yegua", "Matayaya"],
        Vallejuelo: ["Jorjillo"]
      }
    },
    "San Pedro de Macorís": {
      region: {
        id: regions.este.higuamo.id,
        name: regions.este.name,
        zone: regions.este.higuamo.name
      },
      municipality: {
        "San Pedro de Macorís": [],
        Consuelo: [],
        Guayacanes: [],
        Quisqueya: [],
        "Ramón Santana": [],
        "San José de Los Llanos": ["El Puerto ", "Gautier"]
      }
    },
    "Sánchez Ramírez": {
      region: {
        id: regions.cibao.sur.id,
        name: regions.cibao.name,
        zone: regions.cibao.sur.name
      },
      municipality: {
        Cotuí: ["Caballero ", "Comedero Arriba ", "Quita Sueño"],
        Cevicos: ["La Cueva ", "Platanal"],
        Fantino: [],
        "La Mata": ["Angelina ", "La Bija ", "Hernando Alonzo"]
      }
    },
    Santiago: {
      region: {
        id: regions.cibao.norte.id,
        name: regions.cibao.name,
        zone: regions.cibao.norte.name
      },
      municipality: {
        Santiago: [
          "Baitoa ",
          "Hato del Yaque ",
          "La Canela ",
          "Pedro García ",
          "San Francisco de Jacagua"
        ],
        Bisonó: [],
        Jánico: ["El Caimito ", "Juncalito"],
        "Licey al Medio": ["Las Palomas"],
        Puñal: ["Canabacoa ", "Guayabal"],
        "Sabana Iglesia": [],
        "San José de las Matas": ["El Rubio ", "La Cuesta ", "Las Placetas"],
        Tamboril: ["Canca La Piedra"],
        "Villa González": ["El Limón ", "Palmar Arriba"]
      }
    },
    "Santiago Rodríguez": {
      region: {
        id: regions.cibao.noroeste.id,
        name: regions.cibao.name,
        zone: regions.cibao.noroeste.name
      },
      municipality: {
        "San Ignacio de Sabaneta": [],
        "Los Almácigos": [],
        Monción: []
      }
    },
    "Santo Domingo": {
      region: {
        id: regions.este.ozama.id,
        name: regions.este.name,
        zone: regions.este.ozama.name
      },
      municipality: {
        "Santo Domingo Este": ["San Luis"],
        "Boca Chica": ["La Caleta"],
        "Los Alcarrizos": ["Palmarejo-Villa Linda ", "Pantoja"],
        "Pedro Brand": ["La Cuaba ", "La Guáyiga"],
        "San Antonio de Guerra": ["Hato Viejo"],
        "Santo Domingo Norte": ["La Victoria"],
        "Santo Domingo Oeste": []
      }
    },
    Valverde: {
      region: {
        id: regions.cibao.noroeste.id,
        name: regions.cibao.name,
        zone: regions.cibao.noroeste.name
      },
      municipality: {
        Mao: ["Ámina ", "Guatapanal ", "Jaibón (Pueblo Nuevo)"],
        Esperanza: ["Boca de Mao ", "Jicomé ", "Maizal ", "Paradero"],
        "Laguna Salada": ["Cruce de Guayacanes ", "Jaibón ", "La Caya"]
      }
    }
  }


  module.exports ={ regions, provinces }


