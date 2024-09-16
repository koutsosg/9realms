/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gerozndpemyaao3")

  collection.name = "url_types"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm6plxt3",
    "name": "icon",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gerozndpemyaao3")

  collection.name = "socials"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm6plxt3",
    "name": "href",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
