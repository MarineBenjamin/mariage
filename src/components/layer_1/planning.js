let layer1PlanningButton = new Element(BUTTON);
layer1PlanningButton.set_id("planning");
layer1PlanningButton.set_backgroundColor("transparent")
layer1PlanningButton.set_border("0px");
// layer1PlanningButton.set_outline("0px");
//layer1PlanningButton.set_width("20%");
//layer1PlanningButton.set_height("40%");
layer1PlanningButton.set_textContent("Le mariage");
layer1PlanningButton.set_textAlign("center");
//layer1PlanningButton.set_color("#FFFFFF");
layer1PlanningButton.set_fontFamily("Supermercado One");
layer1PlanningButton.set_fontSize("200%");
layer1PlanningButton.set_fontWeight("bold");
//layer1PlanningButton.set_position("absolute");
layer1PlanningButton.set_padding("0% 0% 0% 0%");
layer1PlanningButton.set_margin("0% 0% 0% 0%");
// layer1PlanningButton.set_borderRadius("10px");
// layer1PlanningButton.set_border("solid #4169E1 2px");
//layer1PlanningButton.set_left("15%");
//layer1PlanningButton.set_top("30%");
layer1PlanningButton.set_cursor("pointer");
layer1PlanningButton.set_functionOnClick( scroll_down_event );
layer1PlanningButton.set_parent(layer1Buttons);