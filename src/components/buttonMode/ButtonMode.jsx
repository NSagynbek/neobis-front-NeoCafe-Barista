import "./buttonModeStyles.css";

function ButtonMode({setCount,count,handleButtonMode }){

    const handleIncrement = () => {
        setCount((prev) => {
          return prev + 1;
        });
        handleButtonMode()
      };

      const handleDecrement = () => {
        if (count > 0) {
          setCount((prev) => {
            return prev - 1;
          });
          handleButtonMode()
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