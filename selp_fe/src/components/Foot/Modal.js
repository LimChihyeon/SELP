import React from "react"
import "styles/Modal.css"

const Modal = props => {
    const { open, close, header } = props

    return (
        <div classNAme={open ? "openModal modal" : "modal"}></div>
    )
}