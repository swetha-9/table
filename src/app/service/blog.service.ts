import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { bloglist } from '../store/blogstate';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _baseUrl = 'http://localhost:3000/blogs';
  constructor(private httpClient: HttpClient) { 

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getBlogList() {
    return this.httpClient.get<Array<bloglist>>(this._baseUrl)
  }
  deleteItem(id) {
    console.log("API Called")
    console.log(this._baseUrl + '/' + id,this.httpOptions)
    return this.httpClient.delete<Array<bloglist>>(this._baseUrl + '/' + id,this.httpOptions)
  }
  updateItem(id, item){
    return this.httpClient
      .put<Array<bloglist>>(this._baseUrl+ '/' + id, JSON.stringify(item), this.httpOptions)
  }
}
