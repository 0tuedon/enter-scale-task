import { Draggable } from 'react-beautiful-dnd';

import ProgressBody from './ProgressBody';
import ProgressFooter from './ProgressFooter';
import ProgressHeader from './ProgressHeader';

const ProgressCard = ({ data }) => {
  return (
    <Draggable draggableId={data.id} index={data.id}>
      {(provided) => {
        // console.log('provided: Draggable', provided);
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="
    min-w-[400px] 
    w-[350px]
    min-h-[200px]
    max-h-[201px]
    flex flex-col
    rounded-[10px]
  
    px-[28px]
    relative
    py-[21px]
    bg-white"
          >
            {/* Progress Header Component */}
            <ProgressHeader data={data} />
            {/* Progress body */}
            <ProgressBody data={data} />

            {/* Footer of progress  */}
            <ProgressFooter data={data} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default ProgressCard;
