import { FacebookShareButton } from 'react-share'
import FacebookIcon from '@/components/social-icons/facebook.svg'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`

const SocialButtons = ({ postUrl, title, fileName }) => {
  return (
    <div className="md:flex justify-between items-center pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
      <div className="mb-6 md:mb-0">
        <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
      </div>
      <div className="flex items-center">
        <FacebookShareButton
          url={postUrl}
          quote={title}
          className="flex items-center !p-1.5 mr-2 !bg-[#1877f2] rounded overflow-hidden"
        >
          <FacebookIcon className="w-5 h-5" fill="#fff" />
          <span className="ml-2.5 mr-1.5 font-extrabold text-white">Share</span>
        </FacebookShareButton>
      </div>
    </div>
  )
}

export default SocialButtons
