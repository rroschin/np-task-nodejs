# NP-TASK-NODEJS

Simple Node.Js + Express + Pug project that attempts to solve the task described in TASK.md file

## How To Build
Project uses maven as a build tool with maven wrapper commads. To build fat-jar from the main directory run:

`npm install`

## How To Run
There are several ways to run the project

### NPM
`npm start`

### Node
`node bin/www`

### In Docker
From the main project directory execute:

`docker build -t np-task-nodejs .`

`docker run -p 3000:3000 --name=np-task-nodejs-app np-task-nodejs`

### How To Test
After application is tarted is is available at this URL:
http://localhost:3000/

#### HealthCheck URL: 
http://localhost:3000/healthcheck
#### Search Hotels URL:
http://localhost:3000/api/v1/hotels?cityCode=PAR&checkInDate=2019-04-14&checkOutDate=2019-04-15
##### Query Parameters
- cityCode - City Code in 3 characters, similar to Amadeus API. Example: _cityCode=PAR_
- checkInDate - Date of Check-In in YYYY-MM-DD format, similar to Amadeus API. Example: _checkInDate=2019-04-14_
- checkOutDate - Date of CheckOut in YYYY-MM-DD format, similar to Amadeus API. Example: _checkOutDate=2019-04-15_

##### Example Response:
`
[
    {
        "hotelName": "HOLIDAY INN PARIS-NOTRE DAME",
        "hotelAddress": "4 RUE DANTON, PARIS, 75006",
        "hotelPhoneNumber": "33-1-81690060",
        "roomRate": "79.99 USD"
    },
    {
        "hotelName": "MELIA COLBERT",
        "hotelAddress": "7, RUE DE L'HOTEL COLBERT, PARIS, 75005",
        "hotelPhoneNumber": "33-1-56811900",
        "roomRate": "172.00"
    },
    {
        "hotelName": "HOLIDAY INN PARIS-NOTRE DAME",
        "hotelAddress": "4 RUE DANTON, PARIS, 75006",
        "hotelPhoneNumber": "+33 1 81690060",
        "roomRate": "301.88"
    }
]
`

#### Postman collection is available in the main directory of the project
`NP-TASK-NODEJS.postman_collection.json`

#### Simple UI is available at:
http://localhost:3000/

Where list of form fields is the same as the list of query parameters
