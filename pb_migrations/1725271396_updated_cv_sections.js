/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // remove
  collection.schema.removeField("9fslu7zq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f5ehdtqo",
    "name": "certifications",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9dmr8oulca3t5xa",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9fslu7zq",
    "name": "certifications",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1mtldd4yg5u71z6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("f5ehdtqo")

  return dao.saveCollection(collection)
})
