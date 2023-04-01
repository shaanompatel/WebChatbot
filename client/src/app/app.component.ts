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

  constructor(
  	private fb:FormBuilder,
	private auth:AuthService
  ){}

  ngOnInit(): void {
	  this.form = this.fb.group({
	  	title:[''],
		body:['']
	  })
  
  }

  submit(){
  	console.log("submitted")
	console.log(this.form.value);
	this.auth.send_post_request(
		this.form.value
	).subscribe()
  }

  get() {
  	console.log("getting")
	const x = this.auth.getResponse()
	console.log(x)
  }
	  
}
