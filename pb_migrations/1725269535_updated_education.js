/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tspvyx2f",
    "name": "cv_section_id",
    "type": "relation",
    "required": false,
    "presentable": true,
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tspvyx2f",
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
