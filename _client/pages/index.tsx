import type { NextPage } from 'next'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w[1400ps] w-2/3 flex justify-between`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2>Sidebar</h2>
        <h2>feed</h2>
        <h2>widget</h2>
      </div>
    </div>
  )
}

export default Home
