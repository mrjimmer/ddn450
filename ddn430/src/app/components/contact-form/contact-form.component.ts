import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service'
import { UserInformation } from '../../models/user'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  closeResult = '';
  userName = '';
  userFormGroup: FormGroup;
  userInformation: UserInformation | undefined;

  constructor(private fb: FormBuilder, private modalService: NgbModal, private userService: UserService) {
    this.userFormGroup = this.fb.group({
      name: new FormControl(''),
      email: new FormControl('')
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 //function 2 - Add user
  addUser() {
    this.userInformation = <UserInformation>this.userFormGroup.value;
    if (this.userInformation.name == "" || this.userInformation.email == "") {
      alert("All form values must be filled out");
    }
    else {
      this.userName = this.userInformation.name;
      this.userService.postUserInfo(this.userInformation);
    }

  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `Function one, exiting modal with reaon: ${reason}`;
    }
  }
}
