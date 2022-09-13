import { useEffect, useState } from "react";
import { getGists } from "../store/gists";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncGists,
  fetchSliceGists,
  searchGists,
} from "../store/gists/GistsSliceReducer";
import { gistsAPI } from "../store/gists/GistsQuery";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

/*export const GistsPage = () => {
  const [page, setPage] = useState(1);
  const {
    data: gists,
    pending,
    error,
    refetch,
  } = gistsAPI.useFetchAllGistsQuery(page);
  console.log("gists: ", gists);

  const handleClick = (btn) => {
    setPage(btn);
    refetch();
  };

  return (
    <div>
      <h1>Gists page</h1>
      {pending && <h1>Loading...</h1>}
      {error && <h1>{error.data.message}</h1>}
      {gists &&
        gists.map((gist, index) => {
          return (
            <div key={index}>
              <h2>{gist.url}</h2>
            </div>
          );
        })}
      <hr />
      {buttons.map((btn, index) => {
        return (
          <button key={index} onClick={() => setPage(btn)}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};*/

export const GistsPage = () => {
  const { gists, pending, error, searchedGists } = useSelector(
    (state) => state.gists
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gists.length) {
      dispatch(fetchAsyncGists());
    }
  }, [dispatch, gists]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Gists page</h1>
      <input
        type="text"
        onChange={(e) => dispatch(searchGists(e.target.value))}
      />
      {pending && <h1>pending ...</h1>}
      {searchedGists.length
        ? searchedGists.map((gist, index) => {
            return (
              <div key={index}>
                <h2>{gist.url}</h2>
              </div>
            );
          })
        : gists.map((gist, index) => {
            return (
              <div key={index}>
                <h2>{gist.url}</h2>
              </div>
            );
          })}
      <hr />
      {buttons.map((btn, index) => {
        return (
          <button key={index} onClick={() => dispatch(fetchAsyncGists(btn))}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};

/*export const GistsPage = () => {
  const { gists, pending, error } = useSelector((state) => state.gists);
  const dispatch = useDispatch();
  /!*const [gists, setGists] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  async function fetchData(page) {
    try {
      setPending(true);
      const data = await getGists(page);

      setGists(data);
    } catch (e) {
      setError("Error");
    } finally {
      setPending(false);
    }
  }*!/

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);
  
    useEffect(() => {
    if (!gists.length) {
      dispatch(searchGists());
    }
  }, [dispatch, gists]);

  if (error) {
    return <h1>Error ...</h1>;
  }

  return (
    <div>
      <h1>Gists page</h1>
      {pending ? (
        <h1>pending ...</h1>
      ) : (
        gists.map((gist, index) => {
          return (
            <div key={index}>
              <h2>{gist.url}</h2>
            </div>
          );
        })
      )}
      <hr />
      {buttons.map((btn, index) => {
        return (
          <button key={index} onClick={() => dispatch(getGists(btn))}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};*/
