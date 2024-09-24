/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  collection.listRule = "id = @request.auth.id"
  collection.viewRule = "id = @request.auth.id"
  collection.createRule = "id = @request.auth.id"
  collection.updateRule = "id = @request.auth.id"
  collection.deleteRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  collection.listRule = "@request.auth.id != \"\" // Allows authenticated users to access\n"
  collection.viewRule = "@request.auth.id != \"\" // Allows authenticated users to access\n"
  collection.createRule = "@request.auth.id != \"\" // Allows authenticated users to access\n"
  collection.updateRule = "@request.auth.id != \"\" // Allows authenticated users to access\n"
  collection.deleteRule = "@request.auth.id != \"\" // Allows authenticated users to access\n"

  return dao.saveCollection(collection)
})
