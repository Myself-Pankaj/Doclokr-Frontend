import React, { Fragment } from "react";
import MyPublicDoc from "../Docs/MyPublicDoc";
import lock from "../../Assets/lock.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DocNameCard from "../Docs/DocNameCard";

const Home = () => {
  const { myPublicDocs } = useSelector((state) => state.mydoc);
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/addDocs");
  };
  return (
    <Fragment>
      <section className="count">
        <main>
          <div>
            <h1>Documents</h1>
            <p>Total Docs : {myPublicDocs.length}</p>
            <span>
              {myPublicDocs &&
                myPublicDocs.map((myPublicDoc) => (
                  <DocNameCard
                    key={myPublicDoc._id}
                    myPublicDoc={myPublicDoc}
                  />
                ))}
            </span>
          </div>
          <span>
            <h1>DocLocKr</h1>
            <div>
              <p>save your</p>
              <img src={lock} alt="lock"></img>
            </div>
            <p>document with us</p>

            <button onClick={navigator}>Click to save ....</button>
          </span>
        </main>
      </section>
      <MyPublicDoc />
    </Fragment>
  );
};

export default Home;
