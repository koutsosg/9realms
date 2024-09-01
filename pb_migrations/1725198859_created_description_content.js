/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ijp29fg63v639me",
    "created": "2024-09-01 13:54:19.904Z",
    "updated": "2024-09-01 13:54:19.904Z",
    "name": "description_content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dr4nwfpj",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("ijp29fg63v639me");

  return dao.deleteCollection(collection);
})
