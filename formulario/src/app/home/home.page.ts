import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  validations_form: FormGroup;
  cuenta: FormGroup;
  validation_messages = {
    'DNI': [
      { type: 'validDNI', message: 'La letra no corresponde con los números' },
      { type: 'required', message: 'DNI es requerido' },
      { type: 'minlength', message: 'DNI debe tener 9 caracteres' },
      { type: 'maxlength', message: 'DNI debe tener 9 caracteres' },
      { type: 'pattern', message: 'DNI debe tener el patrón correspondiente' },
    ],
    'birthday': [
      { type: 'required', message: 'Fecha requerida' },
      
    ],
    'cuenta': [
      { type: 'validBirthday', message: 'Al ser mayor de edad se requiere DNI' }
    ],
  };



  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {


    this.cuenta = new FormGroup({
      birthday: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      DNI: new FormControl('', Validators.compose([
        this.validDNI,
        Validators.maxLength(9),
        Validators.minLength(9),
        Validators.pattern('[0-9]{8,8}[A-Za-z]'),
        Validators.required
      ]))
    }, (formGroup: FormGroup) => {
      return this.validBirthday(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      cuenta: this.cuenta,
    });
  }

  onSubmit(values) {
    console.log(values);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(values),
      }
    };
    this.navCtrl.navigateForward('/datosUsu', navigationExtras);
  }



  validDNI(fc: FormControl) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var numeros = fc.value.substring(0, fc.value.length - 1);
    var numero = numeros % 23;
    var letraCorr = letras.charAt(numero);
    var letra = fc.value.substring(8, 9);
    if (letraCorr != letra) {
      return ({ validDNI: true });
    } else {
      return (null);
    }
  }

  validBirthday(fg: FormGroup) {
    var birth = fg.controls['birthday'].value
    var dni = fg.controls['DNI'].value
    const convertAge = new Date(birth);

    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    var showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    if (showAge < 18) {
      return null;
    } else {
      if(dni===''){
        return {validBirthday: true}
      } else {
        return null
      }
    }
    
  }

}//end_class


