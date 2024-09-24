/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4lsm2j2z412ydq3")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4lsm2j2z412ydq3")

  collection.listRule = "id = @request.auth.id"
  collection.viewRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
