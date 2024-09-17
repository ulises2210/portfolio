import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation, withHashLocation, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding(),
    withHashLocation(),
    withRouterConfig({paramsInheritanceStrategy: 'always'}),
    withViewTransitions(),
    withEnabledBlockingInitialNavigation(),)
    , provideClientHydration(),MessageService, provideAnimations()]
};
