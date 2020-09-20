import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenav_items';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from 'i18next';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: '#ffff00 !important',
    borderColor: '#ffff00 !important'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "green !important",
        border: "4px double red"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red !important",
        border: "4px double red"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "purple !important",
        border: "4px double red"
      },
      "& .MuiOutlinedInput-input": {
        color: "white !important"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "white !important"
      },
      border: "1px solid #404040"
    },
  option: {
    color: '#000000'
  }
}));

const Nav = (props) => {

  const { t } = useTranslation();

  const handleClickEn1 = (event) => {
    console.log('Test')
  }
  function handleClickEn(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
  }

  const classes = useStyles();
  const [state, setState] = React.useState({
    lang: localStorage.getItem('genomusLang'),
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;

    console.log('TEST')
    console.log(event.currentTarget.value)
    console.log(event.target)
    console.log(state)
    i18n.changeLanguage(event.currentTarget.value);
    localStorage.setItem('genomusLang', event.currentTarget.value);
    window.location.reload()

    setState({
      ...state,
      // [name]: event.target.value,
      [name]: event.currentTarget.value,
    });
  };

    return (
       <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background:'#242424',
                maxWidth:'220px'
            }}
       >
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              native
              value={state.lang}
              onChange={handleChange}
              inputProps={{
                name: 'lang',
                id: 'outlined-age-native-simple',
              }}
              className={classes.select}
            >
              <option 
                className={classes.option}
                value={'en'}
                onClick={() => handleClickEn()}
              >English</option>
              <option 
                className={classes.option}
                value={'ru'}
                onClick={handleClickEn}
              >Русский</option>
            </Select>
          </FormControl>
           <SidenavItems/>
        </SideNav>
    );
};

//export default Nav;

let mapStateToProps = state => {
  return {
    user: state.user.role
  }
}

export default connect(mapStateToProps)(Nav)