import ProgressBody from './ProgressBody'
import ProgressFooter from './ProgressFooter'
import ProgressHeader from './ProgressHeader'

const ProgressCard = () => {
  return (
    <div className='
    min-w-[400px] 
    w-[350px]
    flex flex-col
    rounded-[10px]
    px-[28px]
    py-[21px]
    bg-white'>
       {/* Progress Header Component */}
       <ProgressHeader/>
       {/* Progress body */}
       <ProgressBody/>

       {/* Footer of progress  */}
       <ProgressFooter/>
    </div>
  )
}

export default ProgressCard