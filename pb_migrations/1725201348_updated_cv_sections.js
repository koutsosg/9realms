/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ia2dz80",
    "name": "cd_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yih4195vtjouia4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // remove
  collection.schema.removeField("5ia2dz80")

  return dao.saveCollection(collection)
})
