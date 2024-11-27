import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { fetchEvent, updateEvent } from '../../util/http.js';

export default function EditEvent() {
  const params = useParams();
  const navigate = useNavigate();


  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
  });

  const {mutate} = useMutation({
    mutationFn: updateEvent,

  });

  
  
  
  
  let content = <p className='centre'>No content</p>;
  if (isLoading) {
    content = <div className='centre'><LoadingIndicator/></div>;
  }
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
