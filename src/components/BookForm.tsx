
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseAuthor, chooseISBN_number, choosePage_number, chooseCover_type} from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[];
  onClose: () => void;
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseISBN_number(data.ISBN_number));
      dispatch(choosePage_number(data.page_number));
      dispatch(chooseCover_type(data.cover_type));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="author" />
        </div>
        <div>
          <label htmlFor="ISBN_number">ISBN Number</label>
          <Input {...register('ISBN_number')} name='ISBN_number' placeholder="ISBN_number" />
        </div>
        <div>
          <label htmlFor="page_number">Page Number</label>
          <Input {...register('page_number')} name='page_number' placeholder="page_number" />
        </div>
        <div>
          <label htmlFor="cover_type">Cover Type</label>
          <Input {...register('cover_type')} name='cover_type' placeholder="cover_type" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm