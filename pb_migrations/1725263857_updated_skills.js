/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mtldd4yg5u71z6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3s7b56c",
    "name": "languages",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhzzj8nw",
    "name": "techs",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mtldd4yg5u71z6")

  // remove
  collection.schema.removeField("n3s7b56c")

  // remove
  collection.schema.removeField("zhzzj8nw")

  return dao.saveCollection(collection)
})
