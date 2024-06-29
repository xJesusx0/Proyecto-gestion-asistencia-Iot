-- Insertar datos en la tabla roles
INSERT INTO roles (nombre, descripcion) VALUES  ('Administrador', 'Rol con permisos administrativos'),
                                                ('Profesor', 'Rol para los profesores'),
                                                ('Estudiante', 'Rol para los estudiantes');



insert into facultades(nombre,decano) values ('Ingenierias','Piedad Marchena Villanueva');

insert into programas (nombre,fkid_facultad,lugar_de_oferta,modalidad,duracion) values ('Técnica Profesional en Mantenimiento de Sistemas Informáticos',1,'Soledad','Presencial',5);

INSERT INTO personas (id, nombres, apellidos, correo, numero_telefonico) VALUES (1234, 'Jesus Alberto', 'Perea Linares', 'jesusperea@unibarranquilla.edu.co', '123456789');

insert into usuarios (id_usuario,correo,contraseña) values (1234,'jesusperea@unibarranquilla.edu.co','jesus1234');
insert into usuarios_roles(id_usuario,id_rol) values (1234,3);