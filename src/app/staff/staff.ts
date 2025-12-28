/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { Component, signal } from "@angular/core";
import { bios } from "../config/bios";
import { staffNames } from "../config/staffNames";
import type { Staff as StaffType } from "../../interfaces/staff";

/**
 * Renders the staff page.
 */
@Component({
  selector:    "app-staff",
  styleUrl:    "./staff.css",
  templateUrl: "./staff.html",
})
export class Staff {
  protected staffName = signal<StaffType | undefined>(undefined);

  /**
   * Sets the selected staff member.
   * @param name - The name of the staff member to display.
   */
  public selectStaffMember(name: StaffType | undefined): void {
    this.staffName.set(name);
    // Scroll to the top of the page
    globalThis.window.scrollTo({ behavior: "smooth", top: 0 });
  }

  /**
   * Gets the bio for the selected staff member.
   * @returns The bio for the staff member.
   */
  public getBio(): Array<string> {
    const name = this.staffName();
    if (name === undefined) {
      return [];
    }
    return bios[name];
  }

  /**
   * Gets the display name of the selected staff member.
   * @returns The name of the staff member.
   */
  public getName(): string | undefined {
    const name = this.staffName();
    if (name === undefined) {
      return undefined;
    }
    return staffNames[name];
  }
}
