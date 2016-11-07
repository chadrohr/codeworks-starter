import {testComponent} from './testing'
import{lancelot} from './lancelot'
let components = [
  testComponent,
  lancelot
]

const dependencies = components.map(c => { return `app.components.${c}`})

export {
  dependencies
}
