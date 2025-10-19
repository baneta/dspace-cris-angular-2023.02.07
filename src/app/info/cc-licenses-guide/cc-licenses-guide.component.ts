import { Component } from '@angular/core';

@Component({
  selector: 'ds-cc-licenses-guide',
  templateUrl: './cc-licenses-guide.component.html',
  styleUrls: ['./cc-licenses-guide.component.scss']
})
export class CcLicensesGuideComponent {
  lang: string = 'en'; // default

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }
}
