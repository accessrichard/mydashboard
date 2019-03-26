function getPropIndex(prop: string, obj: any[]): number {
  return obj
    .map(contactItem => {
      return contactItem[prop];
    })
    .indexOf(prop);
}

function remove(prop: string, obj: any[]) {
  const index = getPropIndex(prop, obj);
  if (index === -1) {
    return;
  }

  obj.splice(index, 1);
}
