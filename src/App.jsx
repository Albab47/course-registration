import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Header";

function App() {
  const [carts, setCarts] = useState([]);

  const handleCourseSelection = (course) => {
    const isExist = carts.find(c => c.id === course.id);
    const totalCredit = carts.reduce((acc, crr) => acc + crr.credit, 0);
    console.log(totalCredit);
    if (!isExist && totalCredit < 20) {
      const newCart = [...carts, course];
      setCarts(newCart);
      toast.success("Course Addded");
    } else if (totalCredit > 21) {
      toast.error('Only 20 credit allowed')
    } else {
      toast.warn('Already selected')
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row gap-6 p-5 container mx-auto">
        <Courses onCourseSelection={handleCourseSelection} />
        <Cart carts={carts} />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
