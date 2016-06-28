# Twitter AutoRespond!
Automatically respond to specific user's tweet with the Twitter Streaming API and Nodejs


##To use
###Set the user (ID) of who you'd like to respond to.
If you want to respond to my tweets your params should look like this.
`var params = { follow: '1666332390' }`

[Quick tool to look up users id](http://gettwitterid.com/)

###Insert your tweet
Make sure your message starts with `@UserNameYouAreRespondingToo` (This should match the user id)

If you'd like to send a tweet with an image, drop the image in the directory of this repo and write the file name in the data variable. 

Be sure to comment out whichever tweet response you are not using (Either tweet or tweet with media.).

### Fire her up
Enter the command `node server` and enjoy

To end the program `Ctrl + C`

###Thats all folks
Let me know if you have any questions or issues on twitter @dominickmalzone



