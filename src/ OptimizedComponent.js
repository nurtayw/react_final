import React, { useMemo } from 'react';

const HeavyComponent = ({ data }) => {
    const computedData = useMemo(() => {
        // Дорогая вычислительная функция
        return data.map(item => item * 2);
    }, [data]);

    return (
        <div>
            {computedData.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default React.memo(HeavyComponent);
