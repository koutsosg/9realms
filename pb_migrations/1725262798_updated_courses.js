/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x02fkanc",
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
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x02fkanc",
    "name": "descriptions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4lsm2j2z412ydq3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
