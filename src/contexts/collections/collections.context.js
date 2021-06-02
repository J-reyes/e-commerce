// will only store all of our collections items
import { createContext } from 'react'
import SHOP_DATA from './shop.data'

// create new context + pass in shop data
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext