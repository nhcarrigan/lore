/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
// eslint-disable-next-line import/extensions -- This is not a file extension.
import { appConfig } from "./app/app.config";

bootstrapApplication(App, appConfig).
  // eslint-disable-next-line unicorn/prefer-top-level-await -- No top level await in a web app
  catch((error: unknown) => {
    console.error(error);
  });
