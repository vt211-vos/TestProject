import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Basket$, Goods$, IsOpenBasket$} from "./store";
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


function BasketItem({id, name, price}:{id:string,name:string,price: number}){
    const setBasket = useSetRecoilState(Basket$)
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}грн
            </Typography>
            <IconButton
                onClick={()=>{
                    setBasket( prev => prev.filter(i=>i.id !== id))
                }}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
}
function GoodsItem({poster, name, price, id}:{poster: string, name: string, price: number,id: string}) {
    const [Basket, setBasket] = useRecoilState(Basket$)
    return(
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}>
                <CardMedia
                    image={poster}
                    component="img"
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() =>{
                            const check = Basket.find(i =>i.id === id)
                            check === undefined ?
                            setBasket(prev=>prev.concat(
                                {
                                    id: id,
                                    name: name,
                                    price: price,
                                }
                            )):
                                console.log("Товар уже в корзині")
                        }

                        }
                    >
                        Купити
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
function Basket(){
    const order = useRecoilValue(Basket$)
    const [isOpen, setIsOpen] = useRecoilState(IsOpenBasket$)
    return(
        <>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={()=>setIsOpen(false)}
            >
                <List sx={{width: '400px'}}>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingBasket />
                        </ListItemIcon>
                        <ListItemText primary="Корзина" />
                    </ListItem>
                    <Divider />
                    {!order.length ? (
                        <ListItem>Корзина пуста!</ListItem>
                    ) : (
                        <>
                            {order.map((item) => (
                                <BasketItem key={item.name}  {...item} />
                            ))}
                            <Divider />
                            <ListItem>
                                <Typography sx={{fontWeight: 700}}>
                                    Загальна сума:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item.price;
                                    }, 0)}{' '}
                                    гривень
                                    .
                                </Typography>
                            </ListItem>
                        </>
                    )}

                </List>
            </Drawer></>
    )
}


export function Shop() {
    const goods = useRecoilValue(Goods$)
    return(
        <>

            <Grid sx={{mt: 1}} container spacing={2}>
                {goods.map((item) => (
                    <GoodsItem key={item.id} id={item.id} name={item.name} poster={item.poster} price={item.price}/>
                ))}
            </Grid>
            <Basket

            />
        </>

    )
}