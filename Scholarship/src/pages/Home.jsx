import React from 'react';
import { Form } from '../components/form/Form';
export const Home = () => {
  return (
    <div>
          {/* <Form userType={"officerLevel1"} /> */}
          {/* <Form userType={"officerLevel2"} /> */}
          <Form userType={"student"} />
    </div>
  )
}
