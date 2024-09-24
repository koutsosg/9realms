/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gerozndpemyaao3")

  collection.name = "socials"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gerozndpemyaao3")

  collection.name = "Socials"

  return dao.saveCollection(collection)
})
