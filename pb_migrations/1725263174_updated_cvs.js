/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yih4195vtjouia4")

  // remove
  collection.schema.removeField("fhevrgmh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vdodtsvb",
    "name": "cv_sections",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cz7vgq8ek76nj1q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yih4195vtjouia4")

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

  // remove
  collection.schema.removeField("vdodtsvb")

  return dao.saveCollection(collection)
})
