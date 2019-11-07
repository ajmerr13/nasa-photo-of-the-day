import React from "react";
import { Spinner } from 'reactstrap';
import { Alert } from 'reactstrap';


const Date = (props) => {
  return (
    <div>
      <Alert color= "primary">
      <Spinner style={{ width: '1.5rem', height: '1.5rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '2rem', height: '2rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '3rem', height: '3rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '4rem', height: '4rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '4rem', height: '4rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '3rem', height: '3rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '2rem', height: '2rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '1.5rem', height: '1.5rem'}} type="grow" color="dark" />
      <h2>{props.date}</h2>
      <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '4rem', height: '4rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '3rem', height: '3rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '2rem', height: '2rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '1.5rem', height: '1.5rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '2rem', height: '2rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '3rem', height: '3rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '4rem', height: '4rem'}} type="grow" color="dark" />
      <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color="dark" />
      </Alert>
    </div>
  );
}


export default Date;
