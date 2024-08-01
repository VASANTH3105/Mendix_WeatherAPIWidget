import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/UnknownWidget.css";

export function UnknownWidget({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
