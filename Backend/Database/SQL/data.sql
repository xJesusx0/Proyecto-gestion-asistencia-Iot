-- Insertar datos en la tabla roles
INSERT INTO roles (nombre, descripcion) VALUES  ('Administrador', 'Rol con permisos administrativos'),
                                                ('Profesor', 'Rol para los profesores'),
                                                ('Estudiante', 'Rol para los estudiantes');



insert into facultades(nombre,decano) values ('Ingenierias','Piedad Marchena Villanueva');

insert into programas (nombre,fkid_facultad,lugar_de_oferta,modalidad,duracion) values ('Técnica Profesional en Mantenimiento de Sistemas Informáticos',1,'Soledad','Presencial',5);

insert into usuarios (id_usuario,correo,contraseña, nombres, apellidos,numero_telefonico) values ('1234','jalbertoperea@unibarranquilla.edu.co','$2b$12$WRuuBqRyibTCehiNljjcC.hOdgC/s4pssLCOn0w2/tisdSCJyNkTu', 'Jesus Alberto', 'Perea Linares', '123456789');
insert into usuarios_roles(id_usuario,id_rol) values ('1234',3);

insert into usuarios (id_usuario,correo,contraseña, nombres, apellidos,numero_telefonico) values ('1237','mdsolis@unibarranquilla.edu.co','$2b$12$g.JWyTfs0.dr0L1gNGxTR.Y93XTgZndPbJGFf9Y3X5JpKG1wbqb5.', 'Moises David', 'Solis Morrillo', '234567891');
insert into usuarios_roles(id_usuario,id_rol) values ('1237',3);
insert into usuarios_roles(id_usuario,id_rol) values ('1237',1);
