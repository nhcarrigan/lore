/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { Component } from "@angular/core";
import { news } from "../config/news";

/**
 * Renders the ticker.
 */
@Component({
  imports:     [],
  selector:    "app-ticker",
  styleUrl:    "./ticker.css",
  templateUrl: "./ticker.html",
})
export class Ticker {
  /* eslint-disable stylistic/max-len -- Ticker phrases need to be complete thoughts. */
  protected readonly phrases: ReadonlyArray<string>;

  /**
   * Initializes the ticker component and shuffles the phrases.
   */
  public constructor() {
    this.phrases = Ticker.shuffleArray([ ...news ]);
  }

  /**
   * Shuffles an array using the Fisher-Yates algorithm.
   * @param array - The array to shuffle.
   * @returns A new shuffled array.
   */
  private static shuffleArray<T>(array: Array<T>): ReadonlyArray<T> {
    const shuffled = [ ...array ];
    for (let index = shuffled.length - 1; index > 0; index = index - 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [ shuffled[index], shuffled[randomIndex] ] = [ shuffled[randomIndex], shuffled[index] ];
    }
    return shuffled;
  }
}
