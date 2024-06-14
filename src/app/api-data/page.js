'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiData } from '../reduxToolkit/slice';

const APIData = () => {
    const dispatch = useDispatch();
    const employeesAPIData = useSelector((state) => state.employeeData.employeesAPIData)
    const isLoading = useSelector((state) => state.employeeData.isLoading)
    const error = useSelector((state) => state.employeeData.error)

    useEffect(() => {
        dispatch(apiData());
    }, [])

  return (
    <>
     <h2>API Data</h2>
     {isLoading && <p>Loading......</p>}
     {error && <p>Error {error}</p>}
     {
        employeesAPIData.length > 0 ? employeesAPIData.map((item) => (
            <h3 key={item.id}>{item.name}</h3>
        )) : !isLoading && <p>No Data Available</p>
     }
    </>
  );
}

export default APIData;
