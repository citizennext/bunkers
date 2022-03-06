// @ts-nocheck

const Menu = (props: any) => (
  <svg width={props.size} height={props.size} viewBox='0 0 20 18' {...props}>
    <title>{'icon menu mobile'}</title>
    <g id='prefix__Layer_2' data-name='Layer 2'>
      <g id='prefix__Layer_1-2' data-name='Layer 1' fill='currentColor'>
        <rect x={11} y={-6} width={3} height={15} rx={1.5} transform='rotate(-90 12.5 1.5)' />
        <rect x={8.5} y={-1} width={3} height={20} rx={1.5} transform='rotate(-90 10 9)' />
        <rect x={9.5} y={7.5} width={3} height={18} rx={1.5} transform='rotate(-90 11 16.5)' />
      </g>
    </g>
  </svg>
)

const Close = (props: any) => (
  <svg
    width={props.size}
    height={props.size}
    {...props}
    viewBox='0 0 17 17'
    strokeLinecap='round'
    strokeMiterlimit={10}
    strokeWidth={2}>
    <title>{'icon close'}</title>
    <path d='M1 1l15 15M16 1L1 16' stroke='currentColor' fill='currentColor' />
  </svg>
)

const FilterMenu = (props: any) => (
  <div className={props.className}>
    <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`} fill='none'>
      <path d='M2.28906 2L10.2891 10L2.28906 18' stroke='white' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='round' />
    </svg>
  </div>
)
const Leaf = (props: any) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.62 24' width={props.width} height={props.height}>
    <g data-name='Layer 2'>
      <path
        d='M11.08 12a2.77 2.77 0 1 1-2.77-2.77A2.77 2.77 0 0 1 11.08 12ZM12 4.54a4.05 4.05 0 0 1-7.3 0A8.3 8.3 0 0 0 0 12a12.51 12.51 0 0 0 2.23 7.11 16.24 16.24 0 0 0 3.6 3.46 5 5 0 0 1 1-5.15c.4-.44.82-.82 1.26-1.22l.16-.14A4.06 4.06 0 1 1 12.37 12a4 4 0 0 1-.44 1.82 5 5 0 0 1-.4.62A14.89 14.89 0 0 1 9 17.16a15.72 15.72 0 0 0-1.17 1.12 3.72 3.72 0 0 0-.74 4A5.23 5.23 0 0 0 8.3 24a16.43 16.43 0 0 0 6.08-4.89A12.59 12.59 0 0 0 16.62 12 8.3 8.3 0 0 0 12 4.54ZM8.31 0a2.77 2.77 0 1 0 2.77 2.77A2.77 2.77 0 0 0 8.31 0Z'
        fill='#cee6c1'
        data-name='Layer 1'
      />
    </g>
  </svg>
)
const Directions = (props: any) => {
  const style = { fill: 'none', stroke: '#6fbab6', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '2px' }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.83 23.83' width={props.size} height={props.size}>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <path style={style} transform='rotate(45 11.918 11.907)' d='M4.49 4.49h14.85v14.85H4.49z' />
          <path style={style} d='M9.86 16.17v-5.89h5.41' />
          <path style={style} d='m13.67 7.66 2.58 2.58-2.65 2.66' />
        </g>
      </g>
    </svg>
  )
}
const Share = (props: any) => {
  const style = { fill: 'none', stroke: '#6fbab6', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '2px' }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 24' width={props.size} height={props.size}>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <circle style={style} cx='3.5' cy='12' r='2.5' />
          <circle style={style} cx='16.5' cy='20.5' r='2.5' />
          <circle style={style} cx='16.5' cy='3.5' r='2.5' />
          <path style={style} d='M5.64 10.71 14 5M5.64 13.31 14 19.03' />
        </g>
      </g>
    </svg>
  )
}
const GreenArrow = (props: any) => {
  const style = { fill: 'none', stroke: '#6fbab6', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '2px' }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.87 23.74' width={props.size} height={props.size}>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <path style={style} d='m11.58 1 10.87 10.87-10.87 10.87M22 11.87H1' />
        </g>
      </g>
    </svg>
  )
}
const Shelter = ({ color, size }) => {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 59 63' width={size} height={size}>
      <path
        d='M59.285 63.28v-6.686H14.178V27.78L59.285 7.355V.468L.358 27.056v6.954l7.134-3.249V63.28l51.793.001Z'
        fill={color}
      />
      <path
        d='M23.033 43.826c1.171 0 2.313-.602 2.95-1.685l7.023-12.048a3.42 3.42 0 0 0-5.893-3.468L20.09 38.674a3.419 3.419 0 0 0 2.943 5.153ZM48.068 26a4.199 4.199 0 1 1-8.398 0 4.199 4.199 0 0 1 8.398 0M52.275 50.617l-6.206-8.452a2.492 2.492 0 0 0-.136-.168c-.017-.02-.038-.04-.055-.059a1.87 1.87 0 0 0-.092-.095c-.023-.022-.047-.042-.072-.063a2.103 2.103 0 0 0-.087-.075c-.026-.022-.054-.041-.082-.062l-.085-.062-.092-.058-.085-.05a1.83 1.83 0 0 0-.096-.05c-.03-.015-.058-.03-.087-.043a1.44 1.44 0 0 0-.102-.042l-.09-.036c-.034-.013-.069-.023-.104-.034-.03-.01-.062-.018-.092-.026-.035-.01-.07-.018-.108-.027a1.467 1.467 0 0 0-.201-.035 2.24 2.24 0 0 0-.207-.02l-.094-.003c-.037 0-.075 0-.112.002a1.67 1.67 0 0 0-.301.03 3.186 3.186 0 0 0-.207.041 2.622 2.622 0 0 0-.206.062l-.105.037-.03.01-6.795 2.772c.455-1.01 4.737-8.173 4.737-8.173l5.043 5.185c.415.425.964.64 1.515.64a2.113 2.113 0 0 0 1.514-3.586c0-.001-7.374-7.575-7.405-7.604-1.024-.933-2.199-.892-3.486-.5-.67.204-4.735 1.818-7.716 6.709-3.318 5.445-3.87 10.2-3.862 11.414.006.96.181 3.113 1.493 3.964 1.116.724 2.305.758 3.181.365l11.94-5.777 4.99 6.794a2.468 2.468 0 0 0 3.456.53 2.469 2.469 0 0 0 .53-3.455Z'
        fill={color}
      />
    </svg>
  )
}
export { Menu, Close, FilterMenu, Leaf, Directions, Share, GreenArrow, Shelter }
