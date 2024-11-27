import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';

export default function EditEvent() {
  const params = useParams();
  const navigate = useNavigate();


  const {data, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
  });

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data)=>{
      const neewEvent = data.event;
      await queryClient.cancelQueries({queryKey:['events', params.id]});
      const previousEvent = queryClient.getQueryData(['events', params.id]);
      queryClient.setQueryData(['events', params.id], neewEvent);
      return {previousEvent};
    },
    onError: (error, data, context)=>{
      queryClient.setQueryData(['events', params.id], context.previousEvent);
    },
    onSettled: () => {
      // Refetch the event data after mutation is completed to ensure the page reflects the latest data.
      queryClient.invalidateQueries(['events', params.id]);
    },
  });

  
  
  
  
  let content = <p className='centre'>No content</p>;

  if (isError) {
    content = (
      <div className="center">
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || 'Failed to load event'}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </div>
    );
  }
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export function loader({params}){
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
  });
}

