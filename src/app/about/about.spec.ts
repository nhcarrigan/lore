/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { About } from "./about";

describe("about", () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ About ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(About);
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
    expect(heading?.textContent.trim(), "should render About heading").
      toBe("About NHCarrigan");
  });

  it("should render mission section", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain mission section").toContain("THE MISSION");
  });

  it("should render services section", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector("h2");
    expect(heading?.textContent.trim(), "should render services heading").
      toBe("OUR SERVICES");
  });

  it("should render service descriptions", () => {
    expect.assertions(4);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain Deep-Level System Architecture").
      toContain("Deep-Level System Architecture");
    expect(text, "should contain Aggressive Crisis Mitigation").
      toContain("Aggressive Crisis Mitigation");
    expect(text, "should contain Legacy Preservation").
      toContain("Legacy Preservation");
    expect(text, "should contain Reputation Management").
      toContain("Reputation Management");
  });

  it("should render why choose us section", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain why choose us section").
      toContain("WHY CHOOSE US");
  });
});
