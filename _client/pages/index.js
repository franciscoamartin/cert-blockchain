import Sidebar from '../components/Sidebar'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w[1400ps] w-2/3 flex justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <h2>feed</h2>
        <h2>widget</h2>
      </div>
    </div>
  )
}

export default Home