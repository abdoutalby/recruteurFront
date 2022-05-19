import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAnnonceByrec, reset } from "../features/annonce/annonceSlice";
import AnnonceCard from "./AnnonceCard";
import NavBar from "./NavBar";

function Home() {
  const { user } = useSelector((state) => state.auth);

  const { annonces, isLoading } = useSelector((state) => state.annonces);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getAnnonceByrec());
    dispatch(reset());
  }, [dispatch]);
  console.log(annonces, "annonces in the com");
  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='section-title text-center mb-4 pb-2'>
              <h4 className='title mb-4'>Our Annonces</h4>

              <p className='text-muted para-desc mx-auto mb-0'>
                Join us and see what's next
              </p>
            </div>
          </div>
        </div>{" "}
        <div>
          <button type='submit    ' className='btn btn-primary btn-lg' onClick={()=>{
            navigate('/AddAnnonce')
          }}>
            Add new{" "}
          </button>
        </div>
        <div className='row'>
          {annonces.length > 0 ? (
            annonces.map((an) => <AnnonceCard key={an._id} annonce={an} />)
          ) : (
            <h1>no annonces yet</h1>
          )}
        </div>
        {/*end col*/}
      </div>
    </>
  );
}

export default Home;
