/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name":"Li Jun",
	"role":"Client Developer",
	"welcomeMessage":"",
	"biopic":"images/fry.jpg",
	"contacts":{
		"mobile":"56208425",
		"email":"u3523747@connect.hku.hk",
		"github":"lj852487887",
		"location":"Hong Kong"
	},
	"skills":["familiar with C++ ","familiar with JavaScript ","familiar with C# "]
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
			"employer":"",
			"title":"",
			"location":"",
			"dates":"",
			"description":""
		},
		{
			"employer":"",
			"title":"",
			"location":"",
			"dates":"",
			"description":""
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
	appendToResume("#skills", HTMLskills,bio.skills );
}

addBio();


