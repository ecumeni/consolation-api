# consolation-api

Consolation APIs


## Getting Started

*** localhost ***   
    
To run npm:
* `cd app`
* `npm install`
* `npm start`

It will run at port `5000`

*** docker *** 

- To bring online run `docker-compose up`

```yaml

version: '3.7'

services:

  consolation-api:
    image: ecumeni/consolation-api
    build: .
    ports:
      - 5000:5000
    networks:
      - consolation-api-net


networks:
  consolation-api-net:

```