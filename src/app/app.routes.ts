/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { About } from "./about/about";
import { Faq } from "./faq/faq";
import { Handbook } from "./handbook/handbook";
import { Home } from "./home/home";
import { Reviews } from "./reviews/reviews";
import { Staff } from "./staff/staff";
import type { Routes } from "@angular/router";

export const routes: Routes = [
  { component: Home, path: "", pathMatch: "full" },
  { component: Handbook, path: "handbook" },
  { component: About, path: "about" },
  { component: Faq, path: "faq" },
  { component: Reviews, path: "reviews" },
  { component: Staff, path: "staff" },
];
