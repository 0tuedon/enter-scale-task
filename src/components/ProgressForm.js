import React from 'react'
import Button from './Button'

const ProgressForm = () => {
  return (
    <form className='px-[20px] 
    gap-y-[20px]
 
    flex flex-col 
    justify-center
    items-center
    py-[10px]'>
        {/* Input */}
        <div className='bg-[] flex flex-col'>
            <label>Title</label>
            <input 
            className='border-2
            h-[48px]
            p-[10px]
            rounded-[10px]
            w-[350px] border-gray1 
            focus:outline-none outline-none' />
        </div>

        <div className='bg-[] flex flex-col'>
            <label>Description</label>
            <textarea
            className='border-2
            h-[120px]
            p-[10px]
            rounded-[10px]
            w-[350px] border-gray1 
            focus:outline-none outline-none' />
        </div>

        {/* Select Area */}

        <div className='bg-[] flex flex-col'>
            <label>Progress Status</label>
            <select
            className='border-2
            p-[10px]
            rounded-[10px]
            w-[350px] border-gray1 
            focus:outline-none outline-none' >

                <option selected>
                    In Progress
                </option>
                <option>
                    Resolved
                </option>
            </select>
        </div>
        {/* Tag  */}
        <div className='bg-[] flex flex-col'>
            <label>Progress Tag</label>
            <select
            className='border-2
            p-[10px]
            rounded-[10px]
            w-[350px] border-gray1 
            focus:outline-none outline-none' >

                <option selected>
                    Minor
                </option>
                <option>
                    Moderate
                </option>
                <option>
                    Urgent
                </option>
            </select>
        </div>

        {/* Submit Button */}

        <Button click={()=>{}}>
            Add Task
        </Button>
    </form>
  )
}

export default ProgressForm