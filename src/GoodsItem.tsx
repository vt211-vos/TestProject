import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Basket$, checkInclude$, Good$} from "./store";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useEffect} from "react";

function ButtonBuy({id}:{id:string}){
    const good = useRecoilValue(Good$(id))
    const setBasket = useSetRecoilState(Basket$)
    const checkInclude = useRecoilValue(checkInclude$(id))

    return(<Button
        variant="text"
        onClick={() =>{
            checkInclude &&
            setBasket(prev => prev.concat(
                {
                    id: good.id,
                    name: good.name,
                    price: good.price,
                }
            ))

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

