# MEAN Stack App #1


![N|Solid](https://elevatecnologia.com/wp-content/uploads/2021/01/6-razones-para-conseguir-un-desarrollador-Mean-Stack-para-su.jpg)


In this project I use specifically 4 tecnologies:
 - MongoDB
 - Express
 - Angular 11
 - NodeJs

## Benefits

- I had the opportunity to use Http methods such as POST, GET, PUT, DELETE and PATCH
- Also first time dealing with MongoDB.
- Entering more and more into Angular 11
- Usage if tools such as **Postman** or **Insomnia** to test web APIs.
- Connecting to MongoDB's database & creating collections/documents.
- Create & Define models & routes for consuming a web API, defining the collections' structures & managing the CRUD operations with the database.

Current project status is: **in Progress...**.

# ~ Code Example

Here in this sample of code we use a Http GET method to receive all projects saved in the database:
```sh
getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+'projects', {headers: headers});
  }
```
