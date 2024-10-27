import Navbar from './components/Navbar'
import DefaultExportSample from "./DefaultExportSample"
import { Module1, Module2 } from "./ModuleExportSample"

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
     <DefaultExportSample />
      <Module1 />
      <Module2 />
    </>
  )
}

export default App




