import express from "express";

const allStudents = (req, res) => {
  res.send("All Student");
};

const newStudents = (req, res) => {
  res.send("Sign in");
};

const updateStudents = (req, res) => {
  res.send("Update Students");
};

const deleteStudents = (req, res) => {
  res.send("Delete Students");
};

export { allStudents, newStudents, updateStudents, deleteStudents };
