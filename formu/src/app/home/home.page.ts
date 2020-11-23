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
    genders: Array<string>;

    constructor(
        public formBuilder: FormBuilder,
        private navCtrl: NavController
    ) { }

    ngOnInit() {

        this.genders = [
            "Male",
            "Female"
        ];
        this.validations_form = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(5),
                Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]+$'),
                Validators.required
            ])),
            name: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+[@]{1}[a-zA-Z0-9-]+[.]{1}[a-zA-Z]+$')
            ])),
            gender: new FormControl(this.genders[0], Validators.required),
            terms: new FormControl(false, Validators.pattern('true'))
        });
    }
    onSubmit(values) {
        console.log(values);
        let navigationExtras: NavigationExtras = {
            queryParams: {
                user: JSON.stringify(values),
                numero: 3
            }
        };
        this.navCtrl.navigateForward('/user', navigationExtras);
    }
}


this.validations_form = this.formBuilder.group({
    DNI: new FormControl('', Validators.compose([
      this.validDNI,
      Validators.maxLength(9),
      Validators.minLength(9),
      Validators.pattern('^(\d{8})([a-zA-Z])$'),
      Validators.required

    ])),
    IBAN: new FormControl('', Validators.compose([

      Validators.maxLength(24),
      Validators.minLength(24),
      Validators.pattern('^ES[0-9]{22}$'),
      Validators.required
    ])),
  });

  validDNI = function (fc: FormControl) {
    var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letter = dni_letters.charAt(parseInt(fc.value, 10) % 23);
    if (letter == fc.value.charAt(8)) {
      return ({ validDNI: true });
    } else {
      return (null);
    }
  };

  validation_messages = {
    'DNI': [
    { type: 'required', message: 'Se requiere el DNI' },
    { type: 'minlength', message: 'El DNI debe tener 9 dígitos como mínimo' },
    { type: 'maxlength', message: 'El DNI debe tener 9 dígitos como máximo' },
    { type: 'pattern', message: 'El DNI debe tener 8 números y una letra al final' },
    { type: 'validDNI', message: 'La letra no corresponde con los números introducidos' }
    ],
    'IBAN': [
      { type: 'required', message: 'Se requiere el IBAN' },
      { type: 'minlength', message: 'El IBAN debe tener 24 dígitos como mínimo' },
      { type: 'maxlength', message: 'El IBAN debe tener 24 dígitos como máximo' },
      { type: 'pattern', message: 'El IBAN debe empezar por ES seguido de 22 números' },
      { type: 'validIBAN', message: 'Este IBAN no se corresponde con el DNI introducido' }
    ],
  };