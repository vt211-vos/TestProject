
import {Container, Stack, Switch, Toolbar, Typography} from "@mui/material";
import {Header} from "./Header";
import {Route, Routes} from "react-router-dom";
import {Assessment} from "./Assessment";
import {Shop} from "./Shop";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {active$, sectionIds$} from "./store";



function App() {

    return (
        <>
            <Header/>
            <Container maxWidth="md">
                <Routes>
                    <Route path='/' element={<Assessment/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                </Routes>
            </Container>
        </>


    )
}

export default App
