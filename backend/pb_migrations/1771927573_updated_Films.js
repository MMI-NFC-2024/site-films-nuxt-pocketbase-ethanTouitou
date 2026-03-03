/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("text2834031894")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2834031894",
    "maxSelect": 1,
    "name": "genres",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Action",
      "Suspence"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2834031894",
    "max": 0,
    "min": 0,
    "name": "genres",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2834031894")

  return app.save(collection)
})
