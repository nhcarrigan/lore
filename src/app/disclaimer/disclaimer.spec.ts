/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Disclaimer } from "./disclaimer";

describe("disclaimer", () => {
  let component: Disclaimer;
  let fixture: ComponentFixture<Disclaimer>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Disclaimer ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Disclaimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect.assertions(1);
    expect(component, "did not compile").toBeTruthy();
  });

  it("should initialize with modal visible", () => {
    expect.assertions(1);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.showModal(),
      "modal should be visible initially").toBeTruthy();
  });

  it("should close modal when closeModal is called", () => {
    expect.assertions(2);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.showModal(), "modal should start visible").toBeTruthy();
    component.closeModal();
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.showModal(),
      "modal should be closed after closeModal").toBeFalsy();
  });

  it("should render modal when showModal is true", () => {
    expect.assertions(3);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector("#modal");
    const overlay = compiled.querySelector("#modal-overlay");
    expect(modal, "should render modal").toBeTruthy();
    expect(overlay, "should render overlay").toBeTruthy();
    const heading = modal?.querySelector("h1");
    expect(heading?.textContent.trim(),
      "should render disclaimer heading").toBe("Disclaimer");
  });

  it("should not render modal when showModal is false", () => {
    expect.assertions(2);
    component.closeModal();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector("#modal");
    const overlay = compiled.querySelector("#modal-overlay");
    expect(modal, "should not render modal").toBeNull();
    expect(overlay, "should not render overlay").toBeNull();
  });

  it("should render disclaimer content", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector("#modal");
    const text = modal?.textContent ?? "";
    expect(text, "should contain disclaimer text").
      toContain("AI-generated art");
    expect(text, "should contain continue button text").
      toContain("I understand");
  });

  it("should render list items in disclaimer", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll("li");
    expect(listItems.length, "should render list items").toBeGreaterThan(0);
  });

  it("should close modal when button is clicked", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector("button") as HTMLButtonElement;
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.showModal(), "modal should start visible").toBeTruthy();
    button.click();
    fixture.detectChanges();
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.showModal(),
      "modal should be closed after button click").toBeFalsy();
  });

  it("should render donation link", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const link
    = compiled.querySelector("a[href=\"https://donate.nhcarrigan.com\"]");
    expect(link, "should render donation link").toBeTruthy();
  });

  it("should have proper z-index classes", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector("#modal");
    const overlay = compiled.querySelector("#modal-overlay");
    const modalParent = modal?.parentElement;
    expect(modalParent?.classList.contains("z-50"),
      "modal should have z-50").toBeTruthy();
    expect(overlay?.classList.contains("z-40"),
      "overlay should have z-40").toBeTruthy();
  });
});
