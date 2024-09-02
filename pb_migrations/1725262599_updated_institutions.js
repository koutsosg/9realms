/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aj6q8oz1",
    "name": "descriptions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4lsm2j2z412ydq3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi")

  // remove
  collection.schema.removeField("aj6q8oz1")

  return dao.saveCollection(collection)
})
