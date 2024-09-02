/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjfx7c0o",
    "name": "education",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ottcn9xpkbsonpi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b0hdkgh5",
    "name": "skills",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // remove
  collection.schema.removeField("9fslu7zq")

  // remove
  collection.schema.removeField("qjfx7c0o")

  // remove
  collection.schema.removeField("b0hdkgh5")

  return dao.saveCollection(collection)
})
