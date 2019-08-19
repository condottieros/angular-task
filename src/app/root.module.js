import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material'
import 'angular-material/angular-material.scss'

import angularLoadingBar from 'angular-loading-bar';

// bootstrap
import { RootComponent } from './root.component';
// modules
import { CommonModule } from './common/common.module';
import './root.component.scss';

const MODULE_NAME = 'root';
const MODULE_IMPORTS = [
  uiRouter,
  angularLoadingBar,
  CommonModule,
  ngMaterial
];

angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(RootComponent.selector, RootComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .run(($transitions, cfpLoadingBar) => {
    'ngInject';

    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  })
  .name;
