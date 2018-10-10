const modelo = require('../Model');
const Sequelize = require('sequelize');
const sequelize = modelo.sequelize;
const properties = require('../properties');
const emailService = require('./emailService');
const csv = require('fast-csv');

exports.getMesasConCupos = async () => {
  const mesas = await modelo.Mesa.findAll({
    include: [{
      model: modelo.Inscripcion,
      attributes: ['rotacion']
    }]
  });

  const mesasResult = [];

  mesas.forEach((mesa) => {
    const mesaR = mesa.toJSON();
    mesaR.cupos = [];
    mesaR.inscripcions = undefined;
    for (let index = 0; index < properties.cantRotaciones; index ++) {
      mesaR.cupos.push(
        Math.max(
          properties.cuposPorRotacion - mesa.inscripcions.filter(inscripcion => inscripcion.rotacion === index+1).length,
          0
        ));
    }
    mesasResult.push(mesaR);
  });

  return mesasResult;
};

exports.emailSePuedeUsar = async (email) => {
  const interesadoList = await modelo.Interesado.findAll({
    where: {
      email: email.toLowerCase()
    }
  });
  return interesadoList.length === 0;
}

exports.getInscripciones = async () => {
  const inscripciones = await modelo.Inscripcion.findAll({
    include: [
      modelo.Interesado, modelo.Mesa
    ]
  });
  return inscripciones;
}

exports.enviarEmailRegistro = async (datosPersonales, rotaciones) => {
  const mesas = await modelo.Mesa.findAll({
    attributes: ['id', 'topico']
  });

  const mesasElegidas = rotaciones.map((rotacion) => mesas.find((mesa) => mesa.id === rotacion));

  emailService.enviarEmailRegistro(datosPersonales, mesasElegidas);
}

exports.cargarMesas = async (datos, res) => {
  csv.fromString(datos, {headers: true})
    .on('data', (data) => {
      modelo.Mesa.create({
        topico: data.Titulo,
        descripcion: data.Descripcion,
        organizacion: data.Organizacion,
        moderador: data.Moderador,
        rol: data.Rol
      })
      .then((resultado) => {
        console.log('Mesa creada ' + resultado);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .on('end', () => {
      res.send('Se procesaron registros');
    })
}