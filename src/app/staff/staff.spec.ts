/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import {
  describe,
  beforeEach,
  it,
  expect,
  vi,
  afterEach,
  type MockedFunction,
} from "vitest";
import { bios } from "../config/bios";
import { staffNames } from "../config/staffNames";
import { Staff } from "./staff";
import type { Staff as StaffType } from "../../interfaces/staff";

describe("staff", () => {
  let component: Staff;
  let fixture: ComponentFixture<Staff>;
  let scrollToSpy: MockedFunction<typeof globalThis.window.scrollTo>;

  beforeEach(async() => {
    scrollToSpy = vi.spyOn(globalThis.window, "scrollTo").
      mockImplementation(vi.fn());

    await TestBed.configureTestingModule({
      imports: [ Staff ],
    }).compileComponents();

    fixture = TestBed.createComponent(Staff);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    scrollToSpy.mockRestore();
  });

  it("should create", () => {
    expect.assertions(1);
    expect(component, "did not compile").toBeTruthy();
  });

  it("should initialize with no staff member selected", () => {
    expect.assertions(1);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.staffName(),
      "should start with no staff member").toBeUndefined();
  });

  it("should select a staff member", () => {
    expect.assertions(2);
    const staffMember: StaffType = "naomi";
    component.selectStaffMember(staffMember);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.staffName(),
      "should have selected staff member").toBe(staffMember);
    expect(scrollToSpy, "should scroll to top").
      toHaveBeenCalledWith({ behavior: "smooth", top: 0 });
  });

  it("should deselect staff member when undefined is passed", () => {
    expect.assertions(2);
    component.selectStaffMember("naomi");
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.staffName(),
      "should have selected staff member").toBe("naomi");
    component.selectStaffMember(undefined);
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.staffName(),
      "should deselect staff member").toBeUndefined();
  });

  it("should get bio for selected staff member", () => {
    expect.assertions(2);
    const staffMember: StaffType = "naomi";
    component.selectStaffMember(staffMember);
    const bio = component.getBio();
    expect(bio, "should return bio array").toBeInstanceOf(Array);
    expect(bio.length, "bio should have content").toBeGreaterThan(0);
  });

  it("should return empty array when no staff member is selected", () => {
    expect.assertions(1);
    const bio = component.getBio();
    expect(bio, "should return empty array").toStrictEqual([]);
  });

  it("should return correct bio for each staff member", () => {
    expect.assertions(8);
    const staffMembers: Array<StaffType> = [
      "naomi",
      "hikari",
      "amari",
      "keiko",
      "yumiko",
      "tatsumi",
      "reina",
      "minori",
    ];
    for (const member of staffMembers) {
      component.selectStaffMember(member);
      const bio = component.getBio();
      expect(bio, `should return bio for ${member}`).toStrictEqual(bios[member]);
    }
  });

  it("should get name for selected staff member", () => {
    expect.assertions(2);
    const staffMember: StaffType = "naomi";
    component.selectStaffMember(staffMember);
    const name = component.getName();
    expect(name, "should return name").toBeDefined();
    expect(name, "should return correct name").toBe(staffNames[staffMember]);
  });

  it("should return undefined name when no staff member is selected", () => {
    expect.assertions(1);
    const name = component.getName();
    expect(name, "should return undefined").toBeUndefined();
  });

  it("should return correct name for each staff member", () => {
    expect.assertions(8);
    const staffMembers: Array<StaffType> = [
      "naomi",
      "hikari",
      "amari",
      "keiko",
      "yumiko",
      "tatsumi",
      "reina",
      "minori",
    ];
    for (const member of staffMembers) {
      component.selectStaffMember(member);
      const name = component.getName();
      expect(name, `should return correct name for ${member}`).toBe(staffNames[member]);
    }
  });

  it("should scroll to top when selecting staff member", () => {
    expect.assertions(1);
    component.selectStaffMember("naomi");
    expect(scrollToSpy, "should scroll to top").
      toHaveBeenCalledWith({ behavior: "smooth", top: 0 });
  });

  it("should scroll to top when deselecting staff member", () => {
    expect.assertions(1);
    scrollToSpy.mockClear();
    component.selectStaffMember("naomi");
    scrollToSpy.mockClear();
    component.selectStaffMember(undefined);
    expect(scrollToSpy, "should scroll to top").
      toHaveBeenCalledWith({ behavior: "smooth", top: 0 });
  });

  it("should render staff list when no member is selected", () => {
    expect.assertions(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector("h1");
    expect(heading?.textContent.trim(),
      "should render staff list heading").toBe("OUR STAFF");
  });

  it("should render staff member details when selected", () => {
    expect.assertions(3);
    component.selectStaffMember("naomi");
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector("h1");
    const backButton = compiled.querySelector("button");
    expect(heading?.textContent.trim(),
      "should render staff member name").toBe(staffNames.naomi);
    expect(backButton?.textContent.trim(),
      "should render back button").toContain("Back to Staff");
    const paragraphs = compiled.querySelectorAll("p");
    expect(paragraphs.length, "should render bio paragraphs").
      toBeGreaterThan(0);
  });

  it("should handle back button click", () => {
    expect.assertions(2);
    scrollToSpy.mockClear();
    component.selectStaffMember("naomi");
    scrollToSpy.mockClear();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const backButton = compiled.querySelector("button") as HTMLButtonElement;
    backButton.click();
    fixture.detectChanges();
    // @ts-expect-error - We want it protected, but need to use it in the test.
    expect(component.staffName(),
      "should deselect staff member").toBeUndefined();
    expect(scrollToSpy, "should scroll to top").
      toHaveBeenCalledWith({ behavior: "smooth", top: 0 });
  });
});
