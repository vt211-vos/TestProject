import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Basket$, checkInclude$, Good$} from "./store";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useEffect} from "react";

function ButtonBuy({id}:{id:string}){
    const good = useRecoilValue(Good$(id))
    const setBasket = useSetRecoilState(Basket$)

    return(<Button
        variant="text"
        onClick={() =>{

            setBasket((prev)=>{
                if((prev.find(i=>i.id===id))===undefined){
                    return [...prev, {
                        id: good.id,
                        name: good.name,
                        price: good.price,
                    }]
                }
                return prev

            })

        }

        }
    >
        Купити
    </Button>)
}

 export function GoodsItem({id}:{id:string}) {
     const good = useRecoilValue(Good$(id))
    return(
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}>
                <CardMedia
                    image={good.poster}
                    component="img"
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {good?.name}
                    </Typography>
                    <Typography variant="body1">Цена: {good?.price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <ButtonBuy id={id}/>
                </CardActions>
            </Card>
        </Grid>
    )
}

