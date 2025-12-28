/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { Nav } from "./nav";

describe("nav", () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      // eslint-disable-next-line deprecation/deprecation -- We need to use the deprecated method.
      imports: [ Nav, RouterTestingModule ],
    }).
      compileComponents();

    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect.assertions(1);
    expect(component, "did not compile").toBeTruthy();
  });

  it("should initialize with menu closed", () => {
    expect.assertions(1);
    expect(component.isMenuOpen, "menu should be closed initially").toBeFalsy();
  });

  it("should toggle menu open when closed", () => {
    expect.assertions(2);
    expect(component.isMenuOpen, "menu should start closed").toBeFalsy();
    component.toggleMenu();
    expect(component.isMenuOpen,
      "menu should be open after toggle").toBeTruthy();
  });

  it("should toggle menu closed when open", () => {
    expect.assertions(2);
    component.toggleMenu();
    expect(component.isMenuOpen,
      "menu should be open after first toggle").toBeTruthy();
    component.toggleMenu();
    expect(component.isMenuOpen,
      "menu should be closed after second toggle").toBeFalsy();
  });

  it("should close menu when closeMenu is called", () => {
    expect.assertions(2);
    fixture.detectChanges();
    component.toggleMenu();
    expect(component.isMenuOpen,
      "menu should be open before close").toBeTruthy();
    component.closeMenu();
    expect(component.isMenuOpen,
      "menu should be closed after closeMenu").toBeFalsy();
  });

  it("should close menu when already closed", () => {
    expect.assertions(1);
    fixture.detectChanges();
    component.closeMenu();
    expect(component.isMenuOpen, "menu should remain closed").toBeFalsy();
  });

  it("should render hamburger button", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hamburgerButton = compiled.querySelector(".hamburger-btn");
    expect(hamburgerButton, "should render hamburger button").toBeTruthy();
  });

  it("should toggle menu when hamburger button is clicked", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hamburgerButton
     = compiled.querySelector(".hamburger-btn") as HTMLButtonElement;
    expect(component.isMenuOpen, "menu should start closed").toBeFalsy();
    hamburgerButton.click();
    fixture.detectChanges();
    expect(component.isMenuOpen,
      "menu should be open after click").toBeTruthy();
  });

  it("should apply menu-open class when menu is open", () => {
    expect.assertions(1);
    fixture.detectChanges();
    component.toggleMenu();
    fixture.changeDetectorRef.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navElement = compiled.querySelector("nav");
    expect(navElement?.classList.contains("menu-open"),
      "nav should have menu-open class").toBeTruthy();
  });

  it("should render navigation links", () => {
    expect.assertions(5);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll("a[routerLink]");
    expect(links.length, "should have navigation links").
      toBeGreaterThanOrEqual(5);
    // eslint-disable-next-line max-nested-callbacks -- We need to map the links to their text content.
    const linkTexts = [ ...links ].map((link) => {
      return link.textContent.trim();
    });
    expect(linkTexts, "should include About link").toContain("About");
    expect(linkTexts, "should include Handbook link").toContain("Handbook");
    expect(linkTexts, "should include FAQ link").toContain("FAQ");
    expect(linkTexts, "should include Reviews link").toContain("Reviews");
  });

  it("should close menu when navigation link is clicked", () => {
    expect.assertions(2);
    fixture.detectChanges();
    component.toggleMenu();
    fixture.changeDetectorRef.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const aboutLink = [ ...compiled.querySelectorAll("a[routerLink]") ].find(
      // eslint-disable-next-line max-nested-callbacks -- We need to find the About link.
      (link) => {
        return link.textContent.includes("About");
      },
    ) as HTMLElement;
    expect(component.isMenuOpen,
      "menu should be open before link click").toBeTruthy();
    aboutLink.click();
    fixture.changeDetectorRef.detectChanges();
    expect(component.isMenuOpen,
      "menu should be closed after link click").toBeFalsy();
  });

  it("should have proper aria attributes on hamburger button", () => {
    expect.assertions(2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hamburgerButton
    = compiled.querySelector(".hamburger-btn") as HTMLButtonElement;
    expect(hamburgerButton.getAttribute("aria-label"),
      "should have aria-label").toBe("Toggle menu");
    expect(hamburgerButton.getAttribute("aria-expanded"),
      "should have aria-expanded").toBe("false");
  });

  it("should update aria-expanded when menu is toggled", () => {
    expect.assertions(2);
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    let hamburgerButton
    = compiled.querySelector(".hamburger-btn") as HTMLButtonElement;
    expect(hamburgerButton.getAttribute("aria-expanded"),
      "aria-expanded should start as false").toBe("false");
    component.toggleMenu();
    fixture.changeDetectorRef.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    hamburgerButton
    = compiled.querySelector(".hamburger-btn") as HTMLButtonElement;
    expect(hamburgerButton.getAttribute("aria-expanded"),
      "aria-expanded should be true after toggle").toBe("true");
  });
});
