import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UserItems from '../components/UserItems';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserPlaces = (props) => {
  console.log(props)
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().id;
  console.log(userId)
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/Professor/${userId}`
        );
        console.log(responseData)
        setLoadedPlaces(responseData);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);


  return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
      <div className="center">
        <LoadingSpinner asOverlay />
      </div>
    )}
    {!isLoading && loadedPlaces && (
      <React.Fragment>

      <div class="ui segment" style={{
        direction:'rtl',
        margin:'3em'
      }}>
        <h2 class="ui right floated header">
          <h2 class="ui header" >
          <img src="https://semantic-ui.com/images/avatar2/large/patrick.png" class="ui circular image" />
          {loadedPlaces.name}{'  '} ({loadedPlaces.NationalCode})
          
        </h2>
        </h2>
        <div class="ui clearing divider" style={{
          marginBottom:'30px'
        }}>
          نام شرکت : {loadedPlaces.Company}
        </div>
        <div class="ui clearing divider" style={{
          borderTop:'none',
          marginBottom:'30px'

        }}>
          سمت : {loadedPlaces.Side}
        </div>
        <p>
        توضیحات:<br/>
        {
          loadedPlaces.description
        }

        </p>
      </div>
      </React.Fragment>


    )}
      
    </React.Fragment>
  );
};

export default UserPlaces;
