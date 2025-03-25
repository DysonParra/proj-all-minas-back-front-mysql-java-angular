# Repository naming
To get information of how this user is naming the repositories go [here](https://github.com/DysonParra#repository-naming)

# Information of the project.
Example of connection to a database and the implementation of CRUD services using spring and hibernate.  

## Database  
The sql create script used is 'create_hungarian'.  

## Services  
Each table has eight (8) services for get or modify the information in the database.  
For example if the table used is a table named 'AgentType' the services are:
- Get all entities  
  GET request that return all entities in the database of the table AgentType.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type  
  
- Get all entities paged  
  GET request that return all entities in the database of the table AgentType and match the specified pageable.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/pages?page={{pageNumber}}&size={{pageSize}}  
  
- Save entity  
  POST request that save in the database a entity of type AgentType with the fields specified in the body as JSON.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type  
  
- Udapte entity  
  PUT request that update in the database a entity of type AgentType with id specified in the url and the fields specified in the body as JSON.   
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/{{id}}  
  
- Get entity  
  GET request that return an entity of the database with the specified id.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/{{id}}  
  
- Delete entity  
  DELETE request that delete an entity of the database with the specified id.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/{{id}}    
  
- Search entities  
  GET request that return all entities taht match the specified query.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/search/{{stringToSearch}}  
  
- Search entities paged  
  GET request that return all entities taht match the specified query and the specified pageable.    
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/search/{{stringToSearch}}/pages?page={{pageNumber}}&size={{pageSize}}  

## Postman  
The postman file included run various tests on each service for each table and if pass all tests the service is OK.  
