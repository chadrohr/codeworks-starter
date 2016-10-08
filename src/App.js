import angular from 'angular'
import {dependencies} from './components/components'
console.log(dependencies)

let App = angular.module('app', dependencies)

App.component('app', {
  template: `<div>
    <test-component></test-component>
  </div>`,
  controller() { }
})

export {
  App
}