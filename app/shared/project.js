"use strict";
var Project = (function () {
    function Project(id, title, sub, cat, desc, img, tilePos) {
        this.id = id;
        this.title = title;
        this.sub = sub;
        this.cat = cat;
        this.desc = desc;
        this.img = img;
        this.tilePos = tilePos;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map
