const Sequelize =  require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging:  true //false
  })
}
else {
  sequelize = new Sequelize('registro', 'postgres', 'postgres', {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });
}

const Interesado = sequelize.define('interesado', {
  nombre: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  organizacion: {
    type: Sequelize.STRING
  }
});

const Mesa = sequelize.define('mesa', {
  topico: {
    type: Sequelize.STRING,
    unique: true
  },
  descripcion: {
    type: Sequelize.TEXT
  },
  organizacion: {
    type: Sequelize.STRING
  },
  moderador: {
    type: Sequelize.STRING
  },
  rol: {
    type: Sequelize.STRING
  },
  indice: {
    type: Sequelize.INTEGER
  }
});

const Inscripcion = sequelize.define('inscripcion', {
  rotacion: {
    type: Sequelize.INTEGER
  }
});
Mesa.hasMany(Inscripcion);
Interesado.hasMany(Inscripcion);
Inscripcion.belongsTo(Interesado);
Inscripcion.belongsTo(Mesa);

sequelize.sync({force: false})
  .then(() => {
    console.log('BD iniciada');
  });

module.exports = {
  sequelize,
  Interesado,
  Mesa,
  Inscripcion
}
