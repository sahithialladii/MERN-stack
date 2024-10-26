import Navbar from './components/Navbar'

const App = () => {
    const data={
        appname:"Hello"
    }
    const logodata ="mylogo"
    const test="hello world"
  return (
    <>
    <Navbar appdata={data} logo={logodata} />
    <p className='text-cyan-500'>{test}</p>
    </>
  )
}

export default App




