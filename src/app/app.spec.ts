/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { describe, beforeEach, it, expect } from "vitest";
import { App } from "./app";

describe("app", () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      // eslint-disable-next-line deprecation/deprecation -- We need to use the deprecated method.
      imports: [ App, RouterTestingModule ],
    }).compileComponents();
  });

  it("should create the app", () => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app, "did not compile").toBeTruthy();
  });

  it("should initialize with correct title", () => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(app.title(), "should have correct title").toBe("lore");
  });

  it("should render navigation component", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector("app-nav");
    expect(nav, "should render nav component").toBeTruthy();
  });

  it("should render ticker component", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const ticker = compiled.querySelector("app-ticker");
    expect(ticker, "should render ticker component").toBeTruthy();
  });

  it("should render disclaimer component", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const disclaimer = compiled.querySelector("app-disclaimer");
    expect(disclaimer, "should render disclaimer component").toBeTruthy();
  });

  it("should render footer component", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector("app-footer");
    expect(footer, "should render footer component").toBeTruthy();
  });

  it("should render router outlet", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const routerOutlet = compiled.querySelector("router-outlet");
    expect(routerOutlet, "should render router outlet").toBeTruthy();
  });

  it("should have proper layout structure", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector("main");
    expect(main, "should render main element").toBeTruthy();
  });

  it("should have fixed positioning for nav and ticker", async() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const fixedContainer = compiled.querySelector(".fixed");
    expect(fixedContainer,
      "should have fixed positioning container").toBeTruthy();
  });
});
