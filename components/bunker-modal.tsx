import { Spinner } from 'components/spinner'
import { useGetBunkerQuery } from 'utils/__generated__/graphql'
import { Directions, Leaf, Close } from 'components/icons'

export function BunkerModal(props: any) {
  const bunker = props.id
  const { loading, error, data } = useGetBunkerQuery({
    variables: { bunker },
  })

  if (loading) return <Spinner />
  if (error) return <p>Error! ${error.message}</p>
  const bunkers = data?.bunkers_by_pk

  return (
    <section className='fixed bottom-0 md:left-0 max-h-[70vh] max-w-[375px] text-left'>
      <header className='min-h-[130px] px-6 py-5 rounded-t-lg bg-celeste border-b-6 border-leaf'>
        <Leaf width={60} height={88} />

        <button className='bg-snow rounded-full absolute cursor-pointer p-4 top-5 right-5' onClick={() => props.closeModal()}>
          <span className='sr-only'>close modal</span>
          <Close className='text-celeste' size={20} />
        </button>
      </header>
      <div className='bg-white md:px-0'>
        <div className='px-6 pb-6 pt-3'>
          <h2 className='border-b border-snow py-6'>{bunkers?.address}</h2>

          <div className='py-6 border-b border-snow'>
            <p>
              <strong>Direcții</strong>
              {bunkers?.coordinates ? (
                <a href={'https://www.google.ro/maps/search/' + bunkers?.coordinates} target='_blank' rel='noopener noreferrer'>
                  <span className='bg-snow block rounded-full p-3 w-12 h-12'>
                    <Directions />
                  </span>
                </a>
              ) : (
                '-'
              )}
            </p>
          </div>
          <div className='pin-address py-6'>
            <p>
              <strong>Adresă</strong>
            </p>
            <span>
              {bunkers?.address ? bunkers?.address : '-'}, {bunkers?.city ? bunkers?.city : '-'}, {bunkers?.district}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
