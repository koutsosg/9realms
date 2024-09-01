/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4lsm2j2z412ydq3",
    "created": "2024-09-01 13:54:58.559Z",
    "updated": "2024-09-01 13:54:58.559Z",
    "name": "descriptions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ytcabojj",
        "name": "bullets",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "aycgbdru",
        "name": "description_content",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ijp29fg63v639me",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4lsm2j2z412ydq3");

  return dao.deleteCollection(collection);
})
