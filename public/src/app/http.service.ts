import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getObjects(){
    return this._http.get('/api/objects')
  }
  getDetails(id){
    return this._http.get('/api/object/' +id)
  }
  destroyObject(id){
    return this._http.delete('/api/objects/' +id)
  }
  updateObject(data){
    return this._http.put('/api/objects/'+ data._id, data)
  }
  createObject(data){
    return this._http.post('/api/objects', data)
  }
  createReview(data,id){
    return this._http.post('/api/review/'+id,data)
  }
}
