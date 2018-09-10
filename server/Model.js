import Sequelize from 'sequelize';

const sequelize = new Sequelize('registro', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

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
Inscripcion.hasOne(Interesado);
Inscripcion.hasOne(Mesa);

export default {
  sequelize: sequelize,
  Interesado: Interesado,
  Mesa: Mesa,
  Inscripcion: Inscripcion
}