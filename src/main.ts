import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ApplicationModule } from './root/modules/application.module';

platformBrowserDynamic()
  .bootstrapModule(ApplicationModule)
  // eslint-disable-next-line no-console
  .catch((error: Error): void => console.error(error));
