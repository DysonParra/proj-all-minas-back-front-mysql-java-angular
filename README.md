# Information of the project.
Example of connection to a database and the implementation of CRUD services using spring and hibernate.  

## Database  
The sql create script used is 'create_hungarian'.  

## Services  
Each table has eight (8) services for get or modify the information in the database.  
For example if the table used is a table named 'Agent' the services are:
- Get all entities  
  GET request that return all entities in the database of the table Agent.  
  The consumer url is http://127.0.0.1:8080/api/v1/Agent  
  
- Get all entities paged  
  GET request that return all entities in the database of the table Agent and match the specified pageable.  
  The consumer url is http://127.0.0.1:8080/api/v1/Agent/pages?page={{pageNumber}}&size={{pageSize}}  
  
- Save entity  
  POST request that save in the database a entity of type Agent with the fields specified in the body as JSON.  
  The consumer url is http://127.0.0.1:8080/api/v1/Agent  
  
- Udapte entity  
  PUT request that update in the database a entity of type Agent with id specified in the url and the fields specified in the body as JSON.   
  The consumer url is http://127.0.0.1:8080/api/v1/Agent/{{id}}  
  
- Get entity  
  GET request that return an entity of the database with the specified id.  
  The consumer url is http://127.0.0.1:8080/api/v1/Agent/{{id}}  
  
- Delete entity  
  DELETE request that delete an entity of the database with the specified id.  
  The consumer url is http://127.0.0.1:8080/api/v1/Agent/{{id}}    
  
- Search entities  
  GET request that return all entities taht match the specified query.  
  The consumer url is http://127.0.0.1:8080/api/v1/Agent/search/{{stringToSearch}}  
  
- Search entities paged  
  GET request that return all entities taht match the specified query and the specified pageable.    
  The consumer url is http://127.0.0.1:8080/api/v1/Agent/search/{{stringToSearch}}/pages?page={{pageNumber}}&size={{pageSize}}  

## Postman  
The postman file included run various tests on each service for each table and if pass all tests the service is OK.  
