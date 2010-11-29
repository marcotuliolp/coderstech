/**
 * General utility for log purpose
 * 
 * @author marcotulio
 */
function CTechLog(preferences){

    this.logPreference = "log";
    this.enabled = preferences.getBool(this.logPreference);
    this.console = Application.console;
    
    this.debug = function(string){
        if (this.enabled) {
            this.console.log("[DEBUG] - " + string);
        }
    }
    this.info = function(string){
        if (this.enabled) {
            this.console.log("[INFO] - " + string);
        }
    }
    this.warn = function(string){
        if (this.enabled) {
            this.console.log("[WARN] - " + string);
        }
    }
    this.error = function(string){
        if (this.enabled) {
            this.console.log("[ERROR] - " + string);
        }
    }
}

/**
 * General utilities
 */
function CTechUtils(){
    this.getOperationSystem = function(){
        var sysInfo = Components.classes['@mozilla.org/system-info;1'].getService(Components.interfaces.nsIPropertyBag2);
        var plataform = sysInfo.getProperty('name');
        return plataform;
    }
	
	this.isMacOS = function(){
		return this.getOperationSystem() == "Darwin";
	}
    
    this.trim = function(string){
        if (string != null && string != undefined) {
            return string.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        return string;
    }
    
    this.getElement = function(id, aDocument){
        if (aDocument) {
            return aDocument.getElementById(id);
        }
        return document.getElementById(id);
    }

	this.getBrowserWindow = function(){
		var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
		return wm.getMostRecentWindow("navigator:browser");
	}
}
