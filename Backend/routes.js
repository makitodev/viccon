'use strict'

const express = require('express')
//Se instancia el objeto Controller
const UsuarioController = require('./Controller/UsuarioController_mongodb')
const ConcursoController = require('./Controller/ConcursoController_mongodb')
const VideoController = require('./Controller/VideoController_mongodb')
const ConfigController = require('./Controller/ConfigController_mongodb')
//Instancia el objeto router para configurarlo
const api = express.Router()


/*************************************** USUARIO ******************************/

//Obtener usuario por correo para hacer login
api.post('/usuario/:email', UsuarioController.IniciarSesion)
//Obtener Usuarios
api.get('/usuario', UsuarioController.ObtenerUsuarios)
//Obtener usuario por id
api.get('/usuario/:id', UsuarioController.ObtenerUsuarioPorId)
//Crear usuario
api.post('/usuario', UsuarioController.CrearUsuario)
//Actualizar Usuario
//api.put('/usuario/:id', UsuarioController.ActualizarUsuario)
//Eliminar usuario
//api.delete('/usuario/:id', UsuarioController.EliminarUsuario)

/*************************************** CONCURSO ******************************/

//Obtener concursos
api.get('/concurso', ConcursoController.ObtenerConcursos)
//Obtener concurso por id
api.get('/concurso/:id', ConcursoController.ObtenerConcursoPorId)
//Obyener concursos por idUsuario
api.get('/concurso/usuario/:id', ConcursoController.ObtenerConcursosPorIdUsuario)
//Crear concurso
api.post('/concurso', ConcursoController.CrearConcurso)
//Actualizar concurso
api.put('/concurso/:id', ConcursoController.ActualizarConcurso)
//Eliminar concurso
api.delete('/concurso/:id', ConcursoController.EliminarConcurso)

/*************************************** VIDEO ******************************/
//Obtener videos
api.get('/video', VideoController.ConsultarVideos)
//Obtener video por id
api.get('/video/:id', VideoController.ConsultarVideoPorId)
//Obtener video por estado
api.get('/video/estado/:estado', VideoController.ConsultarVideoPorEstado)
//Consultar videos por id de concurso
api.get('/video/concurso/:id', VideoController.ConsultarVideoPorConcurso)
//Obtener video por estado por id concurso
api.get('/video/:idconcurso/:estado', VideoController.ConsultarVideoPorConcursoyEstado)
//Crear video
api.post('/video', VideoController.CrearVideo)
//Actualizar video
api.put('/video/:id', VideoController.ActualizarVideo)
//Eliminar video
//api.delete('/video/:id', VideoController.EliminarVideo)

/*************************************** CONFIGURACION ******************************/

//Consultar Configuraciones
api.get('/config/', ConfigController.ConsultarConfiguraciones)
//Consultar Configuración por Id
api.get('/config/:id', ConfigController.ConsultarConfiguracionPorId)
//Consultar Configuraciones Por Despliegue
api.get('/config/despliegue/:despliegue', ConfigController.ConsultarConfiguracionesPorDespliegue)
//Consultar Configuraciones Por Despliegue y Tipo
api.get('/config/despliegue/:despliegue/tipo/:tipo', ConfigController.ConsultarConfiguracionesPorDespliegueyTipo)
//Crear configuracion
api.post('/config', ConfigController.CrearConfiguracion)
//Actualizar configuración
api.put('/config/:id', ConfigController.ActualizarConfiguracion)
//Eliminar usuario
api.delete('/config/:id', ConfigController.EliminarConfiguracion)



module.exports = api