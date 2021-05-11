import React, { useEffect, useState } from 'react';
import './AddSprintData.scss';

const AddSprintData = ({ cb, projectId }) => {
  const [data, setData] = useState({
    title: '',
    endDate: '2021-12-31',
    duration: '1',
  });
  const { title, endDate, duration } = data;

  useEffect(() => {
    // console.log(projectId)
    cb({ title, endDate, duration, projectId });
  }, [title, endDate, duration, projectId]);

  const handleChange = e => {
    const { name, value } = e.target;

    if ([name] === 'duration') {
      console.log('da');
    }
    setData(prev => ({ ...prev, [name]: value }));
  };
  // const handleSubmit = e => {
  //     // e.preventDefault();
  //     submitSprint({ title, endDate, duration, projectId })
  //     // reset();
  // }

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="add-sprint-data__form">
        <input
          className="add-sprint-data__input"
          placeholder=" "
          type="text"
          name="title"
          id="name"
          value={title}
          required
          onChange={handleChange}
        />
        <label className="add-sprint-data__label" htmlFor="name">
          Назва спринта
        </label>
      </div>
      <div className="add-sprint-data__group">
        <div className="add-sprint-data__form add-sprint-data__form-end-date">
          <input
            className="add-sprint-data__input add-sprint-data_end-date"
            placeholder=" "
            type="date"
            name="endDate"
            value={endDate}
            required
            onChange={handleChange}
          />
          <label className="add-sprint-data__label">Дата закінчення</label>
        </div>
        <div className="add-sprint-data__form">
          <input
            className="add-sprint-data__input add-sprint-data_duration"
            placeholder=" "
            type="text"
            name="duration"
            value={duration}
            required
            onChange={handleChange}
          />
          <label className="add-sprint-data__label">Тривалість</label>
        </div>
      </div>
    </>
  );
};

export default AddSprintData;
