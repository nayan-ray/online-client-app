export const setStudentLocal =(user)=>{
    localStorage.setItem('student', JSON.stringify(user));
}

export const getStudentLocal = () => {
  const data = localStorage.getItem("student");
  return data ? JSON.parse(data) : null;
};

export const removeStudentLocal = ()=>{
    localStorage.removeItem('student');
}