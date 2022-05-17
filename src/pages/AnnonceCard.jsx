import React from "react";
import { getAnnonceByrec, reset } from "../features/annonce/annonceSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function AnnonceCard({annonce}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { annonces, isError } = useSelector((state) => state.annonces);

  useEffect(() => {
    if (isError) {
    }

    if (!user) {
      navigate("/login");
    } 

    return () => {
      dispatch(reset());
    };
  }, [navigate, dispatch]);
  return (
    <>
      <div className='col-lg-4 col-md-6 col-12 mt-4 pt-2'>
        <div className='card service-wrapper rounded border-0 shadow p-4'>
          <div className='icon text-center text-custom h1 shadow rounded bg-white'>
            <span className='uim-svg' style={{}}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z'
                  opacity='.5'
                />
                <path
                  fill='currentColor'
                  d='M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z'
                />
              </svg>
            </span>
          </div>
          <div className='content mt-4'>
            <h5 className='title'></h5>
            <p className='text-muted mt-3 mb-0'>Specialite: {annonce.specialite}</p>
            <p className='text-muted mt-3 mb-0'></p>
            <p className='text-muted mt-3 mb-0'>DT</p>

            <div className='mt-3'>
              <span className='text-custom '>
                Postuler <i className='mdi mdi-chevron-right' />
              </span>
            </div>
          </div>
          <div className='big-icon h1 text-custom'>
            <span className='uim-svg' style={{}}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z'
                  opacity='.5'
                />
                <path
                  fill='currentColor'
                  d='M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/*end col*/}
    </>
  );
}

export default AnnonceCard;
