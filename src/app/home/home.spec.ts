/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Home } from "./home";

describe("home", () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Home ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Home);
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
    expect(heading?.textContent.trim(), "should render NHCarrigan heading").
      toBe("NHCarrigan");
  });

  it("should render tagline", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const tagline = compiled.querySelector(".text-2xl.italic");
    expect(tagline?.textContent, "should render tagline").
      toContain("Solutions for the Digital Age");
  });

  it("should render company description", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent;
    expect(text, "should contain company description").
      toContain("We are NHCarrigan");
  });

  it("should render system status section", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const preElement = compiled.querySelector("pre");
    const codeElement = compiled.querySelector("code");
    expect(preElement, "should render pre element").toBeTruthy();
    expect(codeElement, "should render code element").toBeTruthy();
  });

  it("should render system status lines", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const statusLines = compiled.querySelectorAll(".typing-line");
    expect(statusLines.length, "should render status lines").toBeGreaterThan(0);
  });

  it("should render typing cursor", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cursor = compiled.querySelector(".typing-cursor");
    expect(cursor?.textContent, "should render typing cursor").toBe("|");
  });
});
