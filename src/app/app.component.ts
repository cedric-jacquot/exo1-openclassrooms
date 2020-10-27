import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  posts = [
    {
      contenu: 'affichage post 1'
    },
    {
      contenu: 'affichage post 2'
    },
    {
      contenu: 'affichage post 3'
    }
  ];

}
