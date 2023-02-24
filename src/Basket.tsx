import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Basket$, IsOpenBasket$} from "./store";
import {Close, ShoppingBasket} from "@mui/icons-material";
import {isNumberObject} from "util/types";

export function Basket(){
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
                            <ShoppingBasket
                                onClick={()=>setIsOpen(false)}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Корзина" />
                    </ListItem>
                    <Divider />
                    {!order.length ? (
                        <ListItem>Корзина пуста!</ListItem>
                    ) : (
                        <>
                            {order.map((item) => (
                                <BasketItem key={item.name}  id={item?.id} name={item?.name} price={item?.price} />
                            ))}
                            <Divider />
                            <ListItem>
                                <Typography sx={{fontWeight: 700}}>
                                    Загальна сума:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item?.price;
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

function BasketItem({id, name, price}:{id:string|undefined,name:string|undefined,price: number|undefined}){
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
