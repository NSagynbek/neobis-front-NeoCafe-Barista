import "./buttonModeStyles.css";

function ButtonMode({setCount,count,setTimeOut }){

    const handleIncrement = () => {
        setCount((prev) => {
          return prev + 1;
        });
        setTimeOut(3000)
      };

      const handleDecrement = () => {
        if (count > 0) {
          setCount((prev) => {
            return prev - 1;
          });
          setTimeOut(3000)
        }
      };

    return(
            <div className="button-mode-container">
                <button 
                  className="button-mode-decriment"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <p className="button-mode-number">{count}</p>
                <button 
                  className="button-mode-decriment"
                  onClick={handleIncrement}
                >
                    +
                 </button>
            </div>
    )
}

export default ButtonMode;