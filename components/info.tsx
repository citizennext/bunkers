import Image from 'next/image'
import { Shelter, Close } from 'components/icons'

export function Information({ toggleModal }: { toggleModal: any }) {
  return (
    <div className='absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 bg-white w-32 rounded-lg p-4 hover:cursor-pointer'>
      <div className='flex items-center' onClick={() => toggleModal()}>
        <Image src='/images/logo.svg' width={100} height={30} alt='Citizen Next România' />
      </div>
    </div>
  )
}
export function SourceModal({ toggleModal }: { toggleModal: any }) {
  return (
    <section className='fixed bottom-0 md:left-0 max-h-[75vh] max-w-[375px] text-left'>
      <header className='min-h-[130px] px-6 py-5 rounded-t-lg bg-celeste border-b-6 border-leaf'>
        <Shelter color='#CEE6C1' size={80} />

        <button className='bg-snow rounded-full absolute cursor-pointer p-4 top-5 right-5' onClick={() => toggleModal()}>
          <span className='sr-only'>close modal</span>
          <Close className='text-celeste' size={20} />
        </button>
      </header>
      <div className='bg-white md:px-0'>
        <div className='px-6 pb-6 pt-3'>
          <h2 className='border-b border-snow py-6'>Sursa datelor</h2>

          <div className='py-6 border-b border-snow'>
            <p>
              <a
                href='https://www.igsu.ro/Resources/Documente_Generale/Situatia_adaposturilor_de_protectie_civila.pdf'
                target='_blank'
                rel='noopener noreferrer'>
                Lista adăposturilor de protecție civilă
              </a>
              , pusă la dispoziție de{' '}
              <a href='https://www.igsu.ro' target='_blank' rel='noopener noreferrer'>
                Inspectoratul General pentru Situații de Urgență
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
