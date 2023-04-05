import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private http:HttpClient
  ) { }

  server_address = "https://lapro.pythonanywhere.com/";

  send_post_request(data){
  	return this.http.post(
		this.server_address,
		JSON.stringify(data)
	)
  }

  getResponse(): Observable<any>{
       	return this.http.get(this.server_address)	
  }
}
