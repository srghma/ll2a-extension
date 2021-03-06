import { assertType } from 'ramda-asserters'
import chromep from '~/src/chromep'

async function getSavedState() {
  const state = await chromep.storage.local.get('state')
  assertType('Object', state)
  return state
}

export default getSavedState
