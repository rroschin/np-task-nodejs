const Amadeus = require('amadeus');

const AMADEUS_API_KEY = 'IGsWuHqGgYrGY7TlozTyOfYSBJes8tue';
const AMADEUS_API_SECRET = 'GnQoNix2KV5P6VdS';

const amadeus = new Amadeus({
  clientId: AMADEUS_API_KEY,
  clientSecret: AMADEUS_API_SECRET
});

const api = {};

api.searchHotels = async function (params) {

  try {
    const amHotels = await amadeus.shopping.hotelOffers.get({
      cityCode: params.cityCode,
      checkInDate: params.checkInDate,
      checkOutDate: params.checkOutDate,
      sort: 'PRICE'
    });

    //TODO: error response check is skipped for simplicity
    const hotels = amHotels.data.map((amHotel) => {
      const price = amHotel.offers[0].price;
      const address = amHotel.hotel.address;
      const hotel = {
        hotelName: amHotel.hotel.name,
        hotelAddress: `${address.lines.join(',')}, ${address.cityName}, ${address.postalCode}`,
        hotelPhoneNumber: amHotel.hotel.contact.phone,
        roomRate: `${price.total ? price.total : price.base} ${price.currency}`
      };
      return hotel;
    });

    return hotels.slice(0, 3);
  } catch (err) {
    return err.description[0];
  }
};

module.exports = api;
