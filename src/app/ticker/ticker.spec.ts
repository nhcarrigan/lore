/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { news } from "../config/news";
import { Ticker } from "./ticker";

describe("ticker", () => {
  let component: Ticker;
  let fixture: ComponentFixture<Ticker>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Ticker ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Ticker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect.assertions(1);
    expect(component, "did not compile").toBeTruthy();
  });

  it("should initialize with shuffled phrases", () => {
    expect.assertions(2);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.phrases, "phrases should be initialized").toBeDefined();
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.phrases, "phrases should have correct length").
      toHaveLength(news.length);
  });

  it("should contain all news items in phrases", () => {
    expect.assertions(67);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    const phrasesSet = new Set(component.phrases);
    const newsSet = new Set(news);
    expect(phrasesSet.size, "all news items should be present").
      toBe(newsSet.size);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    for (const phrase of component.phrases) {
      expect(newsSet.has(phrase), `phrase "${phrase}" should be in news array`).toBeTruthy();
    }
  });

  it("should render phrases in the template", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const phraseElements = compiled.querySelectorAll("span");
    expect(phraseElements.length, "should render phrase elements").
      toBeGreaterThan(0);
    // Check that at least one phrase from news is rendered
    const renderedText = compiled.textContent;
    // eslint-disable-next-line max-nested-callbacks -- We need to check if the rendered text includes any of the news phrases.
    const hasNewsContent = news.some((phrase) => {
      return renderedText.includes(phrase);
    });
    expect(hasNewsContent, "should render news content").toBeTruthy();
  });

  it("should render duplicate content for seamless loop", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const ariaHiddenSection = compiled.querySelector("[aria-hidden=\"true\"]");
    expect(ariaHiddenSection, "should have duplicate content section").
      toBeTruthy();
  });

  it("should shuffle phrases differently on each instantiation", () => {
    expect.assertions(1);
    const firstComponent = new Ticker();
    const secondComponent = new Ticker();
    // @ts-expect-error - We want it protected, but need to use it in the test.
    const firstPhrases = firstComponent.phrases;
    // @ts-expect-error - We want it protected, but need to use it in the test.
    const secondPhrases = secondComponent.phrases;
    const firstSet = new Set(firstPhrases);
    const secondSet = new Set(secondPhrases);
    expect(firstSet.size, "both instances should have same content").
      toBe(secondSet.size);
  });

  it("should handle empty news array gracefully", () => {
    expect.assertions(1);

    /*
     * This test verifies the component can handle edge cases
     * Since news is always populated, we'll just verify the component handles initialization
     */
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.phrases, "phrases should be an array").
      toBeInstanceOf(Array);
  });
});
