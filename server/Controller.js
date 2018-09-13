const router = require('express').Router();
const modelo = require('./Model');
const MesasService = require('./service/MesasService');

router.get('/mesas', async function(req, res) {
  const mesas = await MesasService.getMesasConCupos();
  res.json(mesas);
});

router.get('/inscripcion', function(req, res) {
    modelo.sequelize.transaction((tr) => {
        return modelo.Interesado.create({
            email: 'pepe@pepe.com',
            nombre: 'Pepe de la gente'
        }, {transaction: tr})
        .then((interesado) => {
            return modelo.Inscripcion.create({
                interesadoId: interesado.id,
                mesaId: 3
            }, {transaction: tr})
        });
    })
    ;
});

module.exports = router;