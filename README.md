# Service Complains #

[API Documentation](https://documenter.getpostman.com/view/5097449/RWToPHhM)

### Description ###

+ Applied patterns of **HTTP/RESTFul**
+ Service of Complains to retrieve information on complaints in data storage
+ Cache is applied in route GET /complains

### This API is defined in: ###

   + **Data storage:** [MongoDB](https://www.mongodb.com/)
   + **Programming Language:** [Nodejs](https://nodejs.org/en/) - [express](http://expressjs.com/pt-br/)
   + **Cache:** [Redis](https://redis.io/)

### Tests ###
+   Run command line:
   + run lint + test unit + test integration
        `npm run test`

   + run test unit
        `npm run test-unit`
   
   + run test integration
        `npm run test-integration`

   + run test contract for object assign type validation
        `npm run test-contract`
   
   + run lint code revision
        `npm run lint`
   

### Access on AWS EC2 ###

+ **URL** <http://18.223.203.222:5000/>

+ **/GET** <http://18.223.203.222:5000/complains>

+ **/GET** <http://18.223.203.222:5000/complains/:ID>

+ **/POST** <http://18.223.203.222:5000/complains> {title: string(10-50), description: string(50-500), locale.city: string(4-...), locale.state: string(4,...). locale.uf: string(2), company_id: ObjectID, date_created: now()}

+ **/PUT** <http://18.223.203.222:5000/complains/:COMPLAINS_ID> {Data: any}

+ **/DELETE** <http://18.223.203.222:5000/complains/:COMPLAINS_ID>
