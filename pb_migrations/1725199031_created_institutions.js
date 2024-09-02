/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ottcn9xpkbsonpi",
    "created": "2024-09-01 13:57:11.545Z",
    "updated": "2024-09-01 13:57:11.545Z",
    "name": "institutions",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("ottcn9xpkbsonpi");

  return dao.deleteCollection(collection);
})
