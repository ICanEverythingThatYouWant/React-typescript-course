import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
            <Card variant={CardVariant.outlined} width='200px' height='200px'>
                <button> кнопка </button>
            </Card>
        </div>
    );
};

export default App;