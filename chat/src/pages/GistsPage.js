import { useEffect, useState } from "react";
import { getGists } from "../store/gists";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncGists,
  fetchSliceGists,
  searchGists,
  searchLocalGists,
  searchGistsError,
  searchGistsSuccess,
  searchAsyncGists,
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
  const {
    gists,
    pending,
    error,
    searchedLocalGists,
    searchedGists,
    searchPending,
    searchError,
  } = useSelector((state) => state.gists);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  useEffect(() => {
    if (!gists.length) {
      dispatch(fetchAsyncGists());
    }
  }, [dispatch, gists]);

  useEffect(() => {
    if (!searchedGists.length) {
      dispatch(searchAsyncGists());
    }
  }, [dispatch, searchedGists]);

  if (error) {
    return <h1>{error}</h1>;
  }

  const handleChange = (e) => {
    dispatch(searchAsyncGists(e.target.value));
    setName(e.target.value);
  };

  /*const handlePressInput = (name) => {
    if (name) {
      dispatch(searchAsyncGists(name));
    }
  };*/

  return (
    <>
      <div>
        <h1>Gists page</h1>
        <input type="text" onChange={() => dispatch(fetchAsyncGists())} />
        {pending && <h1>pending ...</h1>}
        {searchedLocalGists.length
          ? searchedLocalGists.map((gist, index) => {
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
      <hr />
      <div>
        <h1>Поиск гистов</h1>
        <input type="text" onBlur={handleChange} />
        {name ? (
          <h1>Сейчас выведены гисты пользователя {name}</h1>
        ) : (
          <h1>Введите логин пользователя</h1>
        )}
        {searchPending && <h1>pending ...</h1>}
        {searchedGists.length ? (
          searchedGists.map((gist, index) => {
            return (
              <div key={index}>
                <h2>{gist.url}</h2>
              </div>
            );
          })
        ) : (
          <h1>Совпадений не найдено</h1>
        )}
      </div>
    </>
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
