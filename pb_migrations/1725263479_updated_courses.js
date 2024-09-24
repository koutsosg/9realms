/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfcqsk7l",
    "name": "institution",
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
    "id": "epscinqw",
    "name": "verification",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xam9cf7a",
    "name": "date_end",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa")

  // remove
  collection.schema.removeField("zfcqsk7l")

  // remove
  collection.schema.removeField("epscinqw")

  // remove
  collection.schema.removeField("xam9cf7a")

  return dao.saveCollection(collection)
})
