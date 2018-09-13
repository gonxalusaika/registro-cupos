const modelo = require('../Model');
const Sequelize = require('sequelize');
const sequelize = modelo.sequelize;

exports.getMesasConCupos = async () => {
  const mesas = await modelo.Mesa.findAll({
    attributes: { 
      include: [[Sequelize.fn("COUNT", Sequelize.col("inscripcions.id")), "inscripciones"]] 
    },
    include: [{
      model: modelo.Inscripcion,
      attributes: []
    }],
    group: ['mesa.id', 'inscripcions.id']
  });
  return mesas;
};
