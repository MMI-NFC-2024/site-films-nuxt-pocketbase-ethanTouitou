/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2834031894",
    "maxSelect": 2,
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

  // update field
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
})
