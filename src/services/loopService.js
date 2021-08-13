import { storageService } from './asyncStorageService'

export const loopService = {
  add,
  query,
  remove,
  getById,
  update
}


function query(key) {
  return storageService.query(key);
}

async function getById(itemId) {
  return storageService.get('mixes', itemId)
}

function remove(itemId) {
  return storageService.remove('mixes', itemId)

}
async function add(item) {
  const addedItem = storageService.post('mixes', item)
  return addedItem
}

async function update(item) {
  return storageService.put('loops', item);
}
