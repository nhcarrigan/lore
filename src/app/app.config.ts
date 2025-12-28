/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import {
  type ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter } from "@angular/router";
// eslint-disable-next-line import/extensions -- This is not a file extension.
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
