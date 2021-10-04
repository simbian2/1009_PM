   
const express = require('express');
const router = express.Router();
const controller = require('./coin.controller');
const coinNews = require('./coinNews');


router.post('/buy_order',controller.buy_order);
router.post('/sell_order',controller.sell_order);
router.get('/start_price',controller.start_price);
router.post('/transaction',controller.transaction);
router.get('/coinNews',coinNews.main);

module.exports = router;