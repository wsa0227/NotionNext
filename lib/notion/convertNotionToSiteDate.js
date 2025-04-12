const collectionData = []
for (const { id, value } of collection) {
  if (!value) continue
  const properties = (await getPageProperties(id, value, schema, null, getTagOptions(schema))) || null
  if (properties) {
    collectionData.push(properties)
  }
} 