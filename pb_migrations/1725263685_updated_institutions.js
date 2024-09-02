/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi")

  collection.name = "education"

  // remove
  collection.schema.removeField("0abcu1u4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xa3nat79",
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
    "id": "wifsnvug",
    "name": "degree",
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
    "id": "1ftthpdf",
    "name": "field_of_study",
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
    "id": "gzpw5i70",
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
    "id": "yxxpomw4",
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
    "id": "i7wjgwif",
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
    "id": "ngzd2vbc",
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
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi")

  collection.name = "institutions"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0abcu1u4",
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

  // remove
  collection.schema.removeField("xa3nat79")

  // remove
  collection.schema.removeField("wifsnvug")

  // remove
  collection.schema.removeField("1ftthpdf")

  // remove
  collection.schema.removeField("gzpw5i70")

  // remove
  collection.schema.removeField("yxxpomw4")

  // remove
  collection.schema.removeField("i7wjgwif")

  // remove
  collection.schema.removeField("ngzd2vbc")

  return dao.saveCollection(collection)
})
