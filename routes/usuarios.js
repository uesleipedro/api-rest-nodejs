const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios-controller');

/// ERRO: NAO RETORNA MENSAGEM CASO EMAIL SEJA DUPLICADO
router.post('/cadastro', usuariosController.cadastrarUsuario);
router.post('/login', usuariosController.login);

module.exports = router;