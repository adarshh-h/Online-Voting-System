import React from "react";
import AdminNavbar from "./AdminNavbar";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import GetAllcandidates from "./AdminOperations/GetAllcandidates";
import AddCandidate from "./AdminOperations/AddCandidate";
import GetCount from "./AdminOperations/GetCount";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="getcandidates" element={<GetAllcandidates />} />
        <Route exact path="addcandidate" element={<AddCandidate />} />
        <Route exact path="getresult" element={<GetCount />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
