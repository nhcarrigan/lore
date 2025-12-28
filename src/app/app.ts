/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Disclaimer } from "./disclaimer/disclaimer";
import { Footer } from "./footer/footer";
import { Nav } from "./nav/nav";
import { Ticker } from "./ticker/ticker";

/**
 * The root component for the application.
 */
@Component({
  imports:     [ RouterOutlet, Footer, Nav, Disclaimer, Ticker ],
  selector:    "app-root",
  styleUrl:    "./app.css",
  templateUrl: "./app.html",
})
export class App {
  protected readonly title = signal("lore");
}
