import { Component } from '@angular/core';

@Component({
  selector: 'ds-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})

export class TermsAndConditionsComponent {
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }

}
