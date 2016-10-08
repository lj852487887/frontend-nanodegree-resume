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
			"name":"The University of Hong Kong",
			"location":"Hong Kong",
			"degree":"Master",
			"major":"Computer Science",
			"dates":"2015/09 - 2017/06",
			"url":"http://www.hku.hk/"
		},
		{
			"name":"Sun Yat-sen University",
			"location":"Guangzhou",
			"degree":"Bachelor",
			"major":"Digital Media Arts",
			"dates":"2008/09 - 2013/06",
			"url":"http://www.sysu.edu.cn/"
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
			"title":"Distributed data analysis system based on Stack Overflow data",
			"dates":"2016/03-2016/05",
			"description":"Based on Map-Reduce in Hadoop, analysis 10Gb data of Stack Overflow, use Elasticsearch as search engine, Logstash as data transport, Kibana as data display.",
			"images":[]
		},
		{
			"title":"3D multiple players card combat game “Evolution”",
			"dates":"2016/05-2016/08",
			"description":"	Use Unity as client, and use Photon engine as server, it is card combat game like Hearth Stone. We implemented it with design patterns such as MVC framework, generic, event center and singleton.",
			"images":[]
		}
	]
};

function appendToResume(section, html, data) {
    $(section).append( html.replace("%data%", data) );
}

function displayBio () {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role) );
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name) );

	appendToResume("#topContacts",HTMLmobile,bio.contacts.mobile);
	appendToResume("#topContacts",HTMLemail,bio.contacts.email);
	appendToResume("#topContacts",HTMLgithub,bio.contacts.github);
	appendToResume("#topContacts",HTMLlocation,bio.contacts.location);

	appendToResume("#header",HTMLbioPic,bio.biopic);
	appendToResume("#header",HTMLwelcomeMsg,bio.welcomeMessage);

	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		appendToResume("#skills", HTMLskills,skill);
	});
}
function displayEducation () {
	education.schools.forEach(function(school){
		$("#education").append(HTMLschoolStart);
		var formatedSchoolName = HTMLschoolName.replace("%data%", school.name);
		formatedSchoolName = formatedSchoolName.replace("#", school.url);
		var formatedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formatedSchoolName+formatedSchoolDegree);
		appendToResume(".education-entry:last", HTMLschoolDates,school.dates );
		appendToResume(".education-entry:last", HTMLschoolMajor,school.major );
	});
}

function displayWork () {
	work.jobs.forEach(function(job){
		$("#workExperience").append(HTMLworkStart);
		var formatedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		formatedEmployer = formatedEmployer.replace("#", job.url);
		var formatedTile = HTMLworkTitle.replace("%data%", job.title);
		$(".work-entry:last").append(formatedEmployer+formatedTile);
		appendToResume(".work-entry:last", HTMLworkDates,job.dates );
		appendToResume(".work-entry:last", HTMLworkDescription,job.description );
	});
}

function displayProject () {
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
		var formatedTile = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formatedTile);
		appendToResume(".project-entry:last", HTMLprojectDates,project.dates );
		appendToResume(".project-entry:last", HTMLprojectDescription,project.description );
	});
}

displayBio();
displayEducation();
displayWork();
displayProject();