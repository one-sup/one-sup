import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { SupMessagesMessageExtensionConfig } from "../SupMessagesMessageExtensionConfig";

describe("SupMessagesMessageExtensionConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<SupMessagesMessageExtensionConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<SupMessagesMessageExtensionConfig />);
        const divResult = component.containsMatchingElement(<Header content="Sup Messages configuration" />);

        expect(divResult).toBeTruthy();
    });
});


