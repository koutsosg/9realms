/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yih4195vtjouia4",
    "created": "2024-08-30 17:24:09.639Z",
    "updated": "2024-08-30 17:24:09.639Z",
    "name": "cvs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sz5ckhvf",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("yih4195vtjouia4");

  return dao.deleteCollection(collection);
})
