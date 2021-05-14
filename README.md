# MEAN Stack App #1


[![N|Solid](https://res.cloudinary.com/practicaldev/image/fetch/s--oICVSnXV--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/aqm92f5mc5mrnw9qx3qt.jpg)](https://nodesource.com/products/nsolid)

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
