const nodemailer = require("nodemailer");
const Email = require('email-templates');

const sender = process.env.EMAILER_USER;
const password = process.env.EMAILER_PASSWORD;

if (!sender) throw 'EMAILER_USER no esta definido';
if (!password) throw 'EMAILER_PASSWORD no esta definido';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password
  }
});

exports.enviarEmailRegistro = function (datosPersonales, mesasElegidas) {
    const email = new Email({
        message: {
          from: sender
        },
        transport: transporter
      });
      
      email
        .send({
          template: 'resumen-inscripcion',
          message: {
            to: datosPersonales.email
          },
          locals: {
            datosPersonales: datosPersonales,
            rotaciones: mesasElegidas
          }
        })
        .then(console.log)
        .catch(console.error);
}