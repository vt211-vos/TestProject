import {Stack, Switch, Toolbar, Typography} from "@mui/material";
import {Section} from "./Section";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {active$, sectionIds$, sections$} from "./store";
import {startTransition, useEffect} from 'react';
import axios from "axios";


export function Assessment() {
    // const setSection = useSetRecoilState(sections$)
    // useEffect(()=>{
    //     axios.get('http://localhost:4444').then(function (response) {
    //         setSection(response.data)
    //
    //     })
    // },[])
    const sectionIds = useRecoilValue(sectionIds$);
    const setActive = useSetRecoilState(active$)
    return(
        <>

            <Toolbar>
                <Switch defaultChecked={false} onChange={(_, checked)=>setActive(checked)}/>
            </Toolbar>
            <Typography gutterBottom variant={'h5'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
            <Stack spacing={3}>
                {sectionIds.map((i)=>(
                    <Section key={i} id={i}/>
                ))}
            </Stack>
        </>
    )
}