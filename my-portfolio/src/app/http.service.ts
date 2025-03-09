import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  http = inject(HttpClient);

  constructor() { }

  getAboutInfo(){
    return this.http.get("http://localhost:3000/about")
  }
}
