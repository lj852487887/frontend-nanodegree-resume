/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name":"Li Jun",
	"role":"Client Developer",
	"welcomeMessage":"",
	"biopic":"images/photo.jpg",
	"contacts":{
		"mobile":"56208425",
		"email":"u3523747@connect.hku.hk",
		"github":"lj852487887",
		"location":"Hong Kong"
	},
	"skills":[
		"Full stack web development: Bootstrap, HTML5, Node.js, MongoDB",
		"Distributed system development in Linux: Hadoop, Elasticsearch, Kibana, Logstash",
		"Game development: Unity 3d, Web game development",
		"Program language: JavaScript, C#, C++, Python",
		"English: TOEFL 90, CET-6 503" 
	]
};

var education = {
	"schools":[
		{
			"name":"University of Hong Kong",
			"location":"Hong Kong",
			"degree":"Master",
			"majors":["Computer Science"],
			"dates":"2017-06-20",
			"url":""
		},
		{
			"name":"Sun Yat-sen University",
			"location":"Guangzhou",
			"degree":"Bachelor",
			"majors":["Digital Media Arts"],
			"dates":"2013-06-20",
			"url":""
		}
	],
	"onlineCourses":[
		{
			"title":"",
			"school":"",
			"dates":"",
			"url":""
		}
	]
};
var work = {
	"jobs":[
		{
			"employer":"SenseTime Co., Ltd.",
			"url":"http://www.sensetime.com/",
			"title":"Software Develop Internship",
			"location":"Hong Kong",
			"dates":"2016/06 – 2016/09",
			"description":"SenseTime campus recruitment Website<br>Use Jade template and Bootstrap in client, use Node.js and Express in server, use MongoDB as database.\nDeveloped client pages and server, database functional models.<br>②Virtual Reality Glasses Application<br>Based on SenseTime’s human face recognition API, use Unity to develop a VR application on windows. Deployed in advertise machines.\nDeveloped with C# and C++, use memory share to get the camera data and render it with 3D models in Unity."
		},
		{
			"employer":"4399 Network Co., Ltd.",
			"url":"http://www.4399.com/",
			"title":"Game Client Develop Engineer",
			"location":"Xiamen",
			"dates":"2013/08 - 2015/04",
			"description":"①Action web game “Dream Brotherhood”<br>Developed additional mini game modules for the web game. Developed a variety of popular mini games independently, including link-link, fruit ninja, candy crash, 2048.\nDeveloped all client UI and functional game modules, and developed several server functional modules with JavaScript in Node.js framework.<br>②Shooting web game “Contra Legion”<br>Developed all client UI and functional modules, and most of server functional modules.\nDesign the protocols between client and sever and developed modules to create different types of bullets.\nUse MVC framework to develop client modules such as Bag module, Role module, Pet module, Dungeon module, PK module and so on. Developed the server functional modules for all the functional modules above."
		}
	]
};

var projects = {
	"projects":[
		{
			"title":"",
			"dates":"",
			"description":"",
			"images":[]
		}
	]
};

function appendToResume(section, html, data) {
    $(section).append( html.replace("%data%", data) );
}

function addBio () {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role) );
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name) );

	appendToResume("#topContacts",HTMLmobile,bio.contacts.mobile);
	appendToResume("#topContacts",HTMLemail,bio.contacts.email);
	appendToResume("#topContacts",HTMLgithub,bio.contacts.github);
	appendToResume("#topContacts",HTMLlocation,bio.contacts.location);

	appendToResume("#header",HTMLbioPic,bio.biopic);
	appendToResume("#header",HTMLwelcomeMsg,bio.welcomeMessage);

	$("#header").append(HTMLskillsStart);
	for(i in bio.skills){
		appendToResume("#skills", HTMLskills,bio.skills[i] );
	}
}

function addWork () {
	for(i in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formatedEmployer = formatedEmployer.replace("#", work.jobs[i].url);
		var formatedTile = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formatedEmployer+formatedTile);
		appendToResume(".work-entry:last", HTMLworkDates,work.jobs[i].dates );
		appendToResume(".work-entry:last", HTMLworkDescription,work.jobs[i].description );
	}
}

addBio();
addWork();