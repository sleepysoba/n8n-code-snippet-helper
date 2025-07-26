// Merge first and last name and compute bonus
for (const item of $input.all()) {
  item.json.fullName = `${item.json.firstName} ${item.json.lastName}`;
  if (item.json.salary) {
    item.json.bonus = item.json.salary * 0.1;
  }
}
return $input.all();