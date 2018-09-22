const router = require('express').Router();
const modelo = require('./Model');
const MesasService = require('./service/MesasService');
const properties = require('./properties');

router.get('/mesas', async function(req, res) {
  const mesas = await MesasService.getMesasConCupos();
  res.json(mesas);
});

router.post('/inscripcion', function(req, res) {
    modelo.sequelize.transaction((tr) => {
        req.body.datosPersonales.contacto = req.body.datosPersonales.contacto.join();
        return modelo.Interesado.create(req.body.datosPersonales, {transaction: tr})
        .then((interesado) => {
            const rotacionPromises = [];
            req.body.rotaciones.forEach((seleccion, index) => {
                rotacionPromises.push(modelo.Inscripcion.create({
                    mesaId: seleccion,
                    interesadoId: interesado.id,
                    rotacion: index+1
                }, {transaction: tr}))

            });
            return Promise.all(rotacionPromises)
            .then(() => {
                res.json({hola: 'hola'})
            });
        })
    })
    ;
});

router.get('/properties', function(req, res) {
    res.json(properties);
})

module.exports = router;