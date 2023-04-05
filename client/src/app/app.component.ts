import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  form: FormGroup;
  textbox = "";

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
			this.textbox = JSON.stringify(response);
			
		}
	 );
	 (document.getElementById("output") as HTMLInputElement).value = this.textbox;
  }  
}
