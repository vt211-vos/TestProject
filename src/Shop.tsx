import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Basket$, GoodIds$, Goods$, IsOpenBasket$} from "./store";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider,
    Drawer,
    Grid, IconButton,
    List, ListItem, ListItemIcon, ListItemText,
    Typography
} from "@mui/material";
import {Close, ShoppingBasket} from "@mui/icons-material";
import {Basket} from "./Basket";
import {GoodsItem} from "./GoodsItem";
import {useEffect} from "react";




export function Shop() {
    const goodIds = useRecoilValue(GoodIds$)
    return(
        <>

            <Grid sx={{mt: 8}} container spacing={2}>
                {goodIds.map((item) => (
                    <GoodsItem key={item} id={item}/>
                ))}
            </Grid>
            <Basket

            />
        </>

    )
}