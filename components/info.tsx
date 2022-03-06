import Image from 'next/image'
export function Information() {
  return (
    <div className='group absolute bottom-0 left-0 lg:bottom-8 lg:left-8 z-10 bg-white w-full md:w-32 rounded-t-md md:rounded-tr-md lg:rounded-lg hover:md:w-[600px] p-4'>
      <div className='flex items-center'>
        <div className='shrink-0 h-[30px]'>
          <Image src='/images/logo.svg' width={100} height={30} alt='Citizen Next România' />
        </div>
        <div className='hidden group-hover:inline-block text-sm ml-4 grow'>
          Sursa datelor:{' '}
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
        </div>
      </div>
    </div>
  )
}
