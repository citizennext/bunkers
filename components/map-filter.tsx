import { useState } from 'react'
import Select from 'react-select'
import Drawer from 'components/drawer'
import { Spinner } from 'components/spinner'
import roDistricts from '../public/data/ro-coordinates.json'
import { useWindowSize } from 'components/hooks/useWindowSize'
import { FilterMenu } from 'components/icons'

import { useGetFiltersQuery } from 'utils/__generated__/graphql'

export interface FilterObject {
  district?: string | null
  city?: string | null
}

type Props = {
  drawer: boolean
  onFilterChange: any
  filters: FilterObject
  totalResults: number
}
export function Filter(props: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDistrict, setSelectedDistrict] = useState(props.filters.district)

  const openDrawer = () => setIsOpen((current: boolean) => !current)
  const windowSize = useWindowSize()

  const { loading, error, data } = useGetFiltersQuery({
    variables: {
      where: { city: { _is_null: false }, district: selectedDistrict ? { _eq: selectedDistrict } : {} },
    },
  })
  if (loading || !data) return <Spinner />
  if (error) return <div>Error</div>
  const { cities: citiesData, districts: districtsData } = data

  const districts = districtsData?.map((item: { district?: string | null }) => {
    return { value: item.district, label: roDistricts.find((i: any) => i.iso2 === item.district)?.admin }
  })
  districts?.unshift({ value: null, label: 'Toate județele' })

  const cities = citiesData?.map((item: { city?: string | null; district?: string | null }) => {
    return { value: item.city, district: item.district, label: item.city }
  })
  cities?.unshift({ value: null, district: null, label: 'Toate orașele' })

  function handleChangeDistrict(newValue: any) {
    props.onFilterChange({ district: newValue.value, city: null })

    setSelectedDistrict(newValue.value)
  }
  function handleChangeCity(newValue: any) {
    props.onFilterChange({ city: newValue.value })
  }

  return (
    <>
      {props.drawer && windowSize.width && windowSize.width < 768 ? (
        <div className='filter-menu' data-open={isOpen}>
          <FilterMenu size={20} className='filter-menu-icon' />
          <Drawer
            className='map-drawer map-filters'
            width={windowSize.width < 375 ? '260px' : '300px'}
            placement='right'
            open={isOpen}
            closeButtonStyle={{}}
            toggleHandler={openDrawer}
            closeButton={<FilterMenu className='close' size={20} />}>
            <div className='select-options'>
              <div className='pin-number'>{props.totalResults}</div>
              <Select
                value={districts?.filter(({ value }: any) => value === props.filters.district)}
                options={districts}
                onChange={handleChangeDistrict}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#CEE6C1',
                    primary: '#6FBBB7',
                  },
                })}
              />
              <Select
                value={cities?.filter(({ value }: any) => value === props.filters.city)}
                options={cities}
                onChange={handleChangeCity}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#CEE6C1',
                    primary: '#6FBBB7',
                  },
                })}
              />
            </div>
          </Drawer>
        </div>
      ) : (
        <div className='select-options'>
          <div className='select-container'>
            <label>Judet</label>
            <Select
              value={districts.filter(({ value }: any) => value === props.filters.district)}
              options={districts}
              onChange={handleChangeDistrict}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#cee6c1',
                  primary: '#6fbbb7',
                },
              })}
            />
          </div>
          <div className='select-container'>
            <label>Orașe</label>
            <Select
              value={cities.filter(({ value }: any) => value === props.filters.city)}
              options={cities}
              onChange={handleChangeCity}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#cee6c1',
                  primary: '#6fbbb7',
                },
              })}
            />
          </div>
          <div className='pin-number select-container'>
            <label>Adăposturi</label>
            {props.totalResults}
          </div>
        </div>
      )}
    </>
  )
}
