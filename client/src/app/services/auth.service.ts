import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private http:HttpClient
  ) { }

  server_address = "http://192.168.168.61:5000";

  send_post_request(data){
  	return this.http.post(
		this.server_address,
		JSON.stringify(data)
	)
  }

  getResponse(): any{
 	const resp = this.http.get(this.server_address);
       	return JSON.stringify(resp);	
  }
}
