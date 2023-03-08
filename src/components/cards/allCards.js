import React, { useState, useEffect } from "react";

const AllCards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await fetch(`http://localhost:3000/posts`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await request.json();

        setData(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(error);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container_all--card parent">
      <h1>Generals card</h1>
      <div className="container__all--items">
        {data &&
          data.map((item) => (
            <div className="card__all">
              <button>
                <div className="card__all--img">
                  <img alt="img__post" src={item.image} />
                </div>
                <span>{item.title}</span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCards;
