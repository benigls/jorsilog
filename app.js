$(document).ready(function() {
	var data =
	[
	    {
	        "keywords": [
	            "voucher",
	            "print",
	            "sis"
	        ],
	        "link": "https://www.facebook.com/groups/877212202301031/permalink/877283145627270/"
	    },
	    {
	        "keywords": [
	            "music",
	            "registration",
	            "organizer"
	        ],
	        "link": "https://www.facebook.com/groups/877212202301031/permalink/877322645623320/"
	    },
	    {
	        "keywords": [
	            "overload",
	            "requirements",
	            "certification"
	        ],
	        "link": "https://www.facebook.com/groups/877212202301031/permalink/877282138960704/"
	    }
	]

	$(document).ready(function() {
	    $("li").find('button:contains("Post")')
	            .parent().append("<button id='check' class='_42ft _4jy0 _11b _4jy3 _4jy1'>Look for Answer</button>");

	    $("#u_0_2").append("<li class='groupsCleanLinkBorder'><a href='#' class='groupsCleanLink'>Filter Post</a></li>");

	    function check(content) {
	        var regex;

	        for (var post in data) {
	            for (var keyword in data[post].keywords) {
	                regex = new RegExp(data[post].keywords[keyword], "gi");

	                if (content.match(regex)) {
	                    return data[post].link;
	                }
	            }
	        }

	        return false;
	    }

	    document.getElementById("check").addEventListener("click", function(e) {
	        e.preventDefault();
	        var url = check($("textarea[placeholder='Write something...']").val());
	        
	        if (url) {
	            if (window.prompt("Eto yung sagot, di ka kasi nagbabase e: ", url)) {
	                var win = window.open(url, "_blank");
	                win.focus();
	            }
	        } else {
	            alert("Ge, magtanong na ka");
	        }
	    }, false);

	    
	    console.log("Done Loading");
	});
});