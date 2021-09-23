import React from 'react';
import { useGlobalContext } from "../util/context";

const PageButtons = () => {
    const {loading, page, nbPages} = useGlobalContext();
    return (
        <div className="btn-container">
            <button disabled={loading}>prev</button>
            <p>{page} to {nbPages}</p>
            <button disabled={loading}>next</button>
        </div>
    )
}

export default PageButtons;

