import React, { createContext, useEffect, useState } from 'react'
import { getStudentLocal, removeStudentLocal } from '../helper/auth';

export const AuthContext = createContext();

const AuthenContex = ({children}) => {
   const [student, setStudent] = useState(null);
   const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    const data = getStudentLocal();
    setStudent(data);
    setLoading(false);
  }, []);

  const login = (studentData) => {
    setStudent(studentData);
  };

  const logout = () => {
    removeStudentLocal(); // change key if yours is different
    setStudent(null);
  };

  return (
    <AuthContext.Provider value={{ student, login, logout, loading, setStudent }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthenContex