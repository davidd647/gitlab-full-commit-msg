# gitlab-full-commit-msg

A Google Chrome extension (tested on ver 68.0.3440.106) that works on GitLab's pipelines page. Full commit messages are displayed instead of truncated ones.


### Reason for building this:
- Commit messages are one of the best things to help you navigate through different versions of your code... So why are they truncated? In concession, I guess it looks nice... But I think being able to see the whole commit message without having to navigate into each commit, or edit the CSS every time is a lot nicer and more functional. So I made this thing to edit the CSS every time you open the pipelines page!

### Outstanding issues:
- Not super pretty.

### Directions:
- Clone the repo into a directory
- Go to chrome://extensions
- Turn on Developer mode (there should be a toggle on the top right)
- Click 'LOAD UNPACKED' 
- Select the directory where you cloned the repo to
- The extension should appear in your extensions list! Toggle it on
- Go to one of your pipelines in GitLab - the commit messages should be output in full, and you should get a message in your console that tells you it's working.
