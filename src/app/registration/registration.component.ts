import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [NgIf, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  userObj: any= {
    name: "",
    age: "",
    mobile: "",
    gender: "",
    userName: "",
    password: "",
    confirmPassword: ""
   }

   get passwordMismatch(): boolean {
    return (
      this.userObj.password &&
      this.userObj.confirmPassword &&
      this.userObj.password !== this.userObj.confirmPassword
    );
  }

  onSubmit() {
    if (this.passwordMismatch) {
      alert("Passwords do not match!");
      return;
    }

    alert("User registration successful");
  }

}
