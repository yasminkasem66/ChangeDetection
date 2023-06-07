import { Component } from '@angular/core';
import { User } from 'src/@AppService/models/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  userModal :User = {
    person: {
      firstName: '',
      lastName: '',
  },
  //  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  } as User;

  constructor() { }

  onSubmit(registerForm:any) {
    console.log("registerForm",registerForm.form.value);
    
    alert('Form Submitted successfully!!!\n Check the values in browser console.');
    console.log(this.userModal);
    console.table(this.userModal);
  }
}
