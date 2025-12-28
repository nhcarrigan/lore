/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Faq } from "./faq";

describe("faq", () => {
  let component: Faq;
  let fixture: ComponentFixture<Faq>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Faq ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Faq);
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
    expect(heading?.textContent.trim(), "should render FAQ heading").
      toBe("F.A.Q. (Frequently Asked Questions)");
  });

  it("should render questions", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const questions = compiled.querySelectorAll(".question");
    expect(questions.length, "should render multiple questions").
      toBeGreaterThan(0);
  });

  it("should render answers", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const answers = compiled.querySelectorAll(".answer");
    expect(answers.length, "should render multiple answers").toBeGreaterThan(0);
  });

  it("should have matching number of questions and answers", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const questions = compiled.querySelectorAll(".question");
    const answers = compiled.querySelectorAll(".answer");
    expect(questions, "should have matching Q&A pairs").
      toHaveLength(answers.length);
  });

  it("should render office hours question", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain office hours question").
      toContain("office hours 6:00 PM to 6:00 AM");
  });

  it("should render payment methods question", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain payment methods question").
      toContain("forms of payment");
  });
});
