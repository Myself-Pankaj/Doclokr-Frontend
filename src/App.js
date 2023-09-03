import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "protected-route-react";
import Login from "./component/Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./component/Redux/actions/userAction";
import toast, { Toaster } from "react-hot-toast";
import {
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
} from "./component/Redux/constants/userConstant";

//import sass
import "./scss/app.scss";
import "./scss/home.scss";
import "./scss/login.scss";
import "./scss/start.scss";
import "./scss/adddoc.scss";
import "./scss/updaterole.scss";
import "./scss/account.scss";
import "./scss/docs.scss";
import "./scss/footer.scss";
import "./scss/project.scss";
import "./scss/loader.scss";
import "./scss/notepad.scss";
import "./scss/contact.scss";
import "./scss/terms.scss";
import "./scss/about.scss";

//routes
// import Begin from "./component/layouts/Begin";
import UpdateRole from "./component/Auth/UpdateRole";
import AddDocs from "./component/Docs/AddDocs";
import Home from "./component/layouts/Home";
import Project from "./component/Project/Project.jsx";
import DocDetail from "./component/Docs/DocDetail";
import AddProject from "./component/Project/AddProject";
import AddInfo from "./component/Project/AddInfo";
import UpdateProjectName from "./component/Project/UpdateProjectName";
import UpdateProject from "./component/Project/UpdateProject";
import AddTextFile from "./component/Notepad/AddTextFile";
import TextFile from "./component/Notepad/TextFile";
import Notepad from "./component/Notepad/Notepad";
import Contact from "./component/Contact/Contact";
import TermsAndcondition from "./component/Terms&condition/Terms&condition";
import About from "./component/About/About";
import Header from "./component/layouts/Header";
import Account from "./component/Auth/Account";
import Start from "./component/layouts/Start";
import Error from "./component/layouts/Error";

//Telegram

const telegram = window.Telegram.WebApp;

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: CLEAR_MESSAGE,
      });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    telegram.ready();
  });

  const { myProject } = useSelector((state) => state.project);

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={isAuthenticated ? <Home/> : <Start />  } /> */}
        <Route path="/" element={<Start />} />

        {/* <Route path="/login" element={isAuthenticated ? <Home/> : <Login />} /> */}

        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/account"
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/type/:id" element={<UpdateRole />} />
          <Route path="/updateProject/:id" element={<UpdateProjectName />} />
          <Route path="/text/:id" element={<Notepad />} />
          <Route path="/manage/:id" element={<UpdateProject />} />
          <Route path="/addDocs" element={<AddDocs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doc/:id" element={<DocDetail />} />
          <Route
            path="/addproject"
            element={myProject.length === 1 ? <Account /> : <AddProject />}
          />
          <Route path="/addinfo" element={<AddInfo />} />
          <Route path="/project" element={<Project />} />
          <Route path="/notes" element={<AddTextFile />} />
          <Route path="/alltxtfiles" element={<TextFile />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/term_&_condition" element={<TermsAndcondition />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
      <Toaster />
    </Router>
  );
}

export default App;
