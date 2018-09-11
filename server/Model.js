const Sequelize =  require('sequelize');

let sequelize;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
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
  }
});

const Mesa = sequelize.define('mesa', {
  topico: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  }
});

const Inscripcion = sequelize.define('inscripcion', {

});
Mesa.hasMany(Inscripcion);
Interesado.hasMany(Inscripcion);
//Inscripcion.belongsTo(Interesado);
//Inscripcion.belongsTo(Mesa);

sequelize.sync({force: false})
  .then(() => {
    console.log('Base de datos creada');
  });

module.exports = {
  sequelize,
  Interesado,
  Mesa,
  Inscripcion
}