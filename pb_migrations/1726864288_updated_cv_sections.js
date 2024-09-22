/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp07dylv",
    "name": "indexing",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp07dylv",
    "name": "Indexing",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
