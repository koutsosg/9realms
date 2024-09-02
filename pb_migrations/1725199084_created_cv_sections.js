/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cz7vgq8ek76nj1q",
    "created": "2024-09-01 13:58:04.159Z",
    "updated": "2024-09-01 13:58:04.159Z",
    "name": "cv_sections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ltfhzpqo",
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
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q");

  return dao.deleteCollection(collection);
})
