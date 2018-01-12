import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'translate',
    pure: false // impure pipe, update value when we change language
})

export class TranslatePipe implements PipeTransform {

	constructor() { }

  translation: string;

	transform(value: string, args: any[]): any {
    switch(value) {//dokonczyc ze wszystkimi errorami
    case 'The email address is already in use by another account.':
        this.translation = 'Podany adres email jest już w użyciu';
        break;
    case 'n':

        break;
    default:
    this.translation = 'difolt';

    }

    return this.translation;

	}

}
