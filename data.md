**Descripcion del Proyecto**

Este proyecto creará una aplicación de registro de estudiantes utilizando Express.js como servidor web, bcrypt, passport y jwt como sistema de autenticación, y MongoDB o Postgres como base de datos. La interfaz de la aplicación se creará utilizando React o Vue. La aplicación tendrá dos roles de usuario: estudiante y administrador. Los estudiantes podrán registrarse y administrar sus propios datos, incluidos el nombre de usuario, el correo electrónico, el nombre, el apellido, el teléfono y la dirección.

Los estudiantes también deberían poder registrarse/cancelar el registro en los cursos. Los administradores podrán ver los estudiantes registrados y administrar sus detalles y cursos. Los administradores deben poder: Editar todos los detalles de los usuarios (nombre de usuario, correo electrónico, nombre, apellido, teléfono, dirección, esAdmin, etc.), crear/eliminar usuarios. Edite todos los detalles de los cursos (título, descripción, horario, capacidad, costo de matrícula, etc.), cree/elimine cursos. Registrar o cancelar el registro de cualquier estudiante para cualquier curso.

La aplicación también tendrá una función de filtro para permitir a los administradores buscar estudiantes y cursos registrados. La aplicación también debe hacer un buen uso de las variables de entorno para cualquier puerto, URL o secreto.

El desglose de tareas para este proyecto incluye la configuración de un servidor web y la configuración de Express.js, configurando una aplicación frontend React/Vue. Configuración de un sistema de autenticación mediante bcryt, pasaporte y jwt. Configuración de la base de datos, incluida la creación de modelos/tablas de usuarios y cursos. Crear inicio de sesión, registro de usuario, perfil de estudiante, cursos y páginas de administrador. Crear una función de filtro para los cursos y las páginas de administración. Configuración de registro (Winston/Morgan). Creación de rutas del lado del cliente, creación de protección de ruta del lado del cliente para usuarios registrados y usuarios administradores. Creación de guardias de ruta del lado del servidor para usuarios registrados y usuarios administradores. Incluir diseño responsivo. Implementando un icono de carga. Sanitizando los insumos y garantizando la seguridad. Creación de la función de cierre de sesión. Crear un buen directorio y estructura de código. Implementación de la aplicación. Refactorización sobre la marcha.


# Equipos Asignados
Los estudiantes trabajarán en un equipo de 2. Si no tiene un miembro del equipo, lo ayudaremos a encontrar un grupo para unirse.

# Plazo del proyecto
Presentación fijada para agosto de 2023

# Desglose de tareas
Cree un servidor web y configure Express.js
Crear una aplicación React/Vue
Establecer comunicación entre las aplicaciones frontend y backend.
Configure un sistema de autenticación usando bcrypt, pasaporte y jwt
Configurar base de datos (MongoDB o Postgres)
Crear modelo de usuario: nombre de usuario (único, requerido), correo electrónico (único, requerido), hash, isAdmin, - nombre, apellido, teléfono, dirección, fecha de creación
Crear modelo de curso: id, título, descripción, horario, número_de_aula, capacidad_máxima, horas_de_crédito, costo_de_matrícula
Crear página de inicio de sesión
Crear página de registro de usuario
Crear página de cursos
Crear página de perfil de usuario
Crear página de administración
Crear función de búsqueda para cursos y usuarios
Crear variables de entorno
Configurar registro (Winston/Morgan)
Crear rutas del lado del cliente
Crear guardia de ruta del lado del cliente
Crear rutas del lado del servidor
Crear guardia de ruta del lado del servidor
Implementar un icono de carga
Sanitizar los insumos y garantizar la seguridad
Funcionalidad de cierre de sesión
Buen directorio y estructura de código.
Refactoriza sobre la marcha
Diseño de respuesta
Implementar aplicación para renderizar
Preparar y presentar la presentación
Una vez finalizado y probado el producto, el equipo debe preparar una presentación para demostrar las características, funciones y componentes del producto. La presentación debe incluir una explicación clara del propósito del producto y cómo funciona. También debe incluir capturas de pantalla de la interfaz de usuario y ejemplos de cómo se puede utilizar el producto. Thomas y Curtis determinarán una fecha para esta presentación final.

# Envío
Crea un repositorio privado para tu equipo.
Publique su enlace de Git Hub aquí: asegúrese de incluir todos los nombres de los miembros de su equipo para que puedan recibir crédito.
Comparta su repositorio privado con Curtis Dalton, Thomas Chan y MountainlandATC.

# ¿Cómo debo calificar la participación de mis compañeros?
Una buena regla de oro:

Le daría 8 puntos a un compañero de equipo si cree que hizo lo mejor que pudo, se comunicó a tiempo cuando iba a estar ausente y colaboró en el proyecto mediante la codificación.
Le daría solo 4 puntos a un compañero de equipo si cree que lo hizo bien, no se comunicó con el equipo de manera oportuna sobre tardanzas y ausencias, y contribuyó al código del proyecto de manera limitada (solo CSS o muy pocas líneas de código ).
Le daría 0 puntos a un compañero de equipo si apenas contribuyó al proyecto o nada en absoluto, y mostró un total desprecio por comunicar al equipo sobre tardanzas y ausencias. También puede dar puntos intermedios como mejor le parezca.

**Rúbrica**

# Página de Registro de Usuario: 10%
Se incluyen los campos correspondientes.
Los datos se almacenan y validan correctamente
Incluye un enlace a la página de inicio de sesión

# Página de inicio de sesión: 10%
El usuario puede iniciar sesión y cerrar sesión con éxito
Maneja con gracia las credenciales incorrectas
Incluye un enlace a la página de registro de usuario

# Página de perfil de usuario: 10%
La página de perfil es fácil de usar
Los datos se almacenan y recuperan correctamente
El usuario puede actualizar la información con éxito
Muestra correctamente el horario de los usuarios
Muestra correctamente las tasas de matrícula totales de los usuarios.
Muestra correctamente las horas de crédito totales de los usuarios

# Páginas del curso: 10%
Muestra correctamente la información de todos los cursos.
Incluye una función de búsqueda/filtro
Los estudiantes pueden registrar cursos correctamente
Los estudiantes no pueden inscribirse en cursos que están completos o en los que ya están inscritos.

# Páginas de administrador: 10%
Se incluyen los campos correspondientes.
Incluye una función de búsqueda/filtro
Los datos se almacenan y recuperan correctamente
Los administradores pueden crear, editar y eliminar usuarios con éxito
Los administradores pueden crear, editar y eliminar cursos con éxito
Los administradores pueden registrar o cancelar el registro de cualquier usuario para cualquier curso

# Registro: 5%
El servidor registra eventos correctamente
Los registros son útiles para encontrar errores en la aplicación.

# Sistema de autenticación: 10%
El sistema de autenticación es seguro.
Las contraseñas de los usuarios están encriptadas
las rutas del lado del cliente están protegidas contra usuarios que no han iniciado sesión
las rutas de administración del lado del cliente están protegidas contra usuarios que no son administradores
las rutas del lado del servidor están protegidas contra usuarios que no han iniciado sesión
Las rutas de administración del lado del servidor están protegidas contra usuarios que no son administradores

# Base de datos: 10%
Colecciones/Tablas tienen datos correctos
Las colecciones/tablas tienen restricciones correctas
Los datos se actualizan correctamente
Las entradas están correctamente sanitizadas

# Despliegue: 5%
La aplicación se implementa correctamente
La aplicación es funcional
La aplicación es segura

# Diseño de UX/UI: 10%
La aplicación es visualmente atractiva
La navegación es intuitiva
El diseño general es fácil de usar
Incluye diseño responsive
Incluye icono de carga

# Estructura del código: 10%
El código es fácil de navegar
El código es fácil de leer.
El código es fácil de entender.
El código está correctamente particionado