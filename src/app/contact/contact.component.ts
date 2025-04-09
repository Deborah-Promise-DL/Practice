import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userObj: any= {
    name: "",
    email: "",
    mobile: "",
   }

   onSubmit(){
    console.log(this.userObj, "new user details");
    alert("Contact details submitted successfully");
  }
}
