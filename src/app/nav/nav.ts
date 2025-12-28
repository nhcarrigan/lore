/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

/**
 * Renders the navigation bar.
 */
@Component({
  imports:     [ RouterLink ],
  selector:    "app-nav",
  styleUrl:    "./nav.css",
  templateUrl: "./nav.html",
})
export class Nav {
  public isMenuOpen = false;

  /**
   * Toggles the mobile menu open/closed state.
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Closes the mobile menu.
   */
  public closeMenu(): void {
    this.isMenuOpen = false;
  }
}
