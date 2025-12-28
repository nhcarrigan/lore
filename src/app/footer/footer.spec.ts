/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Footer } from "./footer";

describe("footer", () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ Footer ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect.assertions(1);
    expect(component, "did not compile").toBeTruthy();
  });

  it("should render footer element", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector("footer");
    expect(footer, "should render footer element").toBeTruthy();
  });

  it("should render copyright link", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const copyrightLink = compiled.querySelector(`a[href="https://nhcarrigan.com"]`);
    expect(copyrightLink, "should render copyright link").toBeTruthy();
    expect(copyrightLink?.textContent, "should contain copyright text").
      toContain("© 2025 NHCarrigan");
  });

  it("should render Discord link", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const discordLink = compiled.querySelector(`a[href="https://chat.nhcarrigan.com"]`);
    expect(discordLink, "should render Discord link").toBeTruthy();
  });

  it("should render Contact link", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const contactLink = compiled.querySelector(`a[href="https://contact.nhcarrigan.com"]`);
    expect(contactLink, "should render Contact link").toBeTruthy();
  });

  it("should have proper footer classes", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector("footer");
    expect(footer?.classList.contains("fixed"),
      "should have fixed positioning").toBeTruthy();
  });
});
