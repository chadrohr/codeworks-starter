import angular from 'angular'
const Component = 'testComponent'

angular.module(`app.components.${Component}`, [])
  .component(Component,{
    template: `<h1>Why Hello there {{$ctrl.test}}</h1>`,
    controller () {
      let $ctrl = this;
      $ctrl.test = 'This is just a test'
    } 
  })

exports[Component] = Component
  


