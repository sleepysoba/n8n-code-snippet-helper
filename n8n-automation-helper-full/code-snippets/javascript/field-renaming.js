// Rename 'oldName' field to 'newName'
const oldKey = "oldName";
const newKey = "newName";
for (const item of $input.all()) {
  if (item.json.hasOwnProperty(oldKey)) {
    item.json[newKey] = item.json[oldKey];
    delete item.json[oldKey];
  }
}
return $input.all();