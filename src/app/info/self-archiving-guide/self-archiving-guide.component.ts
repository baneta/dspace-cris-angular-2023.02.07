import { Component } from '@angular/core';

@Component({
  selector: 'ds-self-archiving-guide',
  templateUrl: './self-archiving-guide.component.html',
  styleUrls: ['./self-archiving-guide.component.scss']
})

export class SelfArchivingGuideComponent {
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }

}
