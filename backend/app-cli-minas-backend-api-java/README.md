# Repository naming
To get information of how this user is naming the repositories go [here](https://github.com/DysonParra#repository-naming)

# Information of the project.
Example of connection to a database and the implementation of CRUD services using spring and hibernate.  

## Connection  
The database user and password are specified in the 'application.properties' files.  

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
  POST request that save in the database an entity of type AgentType with the fields specified in the body as JSON.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type  
  
- Update entity  
  PUT request that update in the database an entity of type AgentType with id specified in the url and the fields specified in the body as JSON.   
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/{{id}}  
  
- Get entity  
  GET request that return an entity of the database with the specified id.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/{{id}}  
  
- Delete entity  
  DELETE request that delete an entity of the database with the specified id.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/{{id}}    
  
- Search entities  
  GET request that return all entities that match the specified query.  
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/search/{{stringToSearch}}  
  
- Search entities paged  
  GET request that return all entities that match the specified query and the specified pageable.    
  The consumer url is http://127.0.0.1:8080/api/v1/agent-type/search/{{stringToSearch}}/pages?page={{pageNumber}}&size={{pageSize}}  

# Binary and library
The operation is equal for all java repositories of this user.  
Use the command: gradlew build  
It will generate four files where project-name is the name of the repository:
- project-name.jar  
  The fat jar file that include all dependencies into the same file and probably bigger.
- project-name-min.jar  
  The default jar file that only include the source code of the repository.
- project-name-lib.jar  
  The fat jar that include all dependencies, but exclude the file "Application.java" (the main class) and the source files in the package "com.project.dev.tester", so you can create files in that package for tests and will not be included in the library (basically a lib is a jar without main class)
- project-name-min-lib.jar  
The same that the fat lib, but not include dependencies and is possibly smaller size.  
Useful if you use third party libraries in the library that you are creating. For example the library that you are creating use selenium, if you use the fat lib it is probably very big size, so in this case you can use this lib, and in the project that uses this lib import all selenium dependencies.
An example is the project [selenium-image-translator](https://github.com/DysonParra/selenium-image-translator-java) that uses the lib [selenium-generic](https://github.com/DysonParra/selenium-generic-java)  

For use a lib simply copy the file in the folder libs in the root folder of a project.  
An example is the project [selenium-generic](https://github.com/DysonParra/selenium-generic-java) that uses the lib [flag-processor](https://github.com/DysonParra/flag-processor-java)  
