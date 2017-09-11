const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");
const Data = require('sf-core/data');

// Get generetad UI code
var Page1Design = require("../ui/ui_page1");

const Page1 = extend(Page1Design)(
    function(_super) {
        var self = this;
        _super(self);

        this.headerBar.leftItemEnabled = false;
        this.flexlayout.children.btn.onPress = btn_onPress.bind(this);
        this.btnNext.onPress = btnNext_onPress.bind(this);
    });

function btnNext_onPress() {
    Data.setBooleanVariable('userLogged',true); 
    alert("Data saved");
}


// Gets/sets press event callback for btn
function btn_onPress() {
    alert(String(Data.getBooleanVariable('userLogged')), "Retrieved Data");
}

module && (module.exports = Page1);
