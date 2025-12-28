/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { Component, signal } from "@angular/core";

/**
 * Renders the disclaimer page.
 */
@Component({
  imports:     [],
  selector:    "app-disclaimer",
  styleUrl:    "./disclaimer.css",
  templateUrl: "./disclaimer.html",
})
export class Disclaimer {
  protected readonly showModal = signal<boolean>(true);

  /**
   * Closes the modal, should remain closed until the page is refreshed.
   */
  public closeModal(): void {
    this.showModal.set(false);
  }
}
