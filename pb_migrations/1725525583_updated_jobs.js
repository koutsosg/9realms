/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b10k82wbchjriy5")

  collection.listRule = "cv_section_id.cv_id.user_id = @request.auth.id"
  collection.viewRule = "cv_section_id.cv_id.user_id = @request.auth.id"
  collection.createRule = "cv_section_id.cv_id.user_id = @request.auth.id"
  collection.updateRule = "cv_section_id.cv_id.user_id = @request.auth.id"
  collection.deleteRule = "cv_section_id.cv_id.user_id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b10k82wbchjriy5")

  collection.listRule = "  user_id = @request.auth.id"
  collection.viewRule = "  user_id = @request.auth.id"
  collection.createRule = "  user_id = @request.auth.id"
  collection.updateRule = "  user_id = @request.auth.id"
  collection.deleteRule = "  user_id = @request.auth.id"

  return dao.saveCollection(collection)
})
