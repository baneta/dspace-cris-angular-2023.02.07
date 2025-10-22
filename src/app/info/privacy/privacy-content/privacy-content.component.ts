import { Component } from '@angular/core';

@Component({
  selector: 'ds-privacy-content',
  templateUrl: './privacy-content.component.html',
  styleUrls: ['./privacy-content.component.scss']
})
/**
 * Component displaying the contents of the Privacy Statement
 */
export class PrivacyContentComponent {
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }

}
