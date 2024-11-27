import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation  } from '@tanstack/react-query';
import { useState } from 'react';

import Header from '../Header.jsx';
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Model from '../UI/Modal.jsx';

export default function EventDetails() {

  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const {data, isLoading, isError, error } = useQuery({
    queryKey: ['event', params.id],
    queryFn: ({signal})=> fetchEvent({signal,id:params.id}),
  })

  const {mutate, isPending: isDeletionPending, isError: isDeletionError, error:deletionError} = useMutation({
    mutationFn : deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey:['events'], refetchType: 'none'});
      navigate('/events');
    }
  })

  function handleStartDelete(){
    setIsDeleting(true);
  
  }
  function handlestopDelete(){
    setIsDeleting(false);
  }

  function handleDelete(){
    mutate({id:params.id});
  }

  let content = <p>no content</p>
  if(isLoading){
    content = <div id='events-details-content' className='center'>
                  <p>Loading...</p> 
              </div>  
  }
  if(isError){
    content = <div id='events-details-content' className='center'>
                  <ErrorBlock title='Failed to load event' message={error.info?.message || 'Failed to load event'} />
              </div>  
  }
  if(data){

    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    content = <>
                <header>
                  <h1>{data.title}</h1>
                  <nav>
                    <button onClick={handleStartDelete}>Delete</button>
                    <Link to="edit">Edit</Link>
                  </nav>
                </header>
                <div id="event-details-content">
                  <img src={"http://localhost:3000/"+data.image} alt="" />
                  <div id="event-details-info">
                    <div>
                      <p id="event-details-location">{data.location}</p>
                      <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate +' @ '+data.time}</time>
                    </div>
                    <p id="event-details-description">{data.description}</p>
                  </div>
                </div>
              </>
  }
  
  return (
    <>
      {isDeleting &&  
        <Model>
          <h2>Are you sure you want to delete this event?</h2>
          <p>This action cannot be undone.</p>
          {isDeletionPending && <p>Deleting Please Wait...</p>}
          {!isDeletionPending &&
            <div className='form-actions'>
              <button className='button' onClick={handleDelete}>Delete</button>
              <button className='button-text' onClick={handlestopDelete}>Cancel</button>
            </div>}
          {isDeletionError && <ErrorBlock title='Failed to delete event' message={deletionError.info?.message || 'Failed to delete event'} />}
        </Model>}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
