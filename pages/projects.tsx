import siteMetadata from '@/data/siteMetadata'
import ExternalCard from '@/components/ExternalCard'
import { PageSEO } from '@/components/SEO'
import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'
import projectsData from '@/data/projectsData'

export default function Projects({ allProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Projects</PageTitle>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        Side hustles
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        Projects I built for my hobbies or personal needs.
      </p>
      <div className="container py-12">
        <div className="flex flex-wrap -m-4">
          {allProjects
            .filter((project) => project.hobby)
            .map(({ title, description, imgSrc, href }) => (
              <ExternalCard
                key={title}
                title={title}
                description={description}
                imgSrc={imgSrc}
                href={href}
              />
            ))}
        </div>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        Products
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        Products I helped launch.
      </p>
      <div className="container py-12">
        <div className="flex flex-wrap -m-4">
          {allProjects
            .filter((project) => !project.hobby)
            .map(({ title, description, imgSrc, href }) => (
              <ExternalCard
                key={title}
                title={title}
                description={description}
                imgSrc={imgSrc}
                href={href}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const allProjects = projectsData

  return {
    props: { allProjects },
    revalidate: 60,
  }
}
