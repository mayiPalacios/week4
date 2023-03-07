import React from "react";

const Comments = () => {
  return (
    <section className="container__section--comments">
      <div className="container__title--comments">
        <h2 className="lineSpecialties">COMMENTS</h2>
      </div>
      <div className="container__value--comments">
        <div>
          <h6>by Witch Murder1</h6>
          <p>
            This sounded nonsense to Alice, so she said nothing, but set off at
            once toward the Red Queen. To her surprise, she lost sight of her in
            a moment, and found herself walking in at the front-door again.
          </p>
        </div>
        <div>
          <h6>by Witch Murder2</h6>
          <p>
            This sounded nonsense to Alice, so she said nothing, but set off at
            once toward the Red Queen. To her surprise, she lost sight of her in
            a moment, and found herself walking in at the front-door again.
          </p>
        </div>
        <div>
          <h6>by Witch Murder3</h6>
          <p>
            This sounded nonsense to Alice, so she said nothing, but set off at
            once toward the Red Queen. To her surprise, she lost sight of her in
            a moment, and found herself walking in at the front-door again.
          </p>
        </div>
        <div>
          <h6>by Witch Murder4</h6>
          <p>
            This sounded nonsense to Alice, so she said nothing, but set off at
            once toward the Red Queen. To her surprise, she lost sight of her in
            a moment, and found herself walking in at the front-door again.
          </p>
        </div>
      </div>
      <div className="container__form--comments">
        <div className="container__title--comments">
          <h2 className="lineSpecialties">LEAVE A REPLY</h2>
        </div>
        <div className="div__form--comments">
          <textarea placeholder="Comment *"></textarea>
          <button>Post comment</button>
        </div>
      </div>
    </section>
  );
};

export default Comments;
