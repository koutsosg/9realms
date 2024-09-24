/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa")

  collection.listRule = "cv_section_id.cv_id.user_id = @request.auth.id"
  collection.viewRule = "cv_section_id.cv_id.user_id = @request.auth.id"

  return dao.saveCollection(collection)
})
