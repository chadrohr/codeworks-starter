import angular from 'angular'
const Component = 'lancelot'
import './lancelot.sass'
angular.module(`app.components.${Component}`, [])
  .component(Component,{
    template: `
      <h1>Lancelot was here</h1>
    `,
    controller () {
    //   let $ctrl = this;
    //   $ctrl.test = 'This is just a test'
    } 
  })

exports[Component] = Component
