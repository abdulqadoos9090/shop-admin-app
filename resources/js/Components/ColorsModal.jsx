import React, {useEffect, useState} from "react";
import {SketchPicker} from "react-color";
import {ADD} from "../Helpers/Constants";

const ColorsModal = ({handleInputChange}) => {
    const initialColor = "#fff";
    const [color, setColor] = useState(() => initialColor);
    return (
        <div className="modal" id="colorModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <div className=" d-flex justify-content-center">
                            <SketchPicker
                                color={color}
                                onChangeComplete={(color) => setColor(color.hex)}
                            />
                        </div>
                        <div className="my-2 d-flex justify-content-center">
                              <span className="bg-light custom-color hover-pointer " onClick={() => {
                                  handleInputChange(color, ADD);
                                  setColor(initialColor);
                              }}>
                                    <i className="fa fa-check text-success"/>
                                </span>
                            <span className="mx-3"/>
                            <span className="bg-light custom-color hover-pointer" data-bs-dismiss="modal">
                                    <i className="fa fa-times text-danger"/>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorsModal;
