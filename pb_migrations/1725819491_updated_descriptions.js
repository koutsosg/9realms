/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4lsm2j2z412ydq3")

  // remove
  collection.schema.removeField("3qr5uh8a")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4lsm2j2z412ydq3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3qr5uh8a",
    "name": "cv_section_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cz7vgq8ek76nj1q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
