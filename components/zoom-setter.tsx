import { useMapEvent } from 'react-leaflet'
export function ZoomSetter({ setZoom }: { setZoom: any }) {
  const map = useMapEvent('zoomend', () => {
    const newZoom = map.getZoom()
    setZoom(newZoom)
  })
  return null
}
