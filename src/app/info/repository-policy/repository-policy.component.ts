import { Component } from '@angular/core';

@Component({
  selector: 'ds-repository-policy',
  templateUrl: './repository-policy.component.html',
  styleUrls: ['./repository-policy.component.scss']
})
export class RepositoryPolicyComponent {
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = document.documentElement.lang;
  }

}
