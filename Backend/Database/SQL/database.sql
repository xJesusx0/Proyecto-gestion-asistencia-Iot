-- Tabla para las facultades
CREATE TABLE facultades (
  id_facultad INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  decano VARCHAR(100)
);

-- Tabla para los programas académicos
CREATE TABLE programas (
  id_programa INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  fkid_facultad INT,
  lugar_de_oferta VARCHAR(100),
  modalidad VARCHAR(100),
  duracion INT,
  FOREIGN KEY (fkid_facultad) REFERENCES facultades(id_facultad)
);

-- Tabla para los módulos o asignaturas
CREATE TABLE modulos (
  id_modulo VARCHAR(100) PRIMARY KEY,
  nombre VARCHAR(100),
  creditos INT
);

-- Tabla para los roles
CREATE TABLE roles (
  id_rol INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  descripcion VARCHAR(100)
);

-- Tabla para las personas
CREATE TABLE personas (
    id INT PRIMARY KEY, -- Añadir AUTO_INCREMENT
    correo VARCHAR(100) UNIQUE, -- El correo debe ser único
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    numero_telefonico VARCHAR(100) -- Eliminar la coma final
);

-- Tabla para los usuarios del sistema
CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY,
  correo VARCHAR(100) UNIQUE, -- Añadir UNIQUE para correo
  contraseña VARCHAR(100),
  id_rol INT, -- Cambiar a INT para coincidir con roles(id_rol)
  FOREIGN KEY (id_usuario) REFERENCES personas(id),
  FOREIGN KEY (correo) REFERENCES personas(correo),
  FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

-- Tabla para los profesores
CREATE TABLE profesor (
  id_profesor INT PRIMARY KEY,
  especialidad VARCHAR(100),
  FOREIGN KEY (id_profesor) REFERENCES usuarios(id_usuario)
);

-- Tabla para los estudiantes
CREATE TABLE estudiante (
  id_estudiante INT PRIMARY KEY,
  id_programa INT,
  cuatrimestre INT,
  FOREIGN KEY (id_programa) REFERENCES programas(id_programa)
);

-- Tabla para los salones donde se dictan los grupos
CREATE TABLE salones (
  id_salon INT PRIMARY KEY,
  sede VARCHAR(100),
  nombre VARCHAR(100)
);

-- Tabla para los grupos de módulos
CREATE TABLE grupo (
  id_grupo VARCHAR(100) PRIMARY KEY,
  id_modulo VARCHAR(100),
  id_profesor INT,
  id_salon INT,
  periodo VARCHAR(100),
  dia_semana VARCHAR(50),
  hora_inicio TIME,
  hora_fin TIME,
  FOREIGN KEY (id_modulo) REFERENCES modulos(id_modulo),
  FOREIGN KEY (id_profesor) REFERENCES profesor(id_profesor),
  FOREIGN KEY (id_salon) REFERENCES salones(id_salon)
);

-- Tabla para las matrículas de estudiantes en grupos
CREATE TABLE matricula (
  id_grupo VARCHAR(100),
  id_estudiante INT,
  PRIMARY KEY (id_grupo, id_estudiante),
  FOREIGN KEY (id_grupo) REFERENCES grupo(id_grupo),
  FOREIGN KEY (id_estudiante) REFERENCES estudiante(id_estudiante)
);

-- Tabla para las asistencias de los estudiantes a los grupos
CREATE TABLE asistencias (
  id_asistencia INT PRIMARY KEY,
  id_estudiante INT,
  id_grupo VARCHAR(100),
  fecha DATE,
  hora_llegada TIME,
  estado VARCHAR(50),
  FOREIGN KEY (id_estudiante) REFERENCES estudiante(id_estudiante),
  FOREIGN KEY (id_grupo) REFERENCES grupo(id_grupo)
);

-- Tabla para los tipos de inasistencia
CREATE TABLE tipo_de_inasistencia (
  id_tipo INT PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion VARCHAR(255)
);

-- Tabla para las inasistencias de los estudiantes en los grupos
CREATE TABLE inasistencia (
  id_inasistencia INT PRIMARY KEY,
  id_grupo VARCHAR(100),
  id_estudiante INT,
  fecha DATE,
  id_tipo INT,
  FOREIGN KEY (id_grupo) REFERENCES grupo(id_grupo),
  FOREIGN KEY (id_estudiante) REFERENCES estudiante(id_estudiante),
  FOREIGN KEY (id_tipo) REFERENCES tipo_de_inasistencia(id_tipo)
);

-- Restricciones adicionales
-- No hay restricciones adicionales para agregar en este momento.
