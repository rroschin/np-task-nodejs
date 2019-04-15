const express = require('express');
const router = express.Router();
const service = require('../services/hotels');

router.get('/', async (req, res, next) => {
  const params = {
    cityCode: req.query.cityCode,
    checkInDate: req.query.checkInDate,
    checkOutDate: req.query.checkOutDate,
  };

  //TODO validation part is skipped here for simplicity
  const result = await service.searchHotels(params);
  res.send(result);
});

module.exports = router;
