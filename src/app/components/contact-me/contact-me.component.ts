import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      comment: ['',[Validators.required]]
    });
  }

  save(event: Event) {
    event.preventDefault();
    if(this.contactForm.valid){
      const values = this.contactForm.value;
      console.log({values});
    } else {
      //Aqui marco todos los campos como tocados para que se activen las validaciones cuando no es valido
      this.contactForm.markAllAsTouched();
    }
  }

  //Getters de los campos del formulario - Buena practica de programación

  get nameField() {
    return this.contactForm.get('name');
  }

  get emailField() {
    return this.contactForm.get('email');
  }

  get commentField() {
    return this.contactForm.get('comment');
  }



}
