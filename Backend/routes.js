'use strict'

const express = require('express')
//Se instancia el objeto Controller
const UsuarioController = require('./Controller/UsuarioController')
const ConcursoController = require('./Controller/ConcursoController')
const VideoController = require('./Controller/VideoController')
//Instancia el objeto router para configurarlo
const api = express.Router()


/*************************************** USUARIO ******************************/
//Obtener Usuarios
api.get('/usuario', UsuarioController.ObtenerUsuarios)
//Obtener usuario por id
api.get('/usuario/:id', UsuarioController.ObtenerUsuarioPorId)
//Crear usuario
api.post('/usuario', UsuarioController.CrearUsuario)
//Actualizar Usuario
api.put('/usuario/:id', UsuarioController.ActualizarUsuario)
//Eliminar usuario
api.delete('/usuario/:id', UsuarioController.EliminarUsuario)

/*************************************** CONCURSO ******************************/
//Obtener concursos
api.get('/concurso', ConcursoController.ObtenerConcursos)
//Obtener concurso por id
api.get('/concurso/:id', ConcursoController.ObtenerConcursoPorId)
//Crear concurso
api.post('/concurso', ConcursoController.CrearConcurso)
//Actualizar concurso
api.put('/concurso/:id', ConcursoController.ActualizarConcurso)
//Eliminar concurso
api.delete('/concurso/:id', ConcursoController.EliminarConcurso)

/*************************************** VIDEO ******************************/
//Obtener videos
api.get('/video', VideoController.ObtenerVideos)
//Obtener video por id
api.get('/video/:id', VideoController.ObtenerVideoPorId)
//Crear video
api.post('/video', VideoController.CrearVideo)
//Actualizar video
api.put('/video/:id', VideoController.ActualizarVideo)
//Eliminar video
api.delete('/video/:id', VideoController.EliminarVideo)



module.exports = api