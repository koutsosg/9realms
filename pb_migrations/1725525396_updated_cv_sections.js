/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  collection.listRule = "cv_id.user_id = @request.auth.id"
  collection.viewRule = "cv_id.user_id = @request.auth.id"
  collection.createRule = "cv_id.user_id = @request.auth.id"
  collection.updateRule = "cv_id.user_id = @request.auth.id"
  collection.deleteRule = "cv_id.user_id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  collection.listRule = "  cv_id = @request.auth.id"
  collection.viewRule = "  cv_id = @request.auth.id"
  collection.createRule = "  cv_id = @request.auth.id"
  collection.updateRule = "  cv_id = @request.auth.id"
  collection.deleteRule = "  cv_id = @request.auth.id"

  return dao.saveCollection(collection)
})
