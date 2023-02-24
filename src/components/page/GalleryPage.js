import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../assets/scss/gallery.scss';
import { fetchProjects } from '../../store/reducers/actionCreators';
import LoaderPencil from '../elements/loaderPencil/LoaderPencil';
import ProjectItem from '../elements/projectItem/ProjectItem';

function GalleryPage() {
  const { languageRU } = useSelector((state) => state.lang);
  const { projects, isLoading, error } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <>
      <div className="gallery">
        <div className="gallery__container">
          <div className="gallery__title title-block">
            {languageRU ? 'Галеря проектов' : 'Project Gallery'}
          </div>
          <div className="gallery__suptitle suptitle-block">
            {languageRU
              ? 'Здесь я представил многие из моих работ.'
              : 'Here I have presented many of my works.'}
          </div>
          {error && <div>{error}</div>}
          {isLoading && <LoaderPencil />}
          {projects.length > 0 && (
            <div className="gallery__media-block media-block">
              {projects.map((p, i) => (
                <ProjectItem key={`${p.title.ru}_${i}`} item={p} languageRU={languageRU} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
