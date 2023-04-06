import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  form: FormGroup;
  textbox = "default";
  mode: ProgressBarMode = 'determinate';
  value = 100;

  constructor(
  	private fb:FormBuilder,
	private auth:AuthService
  ){}

  ngOnInit(): void {
	  this.form = this.fb.group({
		body:['']
	  })
  
  }

  submit(){
	this.mode = 'indeterminate';
	console.log(this.form.value);
	this.auth.send_post_request(
		this.form.value
	).subscribe();
	(document.getElementById("input") as HTMLInputElement).value = "";
	console.log("submitted")
	setTimeout(() => {  this.get(); }, 5000);

  }

  get() {
	this.auth.getResponse()
	 .subscribe(
		(response) => {
			console.log('fetching');
			console.log(response);
			this.textbox = response.resp;
			(document.getElementById("output") as HTMLInputElement).value = this.textbox;
		}
	 );
	 this.mode = 'determinate';
  }  
}
