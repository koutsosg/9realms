/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b10k82wbchjriy5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nngxo2t5",
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
  const collection = dao.findCollectionByNameOrId("b10k82wbchjriy5")

  // remove
  collection.schema.removeField("nngxo2t5")

  return dao.saveCollection(collection)
})
