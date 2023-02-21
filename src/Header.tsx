import {AppBar, Badge, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {IsOpenBasket$} from "./store";



export function Header() {
    const openBasket = useSetRecoilState(IsOpenBasket$)
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>
                <Button color="inherit"><Link style={{color: "white", textDecoration: "none"}} to={"/shop"}>Shop</Link></Button>
                {/*</Link>*/}
                <IconButton
                    color="inherit"
                    onClick={()=>openBasket(true)}
                >
                    <Badge
                        color="secondary"
                        // badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}