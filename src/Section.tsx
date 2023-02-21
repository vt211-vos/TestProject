import {Paper, Stack, Typography} from "@mui/material";
import {useRecoilValue} from "recoil";
import {section$} from "./store";
import {Question} from "./Question";

interface Props{
    id: string
}

export function Section(props: Props) {
    const section = useRecoilValue(section$(props.id))
    return(
        <Paper sx={{p:3}}>
            <Typography variant={"h5"}>
                Section{props.id}
            </Typography>
            <Stack spacing={2}>
                {section?.questions.map(i => (
                    <Question idSection={props.id} id={i.id} key={i.id}/>
                ))}
            </Stack>
        </Paper>
    )
}
