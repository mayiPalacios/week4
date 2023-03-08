import React, { useState, useEffect } from "react";

const CardFeatures = () => {
  return (
    <div className="container_card--feature">
      {" "}
      <div className="card__feature">
        <img src="https://image.api.playstation.com/pr/bam-art/142/225/b8c9c8a9-ce45-4ec5-bdc0-0ee27ee951b9.jpg?w=440&thumb=false" />
      </div>
      <div className="card__feature">
        <img src="https://image.api.playstation.com/pr/bam-art/153/050/e103631d-7505-4ab3-9a26-b82429bf9c19.jpg?w=440&thumb=false" />
      </div>
      <div className="card__feature">
        <img src="https://image.api.playstation.com/pr/bam-art/154/375/26a077fb-625c-4ce8-9f3e-0708aba03f8b.jpg?w=440&thumb=false" />
      </div>{" "}
      <div className="card__feature">
        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png?w=440&thumb=false" />
      </div>
      <div className="card__feature card__center--space">
        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202302/2817/12a3360b2f1a4095365415ff32bb1438dac8dfd7fa66c9d5.png?w=440&thumb=false" />
      </div>
      <div className="card__feature">
        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202009/0123/bF1qmEL5RM6aMfL0oLcxRe8B.png?w=440&thumb=false" />
      </div>
    </div>
  );
};

export default CardFeatures;
