/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yih4195vtjouia4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdyncjb3",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fhevrgmh",
    "name": "description_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yih4195vtjouia4")

  // remove
  collection.schema.removeField("mdyncjb3")

  // remove
  collection.schema.removeField("fhevrgmh")

  return dao.saveCollection(collection)
})
