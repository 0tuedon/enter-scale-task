import React from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';

import Button from './Button';
import { ticketState } from '../atoms/ticketState';

const ProgressForm = ({ setActive }) => {
  const [ticket, setTickets] = useRecoilState(ticketState);
  const initialValues = {
    title: '',
    status: 'In Progress',
    description: '',
    tag: 'Minor',
  };

  const submitHandler = (val) => {
    const id = uuidv4();
    val.id = id;
    let date = new Date().toLocaleDateString();
    val.date = date;
    const newTicketsHook = [...ticket, val];
    setTickets(newTicketsHook);
    toast.success('Ticket Created Successfully');
    setActive(false);
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required()
      .max(25, 'Title should not be more than 25 characters'),
    description: Yup.string().required(),
    status: Yup.string().required(),
    tag: Yup.string().required(),
  });

  const Formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
    initialErrors: { title: 'Error' },
  });
  
  return (
    <form
      onSubmit={Formik.handleSubmit}
      className="px-[20px] 
    gap-y-[20px]
 
    flex flex-col 
    justify-center
    items-center
    py-[10px]"
    >
      <ToastContainer autoClose={900} />
      {/* Input */}
      <div className="bg-[] flex flex-col">
        <label>Title</label>
        <input
          name="title"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          className={`border-2
            h-[48px]
            p-[10px]
            rounded-[10px]
            w-[350px] ${
              Formik.errors.title && Formik.touched.title
                ? 'border-red-600'
                : 'border-gray1'
            }
            focus:outline-none outline-none`}
        />
        {/* Error Message  */}
        {Formik.errors.title && Formik.touched.title && (
          <p
            className="
          mt-[2px]
          text-red-500 
          text-[14px]
          italic
          "
          >
            {Formik.errors.title}
          </p>
        )}
      </div>

      <div className="bg-[] flex flex-col">
        <label>Description</label>
        <textarea
          name="description"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          className={`border-2
            h-[120px]
            p-[10px]
            ${
              Formik.errors.description && Formik.touched.description
                ? 'border-red-600'
                : 'border-gray1'
            }
            rounded-[10px]
            w-[350px] border-gray1 
            focus:outline-none outline-none`}
        />
        {Formik.errors.description && Formik.touched.description && (
          <p
            className="
          mt-[2px]
          text-red-500 
          text-[14px]
          italic
          "
          >
            {Formik.errors.description}
          </p>
        )}
      </div>

      {/* Select Area */}

      <div className="bg-[] flex flex-col">
        <label>Progress Status</label>
        <select
          name="status"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          className={`border-2
            p-[10px]
            ${
              Formik.errors.status && Formik.touched.status
                ? 'border-red-600'
                : 'border-gray1'
            }
            rounded-[10px]
            w-[350px] border-gray1 
            focus:outline-none outline-none`}
        >
          <option value={'In Progress'} defaultValue>
            In Progress
          </option>
          <option value={'Resolved'}>Resolved</option>
        </select>
        {Formik.errors.status && Formik.touched.status && (
          <p
            className="
          mt-[2px]
          text-red-500 
          text-[14px]
          italic
          "
          >
            {Formik.errors.status}
          </p>
        )}
      </div>
      {/* Tag  */}
      <div className="bg-[] flex flex-col">
        <label>Progress Tag</label>
        <select
          name="tag"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          className={`border-2
            p-[10px]
            rounded-[10px]
            w-[350px] border-gray1 
            ${
              Formik.errors.tag && Formik.touched.tag
                ? 'border-red-600'
                : 'border-gray1'
            }
            focus:outline-none outline-none`}
        >
          <option value={'Minor'} defaultValue>
            Minor
          </option>
          <option value={'Moderate'}>Moderate</option>
          <option value={'Urgent'}>Urgent</option>
        </select>
        {Formik.errors.tag && Formik.touched.tag && (
          <p
            className="
          mt-[2px]
          text-red-500 
          text-[14px]
          italic
          "
          >
            {Formik.errors.tag}
          </p>
        )}
      </div>

      {/* Submit Button */}

      <Button
        type={'submit'}
        disabled={!Formik.isValid}
        click={Formik.handleSubmit}
      >
        Add Task
      </Button>
    </form>
  );
};

export default ProgressForm;
