import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {StoreModule} from "@ngrx/store";
import {todosFeature} from "../features/todo-list/store/reducers/todos.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "../features/todo-list/store/effects/todos.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({
        todos: todosFeature.reducer
      }),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([TodosEffects]),
    ),
  ]
};
