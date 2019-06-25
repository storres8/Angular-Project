import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  navDirection = "recipes";

  title = "Angular-Project";

  onNavClicked(headerData: string) {
    this.navDirection = headerData;
  }
}
