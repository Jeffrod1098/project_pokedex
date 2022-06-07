import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

const PkmnSearchPage = () => {
    return(
            <div>
                <label>
                    Search A Pokemon
                    <input type='text'></input>
                </label>
                <button type="submit"></button>
            </div>

    )
}

export default PkmnSearchPage