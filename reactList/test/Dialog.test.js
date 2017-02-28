import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Dialog from '../app/components/dialog/Dialog.js';

describe("Dialog suite", function() {

    it("should only have the 'dialog' className by default", function() {
        let dialog = shallow(<Dialog />);
        expect(dialog.props().className).to.equal('dialog');
    });

    it("should have an additional 'opening' className if opening={true} is given", function () {
        let opening = true;
        let dialog = shallow(<Dialog opening={opening}/>);
        expect(dialog.props().className).to.contain('opening');
    });
});