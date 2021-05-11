import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router';
import sprite from '../../../assets/icons/sprite.svg';
import { getProjectRequest } from '../../../redux/projects/projectActions';
import {
  changeTitleProject,
  getProjectsOperation,
} from '../../../redux/projects/projectOperations';
import { getProjects } from '../../../redux/projects/projectSelectors';
import { changeTitleSprint } from '../../../redux/sprints/sprintOperations';
import { getProjectTitle } from '../../../redux/sprints/sprintSelectors';
import './TitleProjectForm.scss';

const TitleProjectForm = ({ projectId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsOperation());
  }, [dispatch]);

  // const location = useLocation()
  // const projectTitle = location.state.title
  const allProjects = useSelector(getProjects);
  console.log(allProjects);
  const thisProject = allProjects.find(project => project._id === projectId);
  console.log(thisProject);
  const title = thisProject?.title || '';
  console.log(title);

  const [newTitle, setNewTitle] = useState('');
  const [toogleInput, setToogleChange] = useState(true);
  // const projectTitle = useSelector(getProjectTitle)
  // console.log(location.state.title)
  // console.log(projectId)

  // useEffect(() => {
  //     console.log("newTitle=====",newTitle)
  //     console.log(location.state.title)
  //     console.log("projectTitle======", projectTitle)
  //     setNewTitle(newTitle)
  // })

  const changeTitle = () => {
    !toogleInput &&
      dispatch(changeTitleProject({ id: projectId, title: newTitle }));
    toogleInputChange();
    // resetName()
  };

  const handleChangeTitle = e => {
    setNewTitle(e.target.value);
  };

  const toogleInputChange = () => {
    setToogleChange(!toogleInput);
  };

  // const resetName = () => {
  //     setNewTitle("")
  // }
  // useEffect(() => {
  //         const changeTitle = () => {
  //     dispatch(changeTitleProject({id: projectId, title:"test"}))
  // }
  // }, [projectTitle])

  // console.log(projectTitle)
  return (
    <>
      <div>
        <h2 className="project__details-title">
          {toogleInput ? (
            newTitle || title
          ) : (
            <input
              className="project__details-title_input"
              type="text"
              name={title}
              value={newTitle || title}
              required
              onChange={handleChangeTitle}
              placeholder="Введите новое название"
            />
          )}
          <button
            className="project__details-edit__button project__details-edit "
            type="submit"
            aria-label="edit button"
            onClick={changeTitle}
          >
            <svg className="project__details-edit__icon">
              <use href={sprite + '#edit'} />
            </svg>
          </button>
        </h2>
      </div>
    </>
  );
};

export default TitleProjectForm;
