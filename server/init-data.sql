--cat server/init-data.sql | heroku pg:psql

INSERT INTO mesas(topico, descripcion, 'createdAt', 'updatedAt') VALUES
  ('Mesa importante', 'Aqui se va a hablar de cosas importantes que suceden en el mundo en la actualidad y que le podría interesar a un montón de gente', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Gatitos en internet', 'Debatiremos sobre los gatos que han invadido la red y serán nuestros lideres en el futuro', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Evento super interesante', 'Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Evento super interesante 2', 'Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  ;