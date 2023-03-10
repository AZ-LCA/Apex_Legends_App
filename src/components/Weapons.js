import axios from "axios"
import React, { Component } from "react"
import apiUrl from "../apiConfig"
import WeaponSimpleView from "./WeaponSimpleView"

class Weapons extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const weaponsList = this.props.weapons.map((weapon, index) => {
            return <WeaponSimpleView isFavorite={this.props.isFavorite(weapon._id)} onFavorite={this.props.onFavorite} key={index} weapon={weapon} />;
        })
        return(
            <div className='page'>
            <h1 className={'page-header'}> Weapons </h1>
            <div className={'grid'}>
            {weaponsList}
            </div>
            
            </div>
        )}
    }

    export default Weapons;