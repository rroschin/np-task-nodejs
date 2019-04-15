const express = require('express');
const router = express.Router();
const service = require('../services/hotels');

router.post('/', async (req, res, next) => {
  const params = {
    cityCode: req.body.cityCode,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
  };

  //TODO validation part is skipped here for simplicity
  const hotels = await service.searchHotels(params);
  const result = hotels.map((hotel) => {
    return `${hotel.roomRate} in ${hotel.hotelName} at ${hotel.hotelAddress} call: ${hotel.hotelPhoneNumber}`;
  });
  res.render('hotels', {hotels: result});
});

module.exports = router;
