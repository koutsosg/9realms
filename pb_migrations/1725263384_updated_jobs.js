/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b10k82wbchjriy5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qpygssc6",
    "name": "position",
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
    "id": "deny3iaq",
    "name": "city",
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
    "id": "03b4ksup",
    "name": "country",
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
    "id": "3bfjc8v3",
    "name": "date_start",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ffem2gqn",
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
  const collection = dao.findCollectionByNameOrId("b10k82wbchjriy5")

  // remove
  collection.schema.removeField("qpygssc6")

  // remove
  collection.schema.removeField("deny3iaq")

  // remove
  collection.schema.removeField("03b4ksup")

  // remove
  collection.schema.removeField("3bfjc8v3")

  // remove
  collection.schema.removeField("ffem2gqn")

  return dao.saveCollection(collection)
})
