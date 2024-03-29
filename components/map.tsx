import { useEffect, useState, Fragment } from 'react'
import { Bunkers, useGetBunkersQuery } from '../utils/__generated__/graphql'
import { useRouter } from 'next/router'
import Leaflet, { LatLngTuple } from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip, ZoomControl } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { Dialog } from '@reach/dialog'
import { Spinner } from 'components/spinner'
import { ZoomSetter } from 'components/zoom-setter'
import { Filter } from 'components/map-filter'
import { Information, SourceModal } from 'components/info'
import type { FilterObject } from 'components/map-filter'

import ROCoordinates from 'public/data/ro-coordinates.json'
import useQueryState from './hooks/useQueryState'
import { BunkerModal } from './bunker-modal'
export function createMarkerClusterCustomIcon(cluster: any) {
  const size = cluster.getChildCount()

  return Leaflet.divIcon({
    html: `<div >
              <span class="marker-cluster-label">${size}</span>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" >
                <path
                  d="M24.9851 16.667C21.3678 16.667 17.8987 18.104 15.3409 20.6618C12.7831 23.2196 11.3462 26.6887 11.3462 30.3059C11.3568 34.4746 12.6303 38.5422 14.999 41.9726C17.6373 45.4091 21.0619 48.1622 24.9851 50.0004C28.9082 48.1622 32.3329 45.4091 34.9712 41.9726C37.3398 38.5422 38.6134 34.4746 38.624 30.3059C38.624 26.6887 37.187 23.2196 34.6292 20.6618C32.0714 18.104 28.6023 16.667 24.9851 16.667ZM24.9851 36.4726C23.7654 36.4726 22.5732 36.1109 21.5591 35.4333C20.545 34.7557 19.7546 33.7926 19.2878 32.6658C18.8211 31.539 18.699 30.2991 18.9369 29.1029C19.1748 27.9067 19.7622 26.8079 20.6246 25.9454C21.487 25.083 22.5858 24.4957 23.782 24.2578C24.9782 24.0198 26.2181 24.1419 27.345 24.6087C28.4718 25.0754 29.4349 25.8658 30.1125 26.8799C30.7901 27.894 31.1517 29.0863 31.1517 30.3059C31.1481 31.9403 30.4972 33.5067 29.3415 34.6624C28.1858 35.8181 26.6195 36.4689 24.9851 36.4726ZM38.0267 45.8337C37.7956 45.8348 37.5679 45.7783 37.3642 45.6691C37.1605 45.56 36.9872 45.4017 36.8601 45.2087C36.6591 44.9025 36.5871 44.5293 36.66 44.1703C36.7328 43.8114 36.9445 43.4957 37.249 43.292C40.4202 41.1612 42.986 38.2459 44.6969 34.8298C46.4077 31.4136 47.2054 27.6128 47.0123 23.7971C46.8192 19.9813 45.6419 16.2805 43.5948 13.0545C41.5478 9.82855 38.7008 7.18722 35.3306 5.38745C31.9605 3.58767 28.1819 2.6907 24.3624 2.78378C20.5429 2.87686 16.8125 3.95681 13.534 5.9186C10.2555 7.8804 7.54045 10.6573 5.653 13.9791C3.76554 17.301 2.76988 21.0548 2.76285 24.8754C2.7658 28.5301 3.67747 32.1267 5.4158 35.3416C7.15414 38.5564 9.66459 41.2885 12.7212 43.292C13.0257 43.4957 13.2373 43.8114 13.3102 44.1703C13.383 44.5293 13.3111 44.9025 13.1101 45.2087C13.0092 45.3614 12.8791 45.4926 12.7273 45.5949C12.5755 45.6971 12.405 45.7683 12.2256 45.8045C12.0462 45.8406 11.8615 45.8409 11.6819 45.8054C11.5024 45.7699 11.3317 45.6993 11.1795 45.5976C6.70628 42.6512 3.30493 38.3382 1.48245 33.3013C-0.340034 28.2645 -0.486065 22.7736 1.06612 17.647C2.61831 12.5204 5.7856 8.03265 10.0959 4.85265C14.4062 1.67265 19.6287 -0.0293349 24.9851 0.000382647C30.3414 -0.0293349 35.5639 1.67265 39.8743 4.85265C44.1846 8.03265 47.3518 12.5204 48.904 17.647C50.4562 22.7736 50.3102 28.2645 48.4877 33.3013C46.6652 38.3382 43.2639 42.6512 38.7906 45.5976C38.567 45.7543 38.2998 45.8368 38.0267 45.8337Z"
                  fill="currentColor"
                />
              </svg>
            </div>`,
    className: 'marker-cluster-medium text-brown',
  })
}

export const MarkerCustomIcon = Leaflet.divIcon({
  html: `<div>
              <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.275 0C9.01947 0 5.89727 1.29326 3.59526 3.59526C1.29326 5.89727 0 9.01947 0 12.275C0.00953215 16.0268 1.15573 19.6877 3.2875 22.775C5.65916 25.8706 8.74207 28.3489 12.275 30C15.8024 28.3456 18.8804 25.8677 21.25 22.775C23.3862 19.6891 24.5368 16.0281 24.55 12.275C24.55 9.01947 23.2567 5.89727 20.9547 3.59526C18.6527 1.29326 15.5305 0 12.275 0V0ZM12.275 17.825C11.1773 17.825 10.1043 17.4995 9.19159 16.8897C8.27889 16.2798 7.56753 15.413 7.14747 14.3989C6.7274 13.3848 6.61749 12.2688 6.83164 11.1922C7.04579 10.1157 7.57438 9.12674 8.35056 8.35056C9.12674 7.57438 10.1157 7.04579 11.1922 6.83164C12.2688 6.61749 13.3848 6.7274 14.3989 7.14747C15.413 7.56753 16.2798 8.27889 16.8897 9.19159C17.4995 10.1043 17.825 11.1773 17.825 12.275C17.8217 13.7459 17.2359 15.1557 16.1958 16.1958C15.1557 17.2359 13.7459 17.8217 12.275 17.825Z" fill="currentColor"/>
              </svg>
            </div>`,
  className: 'marker text-brown',
})
function Map() {
  const router = useRouter()

  const [selectedBunkerId, setSelectedBunkerId] = useState(0)
  const [lat, setLat] = useState(45.947808)
  const [lng, setLng] = useState(25.091419)
  const [zoom, setZoom] = useState(7)
  const [scrollWheelZoom, setScrollWheelZoom] = useState(true)
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('sourceRead') === null || localStorage.getItem('sourceRead') === '0') {
      setShow(true)
    }
  }, [])
  function toggleModal() {
    if (show) {
      localStorage.setItem('sourceRead', '1')
      setShow(false)
    } else {
      localStorage.setItem('sourceRead', '0')
      setShow(true)
    }
  }
  const [filters, setFilters] = useQueryState({
    district: null,
    city: null,
  })
  const [totalResults, setTotalResults] = useState(0)
  const queryVariables = {
    _and: [
      { city: filters.city ? { _like: `%${filters.city}%` } : {} },
      { district: filters.district ? { _like: `%${filters.district}%` } : {} },
    ],
  }
  const { loading, error, data } = useGetBunkersQuery({
    variables: {
      where: queryVariables,
    },
  })

  useEffect(() => {
    setTotalResults(data?.bunkers.length || 0)
    zoomOnSelectedDistrict(router?.query?.district)
    setFilters((filters: FilterObject) => ({ ...filters, ...router?.query }))
  }, [setFilters, router.query, data?.bunkers.length])

  if (loading || !data?.bunkers) return <Spinner />
  if (error) return <div>Error</div>
  const bunkers: (Bunkers & { slug: string })[] = data?.bunkers.map((item: Bunkers) => {
    return {
      ...item,
      slug: `/${item.id}`,
    }
  })
  function zoomOnSelectedDistrict(districtValue: any) {
    if (districtValue) {
      const district = ROCoordinates.find(({ iso2 }) => iso2 === districtValue)
      if (district) {
        setLat(parseFloat(district.lat))
        setLng(parseFloat(district.lng))
        setZoom(8)
      }
    } else {
      setLat(45.947808)
      setLng(25.091419)
      setZoom(7)
    }
  }

  function handleFilterChange(filterProperty: any) {
    setFilters((filters: FilterObject) => ({ ...filters, ...filterProperty }))
  }

  const position: LatLngTuple = [lat, lng]

  return (
    <>
      <MapContainer
        center={position}
        zoom={zoom}
        maxZoom={20}
        zoomControl={false}
        scrollWheelZoom={scrollWheelZoom}
        className='markercluster-map'>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <ZoomSetter setZoom={setZoom} />
        <MarkerClusterGroup showCoverageOnHover={false} iconCreateFunction={createMarkerClusterCustomIcon}>
          <>
            {bunkers?.map((item) => (
              <Marker
                key={item.id}
                position={[item.lat, item.lng]}
                icon={MarkerCustomIcon}
                eventHandlers={{
                  click: () => setSelectedBunkerId(item.id),
                }}>
                <Tooltip>{item.address}</Tooltip>
              </Marker>
            ))}
          </>
        </MarkerClusterGroup>
        <ZoomControl position='bottomright' />
      </MapContainer>
      <Filter drawer={true} filters={filters} totalResults={totalResults} onFilterChange={handleFilterChange} />
      <Information toggleModal={toggleModal} />
      <Dialog
        aria-label='detalii adapost'
        isOpen={!!selectedBunkerId}
        onDismiss={() => setSelectedBunkerId(0)}
        className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <BunkerModal id={selectedBunkerId} closeModal={() => setSelectedBunkerId(0)} />
        </div>
      </Dialog>

      <Dialog aria-label='sursa datelor' isOpen={show} onDismiss={toggleModal} className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <SourceModal toggleModal={toggleModal} />
        </div>
      </Dialog>
    </>
  )
}
export default Map
