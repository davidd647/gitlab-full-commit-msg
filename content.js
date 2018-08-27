console.log('🔥Thank you🔥 for running the GitLab Full Commit Message script!');



var projectName = document.querySelector('.sidebar-context-title').innerText;

console.log('gitlab-speech-tracker is on');
// console.log('%c       \n      ', 'font-size: 100px; background: url(https://s8.favim.com/orig/141226/adventure-time-cartoon-finn-gif-Favim.com-2337968.gif) no-repeat;');

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

