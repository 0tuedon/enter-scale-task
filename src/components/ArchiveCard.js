import ArchiveHeader from './ArchiveHeader';
import ProgressBody from './ProgressBody';
import ProgressFooter from './ProgressFooter';

const ArchiveCard = ({ data,setActive }) => {
  return (
    <div
      className="
      mt-[10px]
      min-w-[350px] 
      md:min-w-[400px]
      md:w-[350px]
      w-[100%]
      min-h-[219px]
      max-h-[250px]
      flex flex-col
      rounded-[10px]
    
      px-[28px]
      relative
      py-[21px]
    bg-gray1"
    >
      {/* Progress Header Component */}
      <ArchiveHeader setActive={setActive} data={data} />
      {/* Progress body */}
      <ProgressBody data={data} />

      {/* Footer of progress  */}
      <ProgressFooter data={data} />
    </div>
  );
};

export default ArchiveCard;
