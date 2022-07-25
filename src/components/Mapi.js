import { Map, Marker } from "pigeon-maps"
import '../styles/Mapping.css'
function Mapi() {
  return (
    <Map height={600} defaultCenter={[28.6139, 77.2090]} defaultZoom={13} className="bro">
      <Marker width={45} anchor={[28.6139, 77.2090]} />
    </Map>
  )
}

export default Mapi;