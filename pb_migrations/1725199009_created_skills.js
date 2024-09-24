/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1mtldd4yg5u71z6",
    "created": "2024-09-01 13:56:49.422Z",
    "updated": "2024-09-01 13:56:49.422Z",
    "name": "skills",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5q04wyor",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("1mtldd4yg5u71z6");

  return dao.deleteCollection(collection);
})
