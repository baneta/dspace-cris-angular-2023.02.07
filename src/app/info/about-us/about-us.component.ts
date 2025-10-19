import { Component } from '@angular/core';

@Component({
  selector: 'ds-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent {
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }

}
