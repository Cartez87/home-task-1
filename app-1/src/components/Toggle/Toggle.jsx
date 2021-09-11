import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";

import './Toggle.css';

export default class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [
                { option: "Crime" },
                { option: "Documentary" },
                { option: "Horror" },
                { option: "Comedy" },
              ],
              selectedOptions: [
                { option: "Crime" },
                { option: "Comedy" }
            ]
        }
        
        this.addOption = this.addOption.bind(this);
    }

    addOption() {
        this.selectedOptions.push({ option: "" });
    }

    render() {

        const { selectOptions, selectedOptions } = this.state;

        return(
            <form className="genre-select">
                <label>Genre</label>
                <Multiselect
                    options={selectOptions}
                    displayValue="option"
                    showCheckbox={true}
                    selectedValues={selectedOptions}
                    placeholder="Select Genre"
                    showArrow
                />
            </form>
        )   
    }
}