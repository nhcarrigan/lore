/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Reviews } from "./reviews";

describe("reviews", () => {
  let component: Reviews;
  let fixture: ComponentFixture<Reviews>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Reviews ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Reviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect.assertions(1);
    expect(component, "did not compile").toBeTruthy();
  });

  it("should render main heading", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector("h1");
    expect(heading?.textContent.trim(),
      "should render reviews heading").toBe("CLIENT TESTIMONIALS");
  });

  it("should render introductory text", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain introductory text").
      toContain("Here's what people are whispering");
  });

  it("should render review sections", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const reviews = compiled.querySelectorAll(".review");
    expect(reviews.length, "should render multiple reviews").toBeGreaterThan(0);
  });

  it("should render review text", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const reviewTexts = compiled.querySelectorAll(".review-text");
    expect(reviewTexts.length, "should render review texts").toBeGreaterThan(0);
  });

  it("should render review authors", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const authors = compiled.querySelectorAll(".review-author");
    expect(authors.length, "should render review authors").toBeGreaterThan(0);
  });

  it("should have matching review texts and authors", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const reviewTexts = compiled.querySelectorAll(".review-text");
    const authors = compiled.querySelectorAll(".review-author");
    expect(reviewTexts,
      "should have matching texts and authors").toHaveLength(authors.length);
  });

  it("should render Marcus V. review", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain Marcus V. review").toContain("Marcus V.");
  });
});
