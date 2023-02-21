import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {active$, isButtonActive$, question$, questionScore$} from "./store";
import {Box, Button, ButtonGroup, Stack, Typography} from "@mui/material";

interface Props{
    id: string,
    idSection: string
}
const scale = [1,2,3,4,5]

const AppButton = ({id,value,idSection}:{id:string, value: number, idSection: string})=>{
    const setScore = useSetRecoilState(questionScore$([id, idSection]))
    const isButtonActive = useRecoilValue(isButtonActive$([id, value, idSection]))
    const active = useRecoilValue(active$)
    return(
        <Button
            disabled={active}
            variant={isButtonActive ? "contained": undefined}
            onClick={()=> setScore(value)}>{value}</Button>
    )
}


export function Question(props: Props) {
    const question = useRecoilValue(question$([props.id, props.idSection]))

     return(
         <Stack direction="row" spacing={3} alignItems={"center"}>
             <Box flex={1} width={0} minWidth={0}>
                 <Typography variant={"body1"} noWrap>
                     <b>{question?.name}</b>
                 </Typography>
             </Box>
             <ButtonGroup sx={{ flex: 3, height: 60}} fullWidth>
                 {scale.map(i => (
                    <AppButton key={i} id={props.id} value={i} idSection={props.idSection}/>
                 ))}
             </ButtonGroup>
         </Stack>
     )
}