import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ds-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss']
})

export class UserGuideComponent {
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }

}
