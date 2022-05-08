import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>Eren Guler Product Management Systems</h1>
    <pm-products></pm-products></div>`
})

export class AppComponent {
  pageTitle: string = "Acme Product Management";
}