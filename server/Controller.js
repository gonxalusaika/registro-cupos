const router = require('express').Router();
const modelo = require('./Model');

router.get('/mesas', function(req, res) {
  modelo.Mesa.findAll()
    .then(mesas => {
      res.json(mesas);
    });
    // modelo.Mesa.findAll({
    //     attributes:['id', [modelo.sequelize.fn('COUNT', 'inscripcion.id'), 'cuposCount']],
    //     include: [
    //         {
    //             model: modelo.Inscripcion,
    //             attributes: []
    //         }],
    //     group: ['mesa.id'],
    //     row: true})
    //     .then(mesas => {
    //         res.json(mesas);
    //     });
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