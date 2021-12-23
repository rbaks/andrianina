import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex flex-col justify-around w-full h-content sm:h-content-sm">
      <h1 className="my-28 sm:my-10 text-center select-none text-6xl sm:text-8.5xl leading-none tracking-tightest font-extrabold">
        <span className="relative block">
          <span className="px-2 ">Blog.</span>
        </span>
        <span className="relative block">
          <span className="px-2">Showcase.</span>
        </span>
        <span className="relative block">
          <span className="px-2">Portfolio.</span>
        </span>
      </h1>
      <div className="space-y-2 md:space-y-5">
        <PageTitle>
          Andrianina Rabakoson{' '}
          <span role="img" aria-label="waving hand" className="wave">
            👋
          </span>
        </PageTitle>
        <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">
          Software developer an AI student with a strong focus on backend systems and Artificial
          Intelligence.{' '}
          <Link href={`mailto:${siteMetadata.email}`}>
            <a
              className="font-medium leading-6 "
              aria-label={`Email to ${siteMetadata.email}`}
              title={`Email to ${siteMetadata.email}`}
            >
              Get in touch &rarr;
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
