/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Handbook } from "./handbook";

describe("handbook", () => {
  let component: Handbook;
  let fixture: ComponentFixture<Handbook>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Handbook ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Handbook);
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
    expect(heading?.textContent.trim(), "should render handbook heading").
      toContain("INTERNAL EMPLOYEE HANDBOOK");
  });

  it("should render notice section", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain notice section").toContain("NOTICE");
  });

  it("should render section headings", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sectionHeadings = compiled.querySelectorAll("h2");
    expect(sectionHeadings.length, "should render multiple section headings").
      toBeGreaterThan(0);
  });

  it("should render subsection headings", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const subsectionHeadings = compiled.querySelectorAll("h3");
    expect(subsectionHeadings.length,
      "should render multiple subsection headings").toBeGreaterThan(0);
  });

  it("should render office hygiene section", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain office hygiene section").
      toContain("OFFICE HYGIENE & SAFETY");
  });

  it("should render breakroom rules", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain breakroom rules").
      toContain("Breakroom Refrigerator");
  });

  it("should render security section", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain security section").
      toContain("SECURITY & WEAPONS");
  });

  it("should render images", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const images = compiled.querySelectorAll("img");
    expect(images.length, "should render images").toBeGreaterThan(0);
  });
});
