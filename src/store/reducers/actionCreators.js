import axios from 'axios';
import { projectSlice } from './projectSlice';

export const fetchProjects = () => async (dispatch) => {
  try {
    dispatch(projectSlice.actions.projectFetching());
    const responce = await axios.get('https://sunnyapril.ru/projects.json');
    dispatch(projectSlice.actions.projectFetchingSuccess(responce.data));
  } catch (error) {
    dispatch(projectSlice.actions.projectFetchingError('Ошибка запроса'));
  }
};
