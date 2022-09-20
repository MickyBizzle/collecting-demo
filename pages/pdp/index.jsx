import {ThemeProvider} from "@emotion/react";
import {theme} from "../../theme/theme";
import style from "./pdp.module.scss";

function PDP() {
    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <div className={`${style.grid} grid`}>
                    <div className={style.grid__cell}>
                        Grid cell 1
                    </div>
                    <div className={style.grid__cell}>
                        Grid cell 2
                    </div>
                    <div className={style.grid__cell}>
                        Grid cell 3
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default PDP;
