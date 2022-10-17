import { Route, Router, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/student" element={<StudentPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
