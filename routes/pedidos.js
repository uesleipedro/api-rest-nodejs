const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidos-controller'); 

router.get('/', pedidosController.getPedidos);

/////// COM ERRO - VIDEO 8
router.post('/', pedidosController.postPedidos);
router.get('/:id_pedido', pedidosController.getUmPedido);
router.delete('/', pedidosController.getDelete);

module.exports = router;