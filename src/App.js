import angular from 'angular'
import {dependencies} from './components/components'


let App = angular.module('app', dependencies)

App.component('app', {
  template: `<div>
    <test-component></test-component>
    <lancelot></lancelot>
  </div>`,
  controller() { }
})

export {
  App
}