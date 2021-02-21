import React, { useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import logo from "../../assets/img/logo.png";
import account from "../../assets/img/account.png";
import shopCar from "../../assets/img/shopping-cart.png";

const Header = () => {
  return (
    <header>
      <div className="header-container" color="white" maxWidth="lg">
        <Toolbar>
          <div className="logo">
            <img src={logo} alt="logo" height="40px" width="190px" />
          </div>
          <div className="search-field">
            <TextField
              className="search-input"
              fullWidth
              id="input-search-field"
              label="O que está procurando?"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="account-car-container">
            <img src={account} alt="account" />
            &nbsp;&nbsp;
            <p>Minha Conta</p>
            &nbsp;&nbsp;
            <IconButton
              aria-label="show car items"
              id="mostrar-modal"
              color="inherit"
            >
              <Badge badgeContent={5} color="secondary">
                <img src={shopCar} alt="car"></img>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    </header>
  );
};

export default Header;
