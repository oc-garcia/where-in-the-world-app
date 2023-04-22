let lastId = 0;

export default function idGen(prefix) {
  lastId++;
  return `${prefix}${lastId}`;
}
