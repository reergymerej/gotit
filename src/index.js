function getMissingFields(objectFields, fields) {
  return fields.filter(field =>
    objectFields.indexOf(field) === -1
  );
}

function getExtraFields(objectFields, fields) {
  return objectFields.filter(objectField =>
    fields.indexOf(objectField) === -1
  );
}

export default function (fields) {
  const sortedFields = fields.sort();

  return (obj) => {
    const objectFields = Object.keys(obj).sort();

    const missingFields = getMissingFields(objectFields, sortedFields);
    if (missingFields.length) {
      throw new Error(`missing field(s): ${ missingFields.join(', ')}`);
    }

    const extraFields = getExtraFields(objectFields, sortedFields);
    if (extraFields.length) {
      throw new Error(`superfluous field(s): ${ extraFields.join(', ')}`);
    }

    return obj;
  };
}
