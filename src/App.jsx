import React from "react";

import './App.css';

const App = () => {
    const [fdapi, set_fdapi] = React.useState([]);

    React.useEffect(
        () => {
            fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
                .then(res => res.json())
                .then(obj => JSON.stringify(obj, null, 2))
                // .then(res => res.text())
                .then(text => set_fdapi(text))
        }
        , []
    );

    return <div id="react_app">
        <pre>
            {fdapi}
        </pre>

    </div>;
}

export default App;
