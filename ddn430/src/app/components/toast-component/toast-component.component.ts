import { Component, OnInit } from '@angular/core';
import { ToasterService } from '@coreui/angular';
import { AppToastService } from '../../services/toast-service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast-component.component.html',
  styleUrls: ['./toast-component.component.css']
})
export class ToastComponentComponent implements OnInit {

  constructor(public toastService: AppToastService) { }

  ngOnInit(): void {
  }

}
