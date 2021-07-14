import Link from 'next/link'

export interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  return (
    <nav className="container py-2 m-auto flex justify-between">
        <Link href="/">
      <div className="logo w-10 h-10"></div>
        </Link>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/PostEditor">
          <a>Create Post</a>
        </Link>
      </button>
      <style jsx>{`
        .logo {
          background: url('https://avatars1.githubusercontent.com/u/65761570?s=460&u=640f39b808c75c6b86460aa907dd030bcca2f3c7&v=4');
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
