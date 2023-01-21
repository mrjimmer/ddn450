import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignInInformation } from './models/login';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AppToastService } from './services/toast-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  signInFormGroup: FormGroup;
  signInInformation: SignInInformation | undefined;
  
  constructor(private fb: FormBuilder, http: HttpClient, public toastService : AppToastService) {
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
     // alert("All form values must be filled out");
      this.toastService.show('Error', 'Form Not Submitted', { classname: 'bg-danger text-light', delay: 15000 })
    }
    else {
      //alert("Form Submitted")
      this.toastService.show('Success', 'Form Submitted', { classname: 'bg-success text-light', delay: 10000 })

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


