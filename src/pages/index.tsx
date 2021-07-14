import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('./App'),
    { ssr: false }
  )
  
export default DynamicComponentWithNoSSR