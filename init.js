const mongoose = require('mongoose');
const chat=require("./models/chat.js");

main()
.then((res)=>{
    console.log("connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const allchats=[
    {
        from: "Dwayne Johnson",
        to: "World",
        msg: "Be humble, be hungry, and always be the hardest worker in the room! 💪🔥",
        created_at: new Date()
    },
    {
        from: "Oprah Winfrey",
        to: "Dreamers",
        msg: "The biggest adventure you can take is to live the life of your dreams. 🌟✨",
        created_at: new Date()
    },
    {
        from: "Elon Musk",
        to: "Innovators",
        msg: "When something is important enough, you do it even if the odds are not in your favor. 🚀🔧",
        created_at: new Date()
    },
    {
        from: "Taylor Swift",
        to: "Swifties",
        msg: "No matter what happens in life, be good to people. It’s a wonderful legacy to leave behind. 🎵❤️",
        created_at: new Date()
    },
    {
        from: "Cristiano Ronaldo",
        to: "Fans",
        msg: "Your love makes me strong, your hate makes me unstoppable. ⚽🔥",
        created_at: new Date()
    },
    {
        from: "Shah Rukh Khan",
        to: "Fans",
        msg: "Success is not a good teacher, failure makes you humble. 🌟📚",
        created_at: new Date()
    },
    {
        from: "Michelle Obama",
        to: "Leaders",
        msg: "Success isn’t about how much money you make; it’s about the difference you make in people’s lives. 🌍💖",
        created_at: new Date()
    },
    {
        from: "Lionel Messi",
        to: "Football Lovers",
        msg: "You have to fight to reach your dream. You have to sacrifice and work hard for it. ⚽🏆",
        created_at: new Date()
    },
    {
        from: "Amitabh Bachchan",
        to: "Fans",
        msg: "Bad times either destroy you or make you stronger. 💪🌟",
        created_at: new Date()
    },
    {
        from: "Jennifer Lopez",
        to: "Dreamers",
        msg: "You get what you give. What you put into things is what you get out of them. 💼✨",
        created_at: new Date()
    }
];
;

chat.insertMany(allchats);