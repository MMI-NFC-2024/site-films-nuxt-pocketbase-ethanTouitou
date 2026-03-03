/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update collection data
  unmarshal({
    "name": "Films"
  }, collection)

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1438581093",
    "max": null,
    "min": null,
    "name": "dure_min",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3633048593",
    "max": "",
    "min": "",
    "name": "dete_de_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update collection data
  unmarshal({
    "name": "film"
  }, collection)

  // remove field
  collection.fields.removeById("number1438581093")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3633048593",
    "max": "",
    "min": "",
    "name": "date_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
