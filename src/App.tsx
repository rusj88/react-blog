import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";

function App() {
  return (
    <div className="pt-16 bg-slate-300 min-h-screen">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/success" element={<Success />} />
        {/* 
    
    <Route path="/profile" element={<Profile />} />
    <Route path="/new-article" element={userToken ? <CreateArticle/> : <SignIn />} />
    <Route path="/articles/:slug/edit" element={<EditArticle />} />
     */}
      </Routes>
    </div>
  );
}

export default App;
