import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import TextPage from "./pages/Text";
import List from "./pages/List";
import Filter from "./pages/Filter";
import { Routes, Route, Link } from "react-router-dom";
import { Text, UnorderedList, ListItem, Box, Divider, Stack } from "@chakra-ui/react";
import RegisterPage from "./pages/RegisterPage";
import RegisterT from "./pages/RegisterT";
import ReduxCounter from "./pages/ReduxCounter";
import ReduxStudent from "./pages/ReduxStudent";
import { useSelector } from "react-redux";
import Student from "./pages/Student";

function App() {
  const counterSelector = useSelector((state) => state.counter)
  const studentSelector = useSelector((state) => state.student)

  // Data.map ====================================================
  // const renderProfiles = () => {
  //   let result = data.map((val) => {
  //     return (
  //       <Profile
  //         fullName={val.fullName}
  //         position={val.position}
  //         age={val.age}
  //       />
  //     )
  //   })

  //   return result
  // }
  // Data.map ====================================================


  return (
    <Box backgroundColor={"lightgrey"}>
      <Text fontSize="3xl" fontWeight={"bold"} color={"blue.600"}>
      List Sementara Untuk Pelajaran
      </Text>
      <UnorderedList>
        <ListItem>
          <Link to="/home"> Home </Link>
        </ListItem>
        <ListItem>
          <Link to="/about"> About </Link>
        </ListItem>
        <ListItem>
          <Link to="/counter"> Counter </Link>
        </ListItem>
        <ListItem>
          <Link to="/text"> Text </Link>
        </ListItem>
        <ListItem>
          <Link to="/list"> list </Link>
        </ListItem>
        <ListItem>
          <Link to="/filter"> Filter </Link>
        </ListItem>
        <ListItem>
          <Link to="/registerpage"> Register Page </Link>
        </ListItem>
        <ListItem>
          <Link to="/registerT"> Register dari Kak Theo </Link>
        </ListItem>
        <ListItem>
          <Link to="/reduxcounter"> Redux Counter </Link>
        </ListItem>
        <ListItem>
          <Link to="/reduxstudent"> Redux Student Exercise </Link>
        </ListItem>
        <ListItem>
          <Link to="/student"> Redux Student Hasil Kak Theo </Link>
        </ListItem>
      </UnorderedList>
        <Divider orientation="horizontal" colorScheme="grey" variant="dashed" bgColor={"red"}/> <br />
        <Text>Isi dari page:</Text>
        <Text>Counter: {counterSelector.value}</Text>
        <Box minHeight="56px" backgroundColor="teal" padding="4">
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Total Students: {studentSelector.data.length}
          </Text>
          </Box>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Text" element={<TextPage />} />
        <Route path="/List" element={<List />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/registerT" element={<RegisterT />} />
        <Route path="/reduxcounter" element={<ReduxCounter />} />
        <Route path="/reduxstudent" element={<ReduxStudent />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Box>
  );
}

export default App ;
