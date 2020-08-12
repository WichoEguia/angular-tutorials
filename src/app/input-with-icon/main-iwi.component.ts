import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-iwi',
  template: `
    <input-icon icon="envelope">
      <input type="email" placeholder="Email" />
    </input-icon>

    <input-icon icon="lock">
      <input type="password" placeholder="Password" />
    </input-icon>
  `,
})
export class MainIwiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
