/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9dmr8oulca3t5xa",
    "created": "2024-09-01 13:57:26.400Z",
    "updated": "2024-09-01 13:57:26.400Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6b93uxo1",
        "name": "course",
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
  const collection = dao.findCollectionByNameOrId("9dmr8oulca3t5xa");

  return dao.deleteCollection(collection);
})
