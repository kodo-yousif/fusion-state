import fusion from '../../fusion'
import stores from '../../stores'

export default function getStore(name: string) {
  if (!stores[name]) stores[name] = new fusion()

  return stores[name]
}
