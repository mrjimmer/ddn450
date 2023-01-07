import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignInInformation } from './models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  signInFormGroup: FormGroup;
  signInInformation: SignInInformation | undefined;
  
  constructor(private fb: FormBuilder, http: HttpClient) {
    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));

    this.signInFormGroup = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  displayedColumns: string[] = ['date', 'temperaturec', 'temperaturef', 'summary'];
  title = 'ddn430';
  dateNow: Date = new Date();

  SignIn() {
    this.signInInformation = <SignInInformation>this.signInFormGroup.value;

    if (this.signInInformation.email == "" || this.signInInformation.password == "") {
      alert("All form values must be filled out");
    }
    else {
     alert("Form Submitted")
    }
    console.log("Function Three Acitvated")

  }
  
  
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


