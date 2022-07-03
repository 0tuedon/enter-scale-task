import ArchiveHeader from './ArchiveHeader'
import ProgressBody from './ProgressBody'
import ProgressFooter from './ProgressFooter'

const ArchiveCard = ({data}) => {
  return (
    <div className='
    min-w-[400px] 
    w-[350px]
    min-h-[200px]
    max-h-[201px]
    flex flex-col
    rounded-[10px]
  
    px-[28px]
    relative
    py-[21px]
    bg-gray1'>
       {/* Progress Header Component */}
       <ArchiveHeader data={data}/>
       {/* Progress body */}
       <ProgressBody  data={data}/>

       {/* Footer of progress  */}
       <ProgressFooter  data={data}/>
    </div>
  )
}

export default ArchiveCard