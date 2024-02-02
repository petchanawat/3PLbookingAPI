# 3PLbookingAPI Project (Best Price for API Direct Booking with Third Party Logistics Project)
### Old Pain Points
  - Information must be copied and pasted between Airtable (the operational database) and third-party logistics order management systems like Deliveree and Lalamove. There may be human mistake.
  - Before reviewing the total charge and booking, the location must be entered into third-party logistics order management systems.
  - It takes a long time to compare order fees between two third-party logistics providers since the logistics admins must do it one at a time.

### New Solutions
  - Design a web application for sending API direct requests to get delivery fees from responses and create delivery orders after knowing the price. Using information from Airtable (the operating database) directly. (Name, Telephone, Address, Latitude, and Longitude)
  - It takes no more than 5 minutes to complete the price check and shipment booking.
  - Have a choice to choose the best price because of getting a delivery fee from two third-party logistics companies for doing it once.

I used Retool (backend workflow, graphic interface, and frontend software development).

### This image shows the web application before retrieving data from the operating database, checking prices, and booking delivery orders.

![3PLOrderBooking1](https://github.com/petchanawat/3PLbookingAPI/assets/158483894/bfee2e8b-de7a-4fd5-b6a7-e7c5e7a50925)


### This image shows the web application when retrieving data from the operating database and is ready for checking prices and booking delivery orders. [listData.js] is the script for GET data using a REST API from the operating database; 1 record has to be unpivot to 2 because it has a 2-point pick-up and drop-off, but if more than 1 point has the same latitude and longitude, then it will be combined into a single point.

![3PLOrderBooking2](https://github.com/petchanawat/3PLbookingAPI/assets/158483894/a8f8b2dd-42e1-4d6f-9394-86656fc5c8b4)


### This image shows the web application when it gets prices from third-party logistics and is ready to book delivery orders. [genJSONDeliveree.js] and [genJSONLalamove.js] are the scripts to convert data from the operating database to JSON format for being ready to check delivery fee and distance by GET data using a REST API. (Lalamove has to hash data by using a secret and key before getting a price and book an order.)

