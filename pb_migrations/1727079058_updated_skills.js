/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mtldd4yg5u71z6")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mtldd4yg5u71z6")

  collection.listRule = "id = @request.auth.id"
  collection.viewRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
