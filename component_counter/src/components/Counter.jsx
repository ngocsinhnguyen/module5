import { useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <h2>Giá trị: {count}</h2>
            <button onClick={handleClick}>Tăng</button>
        </div>
    );
}

export default Counter;