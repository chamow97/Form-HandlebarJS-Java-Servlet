(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['form'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<label for=\""
    + alias4(((helper = (helper = helpers.tagId || (depth0 != null ? depth0.tagId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.tagName || (depth0 != null ? depth0.tagName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagName","hash":{},"data":data}) : helper)))
    + "</label>\n						<input name=\""
    + alias4(((helper = (helper = helpers.tagName || (depth0 != null ? depth0.tagName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagName","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" type=\""
    + alias4(((helper = (helper = helpers.tagType || (depth0 != null ? depth0.tagType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagType","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.tagId || (depth0 != null ? depth0.tagId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagId","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.tagPlaceHolder || (depth0 != null ? depth0.tagPlaceHolder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagPlaceHolder","hash":{},"data":data}) : helper)))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<label for=\""
    + alias4(((helper = (helper = helpers.tagId || (depth0 != null ? depth0.tagId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.tagName || (depth0 != null ? depth0.tagName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagName","hash":{},"data":data}) : helper)))
    + "</label>\n						<br />\n							<div class=\"btn-group\" data-toggle=\"buttons\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tagChoices : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "								  <label class=\"btn btn-default "
    + alias4(((helper = (helper = helpers.subtagClass || (depth0 != null ? depth0.subtagClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtagClass","hash":{},"data":data}) : helper)))
    + "\">\n								  <input name=\""
    + alias4(((helper = (helper = helpers.subtagName || (depth0 != null ? depth0.subtagName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtagName","hash":{},"data":data}) : helper)))
    + "\" type=\"radio\">\n								  "
    + alias4(((helper = (helper = helpers.choice || (depth0 != null ? depth0.choice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"choice","hash":{},"data":data}) : helper)))
    + "\n								  </label>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<label for=\""
    + alias4(((helper = (helper = helpers.tagId || (depth0 != null ? depth0.tagId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.tagName || (depth0 != null ? depth0.tagName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagName","hash":{},"data":data}) : helper)))
    + "</label>\n						<input class=\"form-control\" type=\""
    + alias4(((helper = (helper = helpers.tagType || (depth0 != null ? depth0.tagType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagType","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.tagId || (depth0 != null ? depth0.tagId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagId","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.tagPlaceHolder || (depth0 != null ? depth0.tagPlaceHolder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagPlaceHolder","hash":{},"data":data}) : helper)))
    + "\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<input class=\""
    + alias4(((helper = (helper = helpers.tagClass || (depth0 != null ? depth0.tagClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagClass","hash":{},"data":data}) : helper)))
    + " left-margin-2 right-margin-2\" onclick=\""
    + alias4(((helper = (helper = helpers.buttonFunction || (depth0 != null ? depth0.buttonFunction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonFunction","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = helpers.buttonType || (depth0 != null ? depth0.buttonType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonType","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.choice || (depth0 != null ? depth0.choice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"choice","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = container.invokePartial(partials.heading,depth0,{"name":"heading","hash":{"tagName":"div"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<div class=\"center-text\" id=\"form-errors\">\n		</div>\n		<form>\n			\n			<div id=\"user-form\" class=\"form-group\">\n				<div class=\"row\">	\n				<div class=\"col-sm-2 col-md-3 col-lg-3\">\n				</div>\n				<div class=\"col-sm-8 col-md-6 col-lg-6\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<br />\n					<br />\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.email : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<br />\n					<br />\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.gender : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<br />\n					<br />\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.password : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<br />\n					<br />\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.confirmPassword : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<br />\n					<br />\n					<div class=\"col col-sm-offset-3 col-md-offset-5 col-lg-offsert-5\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n				<div class=\"col-sm-2 col-md-3 col-lg-3\">\n				</div>\n			</div>\n			</div>\n		</form>";
},"usePartial":true,"useData":true});
})();