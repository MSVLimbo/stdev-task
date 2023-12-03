import useStyles from "./styles.ts";
import {useAccessibilityStyles} from "../styles/utils/accessibility.ts";
import Main from "../components/atoms/Main";

function App() {
    useStyles();
    useAccessibilityStyles();

    return (
        <Main />
    )
}

export default App
