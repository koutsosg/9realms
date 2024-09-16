/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gerozndpemyaao3",
    "created": "2024-09-16 09:03:12.645Z",
    "updated": "2024-09-16 09:03:12.645Z",
    "name": "Socials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ivbtvqum",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lm6plxt3",
        "name": "href",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("gerozndpemyaao3");

  return dao.deleteCollection(collection);
})
