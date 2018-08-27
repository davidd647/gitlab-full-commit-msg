console.log('🔥Thank you🔥 for running the GitLab Full Commit Message script!');



var projectName = document.querySelector('.sidebar-context-title').innerText;


var tracking = document.querySelector('.ci-running') ? true : false;
var contentWrapper = document.querySelector('.content-wrapper');

var contentObserver = new MutationObserver(function(mutationsList){
  // this code will display any mutations:
  // console.log(mutationsList);
  
	document.querySelectorAll('.flex-truncate-child').forEach((commitMessage) => {
	  commitMessage.style.flex = "none";
	});

	document.querySelectorAll('.branch-commit').forEach((commitMessage) => {
	  commitMessage.style.marginTop = "2rem";
	});

});

contentObserver.observe(contentWrapper, { childList: true, subtree: true});

