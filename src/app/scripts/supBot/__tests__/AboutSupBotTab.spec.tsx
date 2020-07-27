import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { AboutSupBotTab } from "../AboutSupBotTab";

describe("AboutSupBot Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<AboutSupBotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<AboutSupBotTab />);
        const divResult = component.containsMatchingElement(<Header content="Welcome to the Sup Bot bot page" />);
        expect(divResult).toBeTruthy();
    });
});
