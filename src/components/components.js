import {testComponent} from './testing'

let components = [
  testComponent
]

const dependencies = components.map(c => { return `app.components.${c}`})

export {
  dependencies
}
