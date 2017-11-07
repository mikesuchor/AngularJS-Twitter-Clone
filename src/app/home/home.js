angular
.module('app')
.component('home', {
  templateUrl: 'app/home/home.html',
  controller: function() {
    var vm = this;
    vm.tweets = [
        {
            photo: "https://pbs.twimg.com/profile_images/861332770374770688/MSbiM1ec_bigger.jpg",
            name: "CodeToJoy",
            handle: "CodeToJoy1",
            tweet: "R2D51-52 <a href=\"https://twitter.com/hashtag/100DaysOfCode?src=hash\">#100DaysOfCode<\/a> SQL JOIN, More Java. Didn’t get the job I interviewed for. It was a good xp tho! Hoping I get another opportunity."
        },{
            photo: "https://pbs.twimg.com/profile_images/744777232002875392/NEUCj20S_bigger.jpg",
            name: "100daysofCode",
            handle: "_100DaysOfCode",
            tweet: "Hi <a href=\"https://twitter.com/rmahesh\">@rmahesh<\/a> thanks for the follow! What are you working on today?"
        },{
            photo: "https://pbs.twimg.com/profile_images/717789136606928896/ddrecp7p_bigger.jpg",
            name: "edX",
            handle: "edXOnline",
            tweet: "Want to learn how to get people to engage with your brand, but not sure where to begin? Start here: <a href=\"https://t.co/CebhzqCIxm\">http://bit.ly/2lissBf<\/a>",
            image: {
              url: "https://pbs.twimg.com/card_img/925748115868672001/M3r-F9hw?format=jpg&name=600x314",
              heading: "Digital Branding and Engagement",
              description: "Learn how to increase brand engagement through the creation and distribution of content using an owned digital channel approach.",
              link: "edx.org"
            }
        },{
            photo: "https://pbs.twimg.com/profile_images/744777232002875392/NEUCj20S_bigger.jpg",
            name: "100daysofCode",
            handle: "_100DaysOfCode",
            tweet: "Thanks for the following <a href=\"https://twitter.com/Tru2Lane\">@Tru2Lane<\/a>! How are you today?"
        },{
            photo: "https://pbs.twimg.com/profile_images/744777232002875392/NEUCj20S_bigger.jpg",
            name: "100daysofCode",
            handle: "_100DaysOfCode",
            tweet: "Thanks for the following <a href=\"https://twitter.com/johndv217\">@johndv217<\/a>! How are you today?"
        },{
            photo: "https://pbs.twimg.com/profile_images/915295723813453824/tBI_Cb2R_bigger.jpg",
            name: "Gautam Saxena",
            handle: "TheG_Type",
            tweet: "Unfortunately left <a href=\"https://twitter.com/hashtag/100DaysofCode?src=hash\">#100DaysofCode<\/a> challenge for 2 weeks due to bad health... Continuing from tomorrow 😎😎✌️"
        },{
            photo: "https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362_bigger.png",
            name: "freeCodeCamp",
            handle: "freeCodeCamp",
            tweet: "Your ultimate guide to the Google Maps SDK on iOS using Swift 4, by <a href=\"https://twitter.com/atanasov_d\">@atanasov_d<\/a>",
            image: {
              url: "https://pbs.twimg.com/card_img/926529110725287936/NwTNXfbw?format=png&name=600x314",
              heading: "Your ultimate guide to the Google Maps SDK on iOS, using Swift 4",
              description: "Many iOS apps use Google Maps. This is a very common feature, so I have decided to prepare an ultimate guide on the Google Maps SDK for iOS...",
              link: "medium.freecodecamp.org"
            },          
        },{
            photo: "https://pbs.twimg.com/profile_images/546011298627334146/MAeF2-yK_bigger.jpeg",
            name: "CSS-Tricks",
            handle: "Real_CSS_Tricks",
            tweet: "One thing CSS grid allows you to do is _name things_, so when you go to place things, it's clear what's going on.<a href=\"https://t.co/PNO6vV3CAZ\">https://www.smashingmagazine.com/2017/10/naming-things-css-grid-layout/<\/a>",
            image: {
              url: "https://pbs.twimg.com/media/DNEZ6FQV4AAKPqn.jpg"
            },          
        },{
            photo: "https://pbs.twimg.com/profile_images/902543400901132292/m_G290UH_bigger.jpg",
            name: "Hitesh Joshi",
            handle: "Evoxtorm",
            tweet: "<a href=\"https://t.co/nJlmZXWYBk\">fb.me/RxVpJr5j<\/a>"
        },{
            photo: "https://pbs.twimg.com/profile_images/744777232002875392/NEUCj20S_bigger.jpg",
            name: "100daysofCode",
            handle: "_100DaysOfCode",
            tweet: "Hi <a href=\"https://twitter.com/A__nesti\">@A__nesti<\/a> thanks for the follow! What are you working on today?"         
        }
    ]
}
});